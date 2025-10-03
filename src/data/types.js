import PropTypes from "prop-types";

// Portfolio Item PropTypes
export const PortfolioItemPropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.oneOf(["Storytelling", "Copywriting", "Technical Writing", "Public Speaking"]).isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  publishedDate: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
};

// Blog Post Author PropTypes
export const AuthorPropTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

// Blog Post SEO PropTypes
export const SEOPropTypes = {
  metaDescription: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Blog Post PropTypes
export const BlogPostPropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  lastModified: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  category: PropTypes.oneOf(["Technical Writing", "Copywriting", "Public Speaking", "Industry Insights"]).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  featured: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.shape(AuthorPropTypes).isRequired,
  seo: PropTypes.shape(SEOPropTypes).isRequired,
};

// Portfolio Statistics PropTypes
export const PortfolioStatsPropTypes = {
  totalProjects: PropTypes.number.isRequired,
  categoryCounts: PropTypes.shape({
    Storytelling: PropTypes.number.isRequired,
    Copywriting: PropTypes.number.isRequired,
    "Technical Writing": PropTypes.number.isRequired,
    "Public Speaking": PropTypes.number.isRequired,
  }).isRequired,
};

// Blog Statistics PropTypes
export const BlogStatsPropTypes = {
  totalPosts: PropTypes.number.isRequired,
  categoryCounts: PropTypes.shape({
    "Technical Writing": PropTypes.number.isRequired,
    Copywriting: PropTypes.number.isRequired,
    "Public Speaking": PropTypes.number.isRequired,
    "Industry Insights": PropTypes.number.isRequired,
  }).isRequired,
  totalReadTime: PropTypes.number.isRequired,
};

// Component PropTypes for consuming the data
export const PortfolioSectionPropTypes = {
  portfolioItems: PropTypes.arrayOf(PropTypes.shape(PortfolioItemPropTypes)).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const BlogSectionPropTypes = {
  blogPosts: PropTypes.arrayOf(PropTypes.shape(BlogPostPropTypes)).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Validation functions for data integrity
export const validatePortfolioItem = (item) => {
  const requiredFields = ["id", "title", "category", "image", "description", "excerpt", "link", "tags", "publishedDate", "readTime"];
  const validCategories = ["Storytelling", "Copywriting", "Technical Writing", "Public Speaking"];

  // Check required fields
  for (const field of requiredFields) {
    if (!item[field]) {
      throw new Error(`Portfolio item missing required field: ${field}`);
    }
  }

  // Validate category
  if (!validCategories.includes(item.category)) {
    throw new Error(`Invalid portfolio category: ${item.category}`);
  }

  // Validate data types
  if (typeof item.id !== "number") {
    throw new Error("Portfolio item id must be a number");
  }

  if (!Array.isArray(item.tags)) {
    throw new Error("Portfolio item tags must be an array");
  }

  return true;
};

export const validateBlogPost = (post) => {
  const requiredFields = ["id", "title", "slug", "excerpt", "content", "publishedDate", "lastModified", "readTime", "category", "tags", "featured", "image", "author", "seo"];
  const validCategories = ["Technical Writing", "Copywriting", "Public Speaking", "Industry Insights"];

  // Check required fields
  for (const field of requiredFields) {
    if (post[field] === undefined || post[field] === null) {
      throw new Error(`Blog post missing required field: ${field}`);
    }
  }

  // Validate category
  if (!validCategories.includes(post.category)) {
    throw new Error(`Invalid blog category: ${post.category}`);
  }

  // Validate data types
  if (typeof post.id !== "number") {
    throw new Error("Blog post id must be a number");
  }

  if (!Array.isArray(post.tags)) {
    throw new Error("Blog post tags must be an array");
  }

  if (typeof post.featured !== "boolean") {
    throw new Error("Blog post featured must be a boolean");
  }

  // Validate nested objects
  if (!post.author.name || !post.author.avatar) {
    throw new Error("Blog post author must have name and avatar");
  }

  if (!post.seo.metaDescription || !Array.isArray(post.seo.keywords)) {
    throw new Error("Blog post SEO must have metaDescription and keywords array");
  }

  return true;
};
