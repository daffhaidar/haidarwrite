import { useState, useRef } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { testimonials } from "../data/testimonials";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Handle touch swipe for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50; // minimum distance for swipe
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextTestimonial(); // Swiped left
      } else {
        prevTestimonial(); // Swiped right
      }
    }
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-8 xs:py-12 sm:py-16 lg:py-24 bg-dark-green-900/10 safe-area-padding">
      <div className="w-full max-w-7xl mx-auto px-mobile">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 xs:mb-3 sm:mb-4">
              <span className="text-dark-green-400">What Clients</span> <span className="text-light">Say</span>
            </h2>
            <p className="text-xs xs:text-sm sm:text-base text-gray-custom max-w-2xl mx-auto px-2">Trusted by tech companies and blockchain startups worldwide</p>
          </div>
        </AnimatedSection>

        {/* Testimonial Card */}
        <AnimatedSection delay={200}>
          <div className="w-full max-w-4xl mx-auto">
            <div
              className="relative bg-dark-green-900/20 backdrop-blur-sm border border-dark-green-400/20 rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Quote Icon */}
              <div className="absolute top-2 left-2 xs:top-4 xs:left-4 sm:top-6 sm:left-6 text-dark-green-400/20">
                <svg className="w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10 pt-4 xs:pt-6 sm:pt-8">
                {/* Quote Text */}
                <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-light/90 mb-4 xs:mb-6 sm:mb-8 leading-relaxed italic pr-2">"{currentTestimonial.quote}"</p>

                {/* Client Info */}
                <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 min-w-0 flex-1">
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-full bg-dark-green-400/20 border-2 border-dark-green-400/40 flex items-center justify-center">
                      <span className="text-dark-green-400 font-bold text-sm xs:text-base sm:text-lg lg:text-xl">{currentTestimonial.name.charAt(0)}</span>
                    </div>

                    {/* Name and Role */}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-light font-semibold text-sm xs:text-base sm:text-lg truncate">{currentTestimonial.name}</h4>
                      <p className="text-gray-custom text-xs xs:text-xs sm:text-sm lg:text-base truncate">
                        {currentTestimonial.role} • {currentTestimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-0.5 xs:gap-1 flex-shrink-0 self-start sm:self-center">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-dark-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              {testimonials.length > 1 && (
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0 xs:px-1 sm:px-2 lg:-mx-16">
                  <button
                    onClick={prevTestimonial}
                    className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 min-h-[44px] min-w-[44px] rounded-full bg-dark-green-900/80 backdrop-blur-sm border border-dark-green-400/30 flex items-center justify-center hover:bg-dark-green-400/20 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-dark-green-400/50"
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-dark-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 min-h-[44px] min-w-[44px] rounded-full bg-dark-green-900/80 backdrop-blur-sm border border-dark-green-400/30 flex items-center justify-center hover:bg-dark-green-400/20 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-dark-green-400/50"
                    aria-label="Next testimonial"
                  >
                    <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-dark-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Dots Indicator */}
            {testimonials.length > 1 && (
              <div className="flex justify-center gap-1.5 xs:gap-2 mt-4 xs:mt-6 sm:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                      index === activeIndex ? "bg-dark-green-400 w-6 xs:w-8 sm:w-10" : "bg-dark-green-400/30 hover:bg-dark-green-400/50 w-2"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
