// SEO utility functions for dynamic meta tag management

/**
 * Updates the document title
 * @param {string} title - The page title
 * @param {boolean} includeBase - Whether to include the base site name
 */
export const updateTitle = (title, includeBase = true) => {
  const baseTitle = "Daffa Haidar - Professional Writer & Content Strategist";
  document.title = includeBase ? `${title} | ${baseTitle}` : title;
};

/**
 * Updates meta description
 * @param {string} description - The meta description
 */
export const updateMetaDescription = (description) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }
};

/**
 * Updates Open Graph meta tags
 * @param {Object} ogData - Object containing OG data
 */
export const updateOpenGraph = (ogData) => {
  const { title, description, image, url, type = "website" } = ogData;

  // Update OG title
  if (title) {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
  }

  // Update OG description
  if (description) {
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", description);
  }

  // Update OG image
  if (image) {
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", image);
  }

  // Update OG URL
  if (url) {
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", url);
  }

  // Update OG type
  const ogType = document.querySelector('meta[property="og:type"]');
  if (ogType) ogType.setAttribute("content", type);
};

/**
 * Updates Twitter Card meta tags
 * @param {Object} twitterData - Object containing Twitter Card data
 */
export const updateTwitterCard = (twitterData) => {
  const { title, description, image, card = "summary_large_image" } = twitterData;

  // Update Twitter title
  if (title) {
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);
  }

  // Update Twitter description
  if (description) {
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", description);
  }

  // Update Twitter image
  if (image) {
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute("content", image);
  }

  // Update Twitter card type
  const twitterCardType = document.querySelector('meta[name="twitter:card"]');
  if (twitterCardType) twitterCardType.setAttribute("content", card);
};

/**
 * Updates canonical URL
 * @param {string} url - The canonical URL
 */
export const updateCanonical = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;
};

/**
 * Adds structured data to the page
 * @param {Object} structuredData - The structured data object
 * @param {string} id - Unique identifier for the script tag
 */
export const addStructuredData = (structuredData, id) => {
  // Remove existing structured data with the same ID
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

/**
 * SEO configuration for different sections
 */
export const seoConfig = {
  home: {
    title: "Daffa Haidar - Professional Writer & Content Strategist",
    description: "Professional writer specializing in storytelling, copywriting, technical documentation, and public speaking. Explore my portfolio of compelling content that drives results.",
    keywords: "professional writer, copywriter, technical writer, content strategist, storytelling, public speaking, portfolio",
    image: "https://daffahaidar.com/og-image.jpg",
    url: "https://daffahaidar.com",
  },
  portfolio: {
    title: "Writing Portfolio - Daffa Haidar",
    description: "Explore my diverse writing portfolio featuring storytelling, copywriting, technical documentation, and public speaking projects that deliver measurable results.",
    keywords: "writing portfolio, copywriting samples, technical writing examples, storytelling portfolio",
    image: "https://daffahaidar.com/portfolio-og.jpg",
    url: "https://daffahaidar.com/#portfolio",
  },
  about: {
    title: "About Daffa Haidar - Professional Writer",
    description: "Learn about my journey as a professional writer, my expertise in content strategy, and how I help businesses communicate effectively through compelling content.",
    keywords: "about daffa haidar, professional writer bio, content strategist background",
    image: "https://daffahaidar.com/about-og.jpg",
    url: "https://daffahaidar.com/#about",
  },
  blog: {
    title: "Writing Blog - Daffa Haidar",
    description: "Read insights on writing, content strategy, storytelling techniques, and industry trends from a professional writer's perspective.",
    keywords: "writing blog, content strategy insights, storytelling tips, writing advice",
    image: "https://daffahaidar.com/blog-og.jpg",
    url: "https://daffahaidar.com/#blog",
  },
  contact: {
    title: "Contact Daffa Haidar - Professional Writer",
    description: "Get in touch for writing projects, content strategy consulting, or speaking engagements. Let's create compelling content together.",
    keywords: "contact writer, hire copywriter, content strategy consultant, writing services",
    image: "https://daffahaidar.com/contact-og.jpg",
    url: "https://daffahaidar.com/#contact",
  },
};

/**
 * Updates all SEO elements for a specific section
 * @param {string} section - The section key from seoConfig
 */
export const updateSEOForSection = (section) => {
  const config = seoConfig[section];
  if (!config) return;

  updateTitle(config.title, false);
  updateMetaDescription(config.description);
  updateOpenGraph({
    title: config.title,
    description: config.description,
    image: config.image,
    url: config.url,
  });
  updateTwitterCard({
    title: config.title,
    description: config.description,
    image: config.image,
  });
  updateCanonical(config.url);
};

/**
 * Generates structured data for portfolio items
 * @param {Array} portfolioItems - Array of portfolio items
 */
export const generatePortfolioStructuredData = (portfolioItems) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Daffa Haidar Writing Portfolio",
    description: "Collection of professional writing work including storytelling, copywriting, technical documentation, and public speaking.",
    author: {
      "@type": "Person",
      name: "Daffa Haidar",
    },
    hasPart: portfolioItems.map((item) => ({
      "@type": "CreativeWork",
      name: item.title,
      description: item.description,
      genre: item.category,
      datePublished: item.publishedDate,
      url: item.link,
      keywords: item.tags.join(", "),
    })),
  };
};

/**
 * Generates structured data for blog posts
 * @param {Array} blogPosts - Array of blog posts
 */
export const generateBlogStructuredData = (blogPosts) => {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Daffa Haidar Writing Blog",
    description: "Insights on writing, content strategy, and storytelling from a professional writer.",
    author: {
      "@type": "Person",
      name: "Daffa Haidar",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedDate,
      dateModified: post.lastModified,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
      keywords: post.tags.join(", "),
      wordCount: post.readTime.match(/\d+/)[0] * 200, // Approximate word count
    })),
  };
};
