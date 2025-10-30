import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to portfolio section
  const scrollToPortfolio = () => {
    const portfolioElement = document.getElementById("portfolio");
    if (portfolioElement) {
      const navbarHeight = 64; // Account for fixed navbar
      const elementPosition = portfolioElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden safe-area-padding">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-green-900/20 to-dark-green-800/30" />

      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/40" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-mobile text-center py-16 xs:py-20 sm:py-0">
        {/* Name with entrance animation */}
        <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-light block xs:inline">Daffa</span> <span className="text-dark-green-400 block xs:inline">Haidar</span>
        </h1>

        {/* Tagline with staggered animation */}
        <p
          className={`text-sm xs:text-base sm:text-lg md:text-xl text-gray-custom mb-3 xs:mb-4 sm:mb-6 font-light leading-relaxed transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block xs:inline">Storyteller</span>
          <span className="hidden xs:inline"> • </span>
          <span className="block xs:inline">Copywriter</span>
          <span className="hidden xs:inline"> • </span>
          <span className="block xs:inline">Technical Writer</span>
        </p>

        {/* Niche Specialization - Made more prominent */}
        <div className={`mb-4 xs:mb-5 sm:mb-6 md:mb-8 px-2 xs:px-0 transition-all duration-1000 ease-out delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-dark-green-400 font-semibold leading-tight mb-1 xs:mb-2">Specializing in Tech, Web3, and Cloud-based storytelling</p>
          <p className="text-xs xs:text-sm sm:text-base text-dark-green-300/80 font-medium">Helping blockchain startups and tech companies communicate with clarity</p>
        </div>

        {/* Subtitle with additional delay */}
        <p
          className={`text-sm xs:text-base sm:text-lg text-light/80 mb-6 xs:mb-8 sm:mb-10 max-w-2xl mx-auto px-2 xs:px-0 leading-relaxed transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Crafting compelling narratives that connect, convert, and inspire action
        </p>

        {/* CTA Button with final animation */}
        <div className={`mb-12 xs:mb-16 sm:mb-20 transition-all duration-1000 ease-out delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button
            onClick={scrollToPortfolio}
            className="group relative inline-flex items-center justify-center min-h-[48px] min-w-[160px] px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base sm:text-lg font-semibold text-dark bg-dark-green-400 rounded-lg hover:bg-dark-green-300 focus:outline-none focus:ring-4 focus:ring-dark-green-400/50 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-dark-green-400/25"
          >
            <span className="relative z-10">View My Work</span>

            {/* Button hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark-green-300 to-dark-green-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Arrow icon */}
            <svg className="relative z-10 ml-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className={`hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-dark-green-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-dark-green-400 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements - responsive positioning */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-2 h-2 bg-dark-green-400/30 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-8 sm:right-16 w-1 h-1 bg-dark-green-300/40 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-dark-green-500/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-dark-green-400/25 rounded-full animate-pulse delay-700" />
    </section>
  );
};

export default HeroSection;
