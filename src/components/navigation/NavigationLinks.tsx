import { Link } from "react-router-dom";
import { classNames } from "../../settings/functions";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  isAdmin?: boolean;
}

interface NavigationLinksProps {
  roleBasedNavigation: NavigationItem[];
  handleOptionClick: (name: string) => void;
}
function NavigationLinks({
  roleBasedNavigation,
  handleOptionClick,
}: NavigationLinksProps) {
  return (
    <div className="hidden md:block">
      <div className="mt-3 ml-16 flex items-baseline space-x-6">
        {roleBasedNavigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => handleOptionClick(item.name)}
            className={classNames(
              item.current
                ? "bg-gray-900 font-semibold text-teal-500 underline"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 text-lg font-serif text-gray-300 font-semibold position-relative"
            )}
            aria-current={location.pathname === item.href ? "page" : undefined}
          >
            <span className="link-content">{item.name}</span>
            {item.isAdmin && (
              <span className="absolute text-green-600 text-sm top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-gray-700 rounded-lg">
                Admin
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavigationLinks;
