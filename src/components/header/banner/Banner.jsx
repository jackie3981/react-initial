import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import BannerSlide from "./BannerSlide";
import BannerControls from "./BannerControls";

/**
 * Banner Component (main container)
 */
export default function Banner({
  slides = [],
  textFixed = true,
  title = "",
  subtitle = "",
  textAlign = "center",
  backgroundColor = "blue",
  textColor = "white",
  height = "h-64",
  overlay = true,
  components = [],
  slideInterval = 5000,
  showControls = true,
  showIndicators = true,
  className = "",
  transitionType = "fade",
  autoplay = true, // 👈 nueva prop
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // 👈 nuevo estado
  const timerRef = useRef(null);

  // autoplay
  useEffect(() => {
    if (!autoplay || slides.length <= 1) return;

    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, slideInterval);
    }

    return () => clearInterval(timerRef.current);
  }, [slides.length, slideInterval, autoplay, isPaused]);

  // Handlers
  const goToPrev = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  // Text alignment classes
  const textJustify =
    {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    }[textAlign] || "text-center";

  return (
    <div
      className={`relative overflow-hidden ${height} ${className}`}
      style={{ backgroundColor }}
      onMouseEnter={() => setIsPaused(true)} // pause autoplay
      onMouseLeave={() => setIsPaused(false)} // resume autoplay
      role="region"
      aria-label="Banner carousel"
      tabIndex={0} // allow focus for keyboard navigation
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") goToPrev();
        if (e.key === "ArrowRight") goToNext();
      }}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <BannerSlide
          key={index}
          slide={slide}
          overlay={overlay}
          textFixed={textFixed}
          title={title}
          subtitle={subtitle}
          textColor={textColor}
          textJustify={textJustify}
          isActive={index === currentSlide}
          transitionType={transitionType}
        />
      ))}

      {/* Optional Components */}
      {components.length > 0 && (
        <div className="absolute bottom-4 left-0 right-0 w-full grid grid-cols-1 md:grid-cols-3 items-center gap-2 px-4 sm:px-6 md:px-8 z-20">
          <div className="flex justify-start space-x-2">
            {components
              .filter((c) => c.align === "left")
              .map((c, i) => (
                <div key={i}>{c.element}</div>
              ))}
          </div>
          <div className="flex justify-center space-x-2">
            {components
              .filter((c) => c.align === "center")
              .map((c, i) => (
                <div key={i}>{c.element}</div>
              ))}
          </div>
          <div className="flex justify-end space-x-2">
            {components
              .filter((c) => c.align === "right")
              .map((c, i) => (
                <div key={i}>{c.element}</div>
              ))}
          </div>
        </div>
      )}

      {/* Controls */}
      {(showControls || showIndicators) && slides.length > 1 && (
        <BannerControls
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrev={goToPrev}
          onNext={goToNext}
          onSelect={goToSlide}
          showControls={showControls}
          showIndicators={showIndicators}
        />
      )}
    </div>
  );
}

Banner.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
  textFixed: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  height: PropTypes.string,
  overlay: PropTypes.bool,
  components: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.node.isRequired,
      align: PropTypes.oneOf(["left", "center", "right"]).isRequired,
    })
  ),
  slideInterval: PropTypes.number,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  className: PropTypes.string,
  transitionType: PropTypes.oneOf([
    "fade",
    "slide-horizontal",
    "slide-vertical",
  ]),
  autoplay: PropTypes.bool, // 👈 nueva prop
};
