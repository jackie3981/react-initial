import PropTypes from "prop-types";

/**
 * Banner Component
 * @param {string} title
 * @param {string} subtitle
 * @param {string} backgroundColor
 * @param {string} textColor
 * @param {string} height
 * @param {string} backgroundImage
 * @param {boolean} overlay
 * @param {string} textAlign
 * @param {Array} components - { element, align }
 * @param {string} className
 * @param {function} onClick
 */
export default function Banner({
  title = "",
  subtitle = "",
  backgroundColor = "blue-500",
  textColor = "white",
  height = "h-40",
  backgroundImage = null,
  overlay = true,
  textAlign = "center",
  components = [],
  className = "",
  onClick = null,
}) {
  // Background style: applies image if provided
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  // Translate textAlign to Tailwind class
  const textJustify =
    {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    }[textAlign] || "text-center";

  return (
    <div
      className={`relative flex flex-col justify-center ${height} ${className}`}
      style={{
        backgroundColor: backgroundColor,
        ...bgStyle,
      }}
      onClick={onClick}
    >
      {/* Overlay */}
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-black opacity-40"></div>
      )}

      {/* Main text */}
      <div
        className={`relative ${textJustify} ${textColor} px-4 sm:px-6 md:px-8`}
      >
        {title && <h1 className="text-3xl font-bold">{title}</h1>}
        {subtitle && <p className="text-lg mt-2">{subtitle}</p>}
      </div>

      {/* Optional components */}
      {components.length > 0 && (
        <div className="relative mt-4 w-full grid grid-cols-1 md:grid-cols-3 items-center gap-2 px-4 sm:px-6 md:px-8">
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
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  height: PropTypes.string,
  backgroundImage: PropTypes.string,
  overlay: PropTypes.bool,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  components: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.node.isRequired,
      align: PropTypes.oneOf(["left", "center", "right"]).isRequired,
    })
  ),
  className: PropTypes.string,
  onClick: PropTypes.func,
};
