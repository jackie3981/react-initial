import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

/**
 * SubMenu component
 */
export default function SubMenu({ items, orientation, LinkComponent }) {
  return (
    <div
      className={`absolute bg-white border rounded shadow-md z-50 ${
        orientation === "horizontal" ? "left-0 mt-2" : "left-full top-0 ml-2"
      }`}
    >
      <ul className="flex flex-col min-w-[150px]">
        {items.map((subItem) => (
          <li key={subItem.id}>
            <MenuItem
              item={subItem}
              orientation="vertical"
              linkComponent={LinkComponent}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

SubMenu.propTypes = {
  items: PropTypes.array.isRequired,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]).isRequired,
  LinkComponent: PropTypes.elementType,
};
