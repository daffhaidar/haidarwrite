import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigationLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "blog", label: "Blog", href: "#blog" },
    { id: "testimonials", label: "Testimonials", href: "#testimonials" },
    { id: "about", label: "About", href: "#about" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = (sectionId) => {
    setIsMenuOpen(false);
    smoothScrollTo(sectionId);
  };

  // Smooth scroll functionality with offset for fixed navbar
  const smoothScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // 16 * 4 = 64px (h-16 in Tailwind)
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  // Intersection Observer for active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is 20% from top
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navigationLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      navigationLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [navigationLinks]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-dark-green-800/20 safe-area-padding">
      <div className="container-max">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => handleLinkClick("home")} className="text-lg sm:text-xl font-bold text-dark-green-400 hover:text-dark-green-300 transition-colors duration-200 touch-target">
              Daffa Haidar
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-dark-green-400 touch-target ${
                    activeSection === link.id ? "text-dark-green-400 border-b-2 border-dark-green-400" : "text-light hover:text-dark-green-300"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center touch-target rounded-md text-light hover:text-dark-green-400 hover:bg-dark-green-900/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dark-green-400 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {/* Hamburger icon */}
              <svg className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-dark/98 backdrop-blur-sm border-t border-dark-green-800/20 safe-area-padding">
          {navigationLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left touch-target text-base font-medium transition-colors duration-200 hover:text-dark-green-400 hover:bg-dark-green-900/20 rounded-md ${
                activeSection === link.id ? "text-dark-green-400 bg-dark-green-900/30" : "text-light"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
