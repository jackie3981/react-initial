import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

/**
 * Menu component
 * @param {Array} items - Array of menu objects
 * @param {string} orientation - "horizontal" | "vertical"
 * @param {React.Component} linkComponent - Optional custom link component (e.g., React Router Link)
 */
export default function Menu({
  items = [],
  orientation = "horizontal",
  linkComponent,
}) {
  return (
    <nav
      className={`${
        orientation === "horizontal"
          ? "flex space-x-6"
          : "flex flex-col space-y-2"
      }`}
    >
      {items.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          orientation={orientation}
          linkComponent={linkComponent}
        />
      ))}
    </nav>
  );
}

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  linkComponent: PropTypes.elementType, // optional
};
