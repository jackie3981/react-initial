import PropTypes from "prop-types";

/**
 * BannerSlide - renders a single slide with active/inactive state
 */
export default function BannerSlide({
  slide,
  overlay,
  textFixed,
  title,
  subtitle,
  textColor,
  textJustify,
  isActive,
  transitionType,
}) {
  let transitionClasses = "";

  if (transitionType === "fade") {
    transitionClasses = isActive ? "opacity-100 z-10" : "opacity-0 z-0";
  }

  if (transitionType === "slide-horizontal") {
    transitionClasses = isActive
      ? "translate-x-0 z-10"
      : "translate-x-full z-0";
  }

  if (transitionType === "slide-vertical") {
    transitionClasses = isActive
      ? "translate-y-0 z-10"
      : "translate-y-full z-0";
  }

  return (
    <div
      className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${transitionClasses}`}
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* Overlay */}
      {overlay && <div className="absolute inset-0 bg-black opacity-40"></div>}

      {/* Text */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 ${textColor} ${textJustify}`}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {textFixed ? title : slide.title || ""}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-2">
          {textFixed ? subtitle : slide.subtitle || ""}
        </p>
      </div>
    </div>
  );
}

BannerSlide.propTypes = {
  slide: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired,
  overlay: PropTypes.bool,
  textFixed: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  textColor: PropTypes.string,
  textJustify: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  transitionType: PropTypes.oneOf([
    "fade",
    "slide-horizontal",
    "slide-vertical",
  ]).isRequired,
};
