import { useState } from "react";
import { portfolioItems, portfolioCategories } from "../data/portfolioItems";
import PortfolioModal from "./PortfolioModal";
import { AnimatedSection, AnimatedList } from "./AnimatedSection";
import LazyImage from "./LazyImage";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter portfolio items based on selected category
  const filteredItems = activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory);

  // Handle category filter change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Handle portfolio item view more
  const handleViewMore = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" className="section-padding bg-dark">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center space-responsive-lg">
          <AnimatedSection animation="fade-up">
            <h2 className="text-responsive-3xl font-bold text-light mb-4 sm:mb-6">
              My <span className="text-dark-green-400">Portfolio</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-responsive-base text-gray-custom max-w-3xl mx-auto leading-mobile">
              A showcase of my writing work across different categories, from compelling storytelling to technical documentation and persuasive copywriting.
            </p>
          </AnimatedSection>
        </div>

        {/* Category Filter */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
            {portfolioCategories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`btn-touch text-xs sm:text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                  activeCategory === category ? "bg-dark-green-600 text-white shadow-lg shadow-dark-green-600/25" : "bg-dark-green-900/20 text-gray-custom hover:bg-dark-green-800/30 hover:text-dark-green-300"
                }`}
                style={{
                  animationDelay: `${600 + index * 100}ms`,
                  animation: "fadeInScale 0.6s ease-out forwards",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Portfolio Grid */}
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="grid-responsive-1-2-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="transition-all duration-700 ease-out"
                style={{
                  animationDelay: `${800 + index * 150}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                  opacity: 0,
                  transform: "translateY(30px)",
                }}
              >
                <PortfolioCard item={item} onViewMore={handleViewMore} />
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-gray-custom text-responsive-base">No portfolio items found for the selected category.</p>
          </div>
        )}
      </div>

      {/* Portfolio Modal */}
      <PortfolioModal item={selectedItem} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

const PortfolioCard = ({ item, onViewMore }) => {
  return (
    <div className="group bg-dark-green-900/10 rounded-xl overflow-hidden border border-dark-green-800/20 hover:border-dark-green-600/40 interactive-hover hover-lift">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-dark-green-900/20 h-40 sm:h-48">
        <LazyImage
          src={item.image}
          alt={item.title}
          className="w-full h-full transition-transform duration-300 group-hover:scale-110"
          fallback={`data:image/svg+xml;base64,${btoa(`
            <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#022c22"/>
              <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#10b981" text-anchor="middle" dy=".3em">
                ${item.category}
              </text>
            </svg>
          `)}`}
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2 py-1 sm:px-3 sm:py-1 bg-dark-green-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">{item.category}</span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-dark-green-600/0 group-hover:bg-dark-green-600/20 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-light mb-2 sm:mb-3 group-hover:text-dark-green-300 transition-colors duration-300 leading-tight">{item.title}</h3>

        {/* Excerpt */}
        <p className="text-gray-custom text-sm mb-3 sm:mb-4 line-clamp-3 leading-mobile">{item.excerpt}</p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-custom mb-3 sm:mb-4">
          <span>{item.publishedDate}</span>
          <span>{item.readTime}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
          {item.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-dark-green-900/30 text-dark-green-300 text-xs rounded-md">
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && <span className="px-2 py-1 bg-dark-green-900/20 text-gray-custom text-xs rounded-md">+{item.tags.length - 3} more</span>}
        </div>

        {/* View More Button */}
        <button onClick={() => onViewMore(item)} className="w-full bg-dark-green-700/50 hover:bg-dark-green-600 text-dark-green-300 hover:text-white btn-touch rounded-lg font-medium pulse-on-hover hover-glow text-sm sm:text-base">
          View More
          <svg className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;
