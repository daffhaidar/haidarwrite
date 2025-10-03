import SocialLinks from "./SocialLinks";
import { contactInfo } from "../data/contactInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "blog", label: "Blog", href: "#blog" },
    { id: "about", label: "About", href: "#about" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

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

  const handleLinkClick = (sectionId) => {
    smoothScrollTo(sectionId);
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 safe-area-padding">
      <div className="container-max py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand and Description */}
          <div className="space-responsive-sm lg:col-span-1">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-dark-green-400 mb-2">Daffa Haidar</h3>
              <p className="text-gray-custom text-responsive-sm leading-mobile">Professional writer and content creator specializing in storytelling, copywriting, and technical writing. Let's create compelling content together.</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-gray-custom text-responsive-xs">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-dark-green-400 transition-colors duration-200 touch-target">
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center text-gray-custom text-responsive-xs">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-responsive-sm">
            <h4 className="text-base sm:text-lg font-semibold text-light">Quick Links</h4>
            <nav className="space-y-2">
              {navigationLinks.map((link) => (
                <button key={link.id} onClick={() => handleLinkClick(link.id)} className="block text-gray-custom hover:text-dark-green-400 transition-colors duration-200 text-responsive-xs touch-target text-left">
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Media and Connect */}
          <div className="space-responsive-sm sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-light">Connect With Me</h4>
            <div className="space-responsive-sm">
              <p className="text-gray-custom text-responsive-xs">Follow me on social media for updates and insights</p>
              <SocialLinks className="flex-wrap" iconSize="w-5 h-5" />

              {/* Availability Status */}
              <div className="pt-2">
                <div className="flex items-center text-responsive-xs">
                  <div className="w-2 h-2 bg-dark-green-400 rounded-full mr-2 animate-pulse flex-shrink-0"></div>
                  <span className="text-gray-custom">{contactInfo.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
            {/* Copyright */}
            <div className="text-gray-custom text-responsive-xs text-center sm:text-left">
              <p>&copy; {currentYear} Daffa Haidar. All rights reserved.</p>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-4 sm:space-x-6 text-responsive-xs">
              <button onClick={() => handleLinkClick("contact")} className="text-gray-custom hover:text-dark-green-400 transition-colors duration-200 touch-target">
                Get In Touch
              </button>
              <span className="text-slate-600">•</span>
              <button onClick={() => handleLinkClick("portfolio")} className="text-gray-custom hover:text-dark-green-400 transition-colors duration-200 touch-target">
                View Work
              </button>
            </div>

            {/* Back to Top Button */}
            <button onClick={() => handleLinkClick("home")} className="flex items-center text-gray-custom hover:text-dark-green-400 transition-colors duration-200 text-responsive-xs group touch-target" aria-label="Back to top">
              <span className="mr-2">Back to Top</span>
              <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
