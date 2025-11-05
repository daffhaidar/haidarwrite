import { getRecentPosts } from "../data/blogPosts";
import { AnimatedSection } from "./AnimatedSection";
import LazyImage from "./LazyImage";

const BlogSection = () => {
  // Get recent blog posts for display
  const recentPosts = getRecentPosts(3);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="section-padding bg-dark-green-900/5">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center space-responsive-lg">
          <AnimatedSection animation="fade-up">
            <h2 className="text-responsive-3xl font-bold text-light mb-4 sm:mb-6">
              Latest <span className="text-dark-green-400">Articles</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-responsive-base text-gray-custom max-w-3xl mx-auto leading-mobile">
              Insights, tips, and thoughts on writing, storytelling, and effective communication. Explore my latest articles covering everything from technical documentation to creative copywriting.
            </p>
          </AnimatedSection>
        </div>

        {/* Blog Posts Grid */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="grid-responsive-1-2-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {recentPosts.map((post, index) => (
              <div
                key={post.id}
                className="transition-all duration-700 ease-out"
                style={{
                  animationDelay: `${600 + index * 150}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                  opacity: 0,
                  transform: "translateY(30px)",
                }}
              >
                <BlogCard post={post} formatDate={formatDate} />
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Read All Articles Button */}
        <AnimatedSection animation="scale-in" delay={800}>
          <div className="text-center">
            <a
              href="https://medium.com/@daffahaidar1501" // External link to blog platform
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center btn-touch bg-dark-green-700/50 hover:bg-dark-green-600 text-dark-green-300 hover:text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-dark-green-600/25 hover:transform hover:scale-105 text-sm sm:text-base"
            >
              Read All Articles
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const BlogCard = ({ post, formatDate }) => {
  return (
    <article className="group bg-dark-green-900/10 rounded-xl overflow-hidden border border-dark-green-800/20 hover:border-dark-green-600/40 interactive-hover hover-lift">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-dark-green-900/20 h-40 sm:h-48">
        <LazyImage
          src={post.image}
          alt={post.title}
          className="w-full h-full transition-transform duration-300 group-hover:scale-110"
          fallback={`data:image/svg+xml;base64,${btoa(`
            <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#022c22"/>
              <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#10b981" text-anchor="middle" dy=".3em">
                ${post.category}
              </text>
            </svg>
          `)}`}
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2 py-1 sm:px-3 sm:py-1 bg-dark-green-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">{post.category}</span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-dark-green-600/0 group-hover:bg-dark-green-600/20 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-light mb-2 sm:mb-3 group-hover:text-dark-green-300 transition-colors duration-300 line-clamp-2 leading-tight">{post.title}</h3>

        {/* Excerpt */}
        <p className="text-gray-custom text-sm mb-3 sm:mb-4 line-clamp-3 leading-mobile">{post.excerpt}</p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-custom mb-3 sm:mb-4">
          <span>{formatDate(post.publishedDate)}</span>
          <span>{post.readTime}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
          {post.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-dark-green-900/30 text-dark-green-300 text-xs rounded-md">
              {tag}
            </span>
          ))}
          {post.tags.length > 2 && <span className="px-2 py-1 bg-dark-green-900/20 text-gray-custom text-xs rounded-md">+{post.tags.length - 2} more</span>}
        </div>

        {/* Read More Link */}
        <a
          href={post.link} // Use the actual link from blog post data
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-dark-green-400 hover:text-dark-green-300 font-medium text-sm transition-colors duration-300 group-hover:translate-x-1 touch-target"
        >
          Read More
          <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default BlogSection;
