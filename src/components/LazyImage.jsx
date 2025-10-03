import { useState, useRef, useEffect } from "react";

/**
 * Lazy loading image component with intersection observer
 * Includes loading states, error handling, and WebP support
 */
const LazyImage = ({ src, alt, className = "", placeholder = null, fallback = null, webpSrc = null, loading = "eager", onLoad = () => {}, onError = () => {}, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef(null);
  const maxRetries = 2;

  // Preload image immediately
  useEffect(() => {
    if (src) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.onerror = () => handleError();
      img.src = getImageSrc();
    }
  }, [src, retryCount]);

  // Handle image load
  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad(e);
  };

  // Handle image error with retry mechanism
  const handleError = (e) => {
    if (retryCount < maxRetries) {
      setRetryCount((prev) => prev + 1);
      setHasError(false);
      // Retry immediately for faster loading
      setTimeout(() => {
        setIsLoaded(false);
      }, 500);
    } else {
      setHasError(true);
    }
    if (e) onError(e);
  };

  // Generate image source with fallback and cache busting
  const getImageSrc = () => {
    if (hasError && fallback) {
      return fallback;
    }

    let imageSrc = src;

    // Check if browser supports WebP and webpSrc is provided
    if (webpSrc && supportsWebP()) {
      imageSrc = webpSrc;
    }

    // Add cache busting and quality parameters for external images
    if (retryCount > 0) {
      const separator = imageSrc.includes("?") ? "&" : "?";
      imageSrc += `${separator}retry=${retryCount}&t=${Date.now()}`;
    }

    // For external images, add quality parameters
    if (imageSrc.includes("unsplash.com")) {
      const separator = imageSrc.includes("?") ? "&" : "?";
      imageSrc += `${separator}q=80&fm=jpg&dpr=1`;
    } else if (imageSrc.includes("pexels.com")) {
      // Pexels images already have good compression parameters
      if (!imageSrc.includes("auto=compress")) {
        const separator = imageSrc.includes("?") ? "&" : "?";
        imageSrc += `${separator}auto=compress&cs=tinysrgb`;
      }
    }

    return imageSrc;
  };

  // Default placeholder component with animated shimmer
  const defaultPlaceholder = (
    <div className="w-full h-full bg-gradient-to-r from-dark-green-900/20 via-dark-green-800/30 to-dark-green-900/20 animate-pulse flex items-center justify-center">
      <div className="text-dark-green-400 text-sm">Loading...</div>
    </div>
  );

  // Default fallback for broken images with retry button
  const defaultFallback = (
    <div className="w-full h-full bg-dark-green-900/20 flex flex-col items-center justify-center text-dark-green-400 p-4">
      <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <div className="text-xs text-center">Image unavailable</div>
      {retryCount < maxRetries && (
        <button
          onClick={() => {
            setRetryCount((prev) => prev + 1);
            setHasError(false);
            setIsLoaded(false);
          }}
          className="mt-2 text-xs text-dark-green-300 hover:text-dark-green-200 underline"
        >
          Retry
        </button>
      )}
    </div>
  );

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Show placeholder while loading */}
      {!isLoaded && !hasError && <div className="absolute inset-0">{placeholder || defaultPlaceholder}</div>}

      {/* Show fallback on error */}
      {hasError && <div className="absolute inset-0">{fallback || defaultFallback}</div>}

      {/* Actual image - always render but control opacity */}
      <img src={getImageSrc()} alt={alt} className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded && !hasError ? "opacity-100" : "opacity-0"}`} onLoad={handleLoad} onError={handleError} loading="eager" />
    </div>
  );
};

// Check WebP support
const supportsWebP = () => {
  if (typeof window === "undefined") return false;

  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;

  return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
};

export default LazyImage;
