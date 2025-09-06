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
}) {
  return (
    <div
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* Overlay */}
      {overlay && <div className="absolute inset-0 bg-black opacity-40"></div>}

      {/* Text */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 ${textColor} ${textJustify}`}
      >
        <h1 className="text-3xl font-bold">
          {textFixed ? title : slide.title || ""}
        </h1>
        <p className="text-lg mt-2">
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
};
