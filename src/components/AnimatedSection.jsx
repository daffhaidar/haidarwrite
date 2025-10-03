import { useScrollAnimation, useStaggeredAnimation } from "../hooks/useScrollAnimation";

/**
 * Animated wrapper component for sections with fade-in effect
 */
export const AnimatedSection = ({ children, className = "", animation = "fade-up", delay = 0, threshold = 0.1, ...props }) => {
  const { isVisible, elementRef } = useScrollAnimation({ threshold });

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";

    switch (animation) {
      case "fade-up":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;
      case "fade-down":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`;
      case "fade-left":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`;
      case "fade-right":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`;
      case "fade-in":
        return `${baseClasses} ${isVisible ? "opacity-100" : "opacity-0"}`;
      case "scale-in":
        return `${baseClasses} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`;
      default:
        return `${baseClasses} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;
    }
  };

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...props}>
      {children}
    </div>
  );
};

/**
 * Animated list component with staggered animations
 */
export const AnimatedList = ({ children, className = "", staggerDelay = 100, animation = "fade-up", threshold = 0.1 }) => {
  const { isVisible, elementRef } = useScrollAnimation({ threshold });

  return (
    <div ref={elementRef} className={className}>
      {children.map((child, index) => (
        <AnimatedListItem key={child.key || index} index={index} staggerDelay={staggerDelay} animation={animation} isParentVisible={isVisible}>
          {child}
        </AnimatedListItem>
      ))}
    </div>
  );
};

/**
 * Individual animated list item
 */
const AnimatedListItem = ({ children, index, staggerDelay, animation, isParentVisible }) => {
  const delay = index * staggerDelay;

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";

    switch (animation) {
      case "fade-up":
        return `${baseClasses} ${isParentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;
      case "fade-left":
        return `${baseClasses} ${isParentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`;
      case "fade-right":
        return `${baseClasses} ${isParentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`;
      case "scale-in":
        return `${baseClasses} ${isParentVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`;
      default:
        return `${baseClasses} ${isParentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;
    }
  };

  return (
    <div className={getAnimationClasses()} style={{ transitionDelay: isParentVisible ? `${delay}ms` : "0ms" }}>
      {children}
    </div>
  );
};

/**
 * Loading animation component for form submissions
 */
export const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  };

  return (
    <svg className={`animate-spin ${sizeClasses[size]} ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
};
