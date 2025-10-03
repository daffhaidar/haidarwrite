import { useEffect } from "react";

const PortfolioModal = ({ item, isOpen, onClose }) => {
  // Handle escape key press and touch interactions
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
      // Add touch-action to prevent pull-to-refresh on mobile
      document.body.style.touchAction = "none";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 safe-area-padding">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative bg-dark border-0 sm:border border-dark-green-800/30 rounded-t-2xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl shadow-dark-green-600/10">
        {/* Mobile drag handle */}
        <div className="sm:hidden flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-gray-400 rounded-full"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 touch-target bg-dark-green-900/50 hover:bg-dark-green-800/70 text-gray-custom hover:text-light rounded-full transition-all duration-200"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Header */}
        <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-t-2xl bg-dark-green-900/20">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.src = `data:image/svg+xml;base64,${btoa(`
                <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#022c22"/>
                  <text x="50%" y="50%" font-family="Arial" font-size="20" fill="#10b981" text-anchor="middle" dy=".3em">
                    ${item.category}
                  </text>
                </svg>
              `)}`;
            }}
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-dark-green-600/90 text-white text-xs sm:text-sm font-medium rounded-full backdrop-blur-sm">{item.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Title and Meta */}
          <div className="space-responsive-sm">
            <h2 className="text-responsive-2xl font-bold text-light mb-3 sm:mb-4 leading-tight">{item.title}</h2>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-responsive-xs text-gray-custom mb-3 sm:mb-4">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {item.publishedDate}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item.readTime}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              {item.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-dark-green-900/40 text-dark-green-300 text-xs sm:text-sm rounded-full border border-dark-green-800/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-responsive-sm">
            <h3 className="text-responsive-base font-semibold text-light mb-3 sm:mb-4">About This Project</h3>
            <p className="text-gray-custom leading-mobile text-responsive-sm">{item.description}</p>
          </div>

          {/* Excerpt */}
          {item.excerpt && (
            <div className="space-responsive-sm">
              <h3 className="text-responsive-base font-semibold text-light mb-3 sm:mb-4">Preview</h3>
              <blockquote className="border-l-4 border-dark-green-600 pl-4 sm:pl-6 italic text-gray-custom bg-dark-green-900/10 py-3 sm:py-4 rounded-r-lg text-responsive-sm leading-mobile">{item.excerpt}</blockquote>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-dark-green-600 hover:bg-dark-green-500 text-white btn-touch rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-dark-green-600/25 text-responsive-sm"
              >
                View Project
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            <button
              onClick={onClose}
              className="flex items-center justify-center gap-2 bg-dark-green-900/30 hover:bg-dark-green-800/50 text-dark-green-300 hover:text-light btn-touch rounded-lg font-medium transition-all duration-300 border border-dark-green-800/30 text-responsive-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
