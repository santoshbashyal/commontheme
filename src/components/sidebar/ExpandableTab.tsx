import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

interface ExpandableTabProps {
  label: string;
  link?: string;
  hasDropdown: boolean;
  subItems: { name: string; path: string }[];
  icon?: string; // Made icon optional and configurable
}

const ExpandableTab = ({
  label,
  hasDropdown,
  subItems,
  link,
  icon = "/settings.svg", // Default icon with fallback
}: ExpandableTabProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if current path matches any subItem path (determines if tab is "active")
  const isActive = subItems.some((item) => location.pathname === item.path);

  // Auto-open dropdown if current path matches a subItem
  useEffect(() => {
    if (isActive && hasDropdown) {
      setIsOpen(true);
    }
  }, [location.pathname, isActive, hasDropdown]);

  const handleClick = () => {
    if (hasDropdown) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className={`flex p-2 rounded-2xl items-center cursor-pointer my-1 gap-2 transition-colors duration-200 ${
          isActive ? "bg-gray-100" : "hover:bg-gray-50"
        }`}
      >
        {/* Chevron icon - only show if has dropdown */}
        <div
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          {hasDropdown && <img src="/Chevron.svg" alt="dropdown arrow" />}
        </div>

        {/* Main icon */}
        <div>
          <img src={icon} alt="" />
        </div>

        {/* Label - either as link or plain text */}
        {link ? (
          <Link className="px-4 block font-medium" to={link}>
            {label}
          </Link>
        ) : (
          <div className={`px-4 ${isActive ? "font-semibold" : ""}`}>
            {label}
          </div>
        )}
      </div>

      {/* Dropdown Items */}
      {hasDropdown && isOpen && (
        <div className="gap-1 pl-12 text-sm text-gray-600 pb-2">
          {subItems.map((item, index) => (
            <div
              key={index}
              className={`my-1 p-2 rounded-xl transition-colors duration-200 ${
                location.pathname === item.path
                  ? "bg-gray-200 font-semibold text-gray-900"
                  : "hover:bg-gray-100"
              }`}
            >
              <Link to={item.path} className="flex items-center gap-2">
                <img src="/Icon.svg" alt="" />
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpandableTab;
