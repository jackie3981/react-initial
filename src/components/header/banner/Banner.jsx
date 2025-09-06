import { useEffect, useState } from "react";
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
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // autoplay
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);
    return () => clearInterval(timer);
  }, [slides.length, slideInterval]);

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
    >
      {/* Active Slide */}
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
};
