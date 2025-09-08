import PropTypes from "prop-types";
import { useState, useRef } from "react";
import SubMenu from "./SubMenu";

/**
 * MenuItem component
 */
export default function MenuItem({
  item,
  orientation,
  linkComponent: LinkComponent,
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef();

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(timeoutRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      timeoutRef.current = setTimeout(() => setOpen(false), 200); // 200ms delay
    }
  };

  // Decide how to render links
  const renderLink = (children, path, external) => {
    if (LinkComponent) {
      return <LinkComponent to={path}>{children}</LinkComponent>;
    }
    return (
      <a
        href={path}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  };

  return (
    <div
      className={`relative group ${
        orientation === "horizontal" ? "inline-block" : "block w-max"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          if (window.innerWidth <= 768 && item.children) {
            setOpen(!open);
          }
        }}
      >
        {/* Icon or Image */}
        {item.icon && typeof item.icon === "string" && (
          <span className="w-5 h-5">{item.icon}</span>
        )}
        {item.icon && typeof item.icon !== "string" && item.icon}
        {item.image && <img src={item.image} alt="" className="w-5 h-5" />}

        {/* Label + Link */}
        {item.path
          ? renderLink(<span>{item.label}</span>, item.path, item.external)
          : item.label}
      </div>

      {/* Submenu */}
      {item.children && open && (
        <SubMenu
          items={item.children}
          orientation={orientation}
          LinkComponent={LinkComponent}
        />
      )}
    </div>
  );
}

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]).isRequired,
  linkComponent: PropTypes.elementType,
};
