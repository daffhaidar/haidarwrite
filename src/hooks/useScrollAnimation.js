import { useState, useEffect, useRef } from "react";

// Simple throttle function
const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;
  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Object} - Animation state and ref
 */
export const useScrollAnimation = (options = {}) => {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce && !hasTriggered) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return {
    isVisible,
    elementRef,
    hasTriggered,
  };
};

/**
 * Hook for staggered animations with delay
 * @param {number} index - Index for stagger delay calculation
 * @param {number} staggerDelay - Delay between each item (ms)
 * @param {Object} observerOptions - Intersection observer options
 * @returns {Object} - Animation state and ref with calculated delay
 */
export const useStaggeredAnimation = (index = 0, staggerDelay = 100, observerOptions = {}) => {
  const { isVisible, elementRef } = useScrollAnimation(observerOptions);
  const delay = index * staggerDelay;

  return {
    isVisible,
    elementRef,
    delay,
    style: {
      transitionDelay: isVisible ? `${delay}ms` : "0ms",
    },
  };
};

/**
 * Hook for scroll progress tracking
 * @returns {number} - Scroll progress (0-1)
 */
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    // Throttle scroll events for better performance
    const throttledUpdate = throttle(updateScrollProgress, 16); // ~60fps

    window.addEventListener("scroll", throttledUpdate, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener("scroll", throttledUpdate);
  }, []);

  return scrollProgress;
};
