import PropTypes from "prop-types";

/**
 * BannerControls - navigation arrows and indicators
 */
export default function BannerControls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelect,
  showControls,
  showIndicators,
}) {
  return (
    <>
      {/* Arrows */}
      {showControls && (
        <>
          <button
            onClick={onPrev}
            aria-label="Previous Slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20"
          >
            ◀
          </button>
          <button
            onClick={onNext}
            aria-label="Next Slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20"
          >
            ▶
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2"
          role="tablist"
          aria-label="Slide navigation"
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              role="tab"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? "true" : "false"}
              className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
                currentSlide === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}

BannerControls.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
};
