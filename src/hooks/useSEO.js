import { useEffect } from "react";
import { updateSEOForSection, addStructuredData, generatePortfolioStructuredData, generateBlogStructuredData } from "../utils/seo";

/**
 * Custom hook for managing SEO meta tags and structured data
 * @param {string} section - The current section/page
 * @param {Object} options - Additional SEO options
 */
export const useSEO = (section = "home", options = {}) => {
  useEffect(() => {
    // Update basic SEO elements for the section
    updateSEOForSection(section);

    // Add custom structured data if provided
    if (options.structuredData) {
      addStructuredData(options.structuredData, `structured-data-${section}`);
    }

    // Cleanup function to reset to home SEO when component unmounts
    return () => {
      if (section !== "home") {
        updateSEOForSection("home");
      }
    };
  }, [section, options.structuredData]);
};

/**
 * Hook specifically for portfolio SEO with structured data
 * @param {Array} portfolioItems - Array of portfolio items
 */
export const usePortfolioSEO = (portfolioItems = []) => {
  useEffect(() => {
    updateSEOForSection("portfolio");

    if (portfolioItems.length > 0) {
      const structuredData = generatePortfolioStructuredData(portfolioItems);
      addStructuredData(structuredData, "portfolio-structured-data");
    }

    return () => {
      updateSEOForSection("home");
    };
  }, [portfolioItems]);
};

/**
 * Hook specifically for blog SEO with structured data
 * @param {Array} blogPosts - Array of blog posts
 */
export const useBlogSEO = (blogPosts = []) => {
  useEffect(() => {
    updateSEOForSection("blog");

    if (blogPosts.length > 0) {
      const structuredData = generateBlogStructuredData(blogPosts);
      addStructuredData(structuredData, "blog-structured-data");
    }

    return () => {
      updateSEOForSection("home");
    };
  }, [blogPosts]);
};

/**
 * Hook for section-based SEO updates (for single-page app navigation)
 * @param {string} activeSection - The currently active section
 */
export const useSectionSEO = (activeSection) => {
  useEffect(() => {
    if (activeSection && activeSection !== "hero") {
      updateSEOForSection(activeSection);
    } else {
      updateSEOForSection("home");
    }
  }, [activeSection]);
};
