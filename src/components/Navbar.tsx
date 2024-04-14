import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import { Link } from "react-router-dom";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  resetFilters: () => void;
}

const Navbar = (props: NavbarProps): JSX.Element => {
  const switchMode = (): void => {
    props.setIsDarkMode(!props.isDarkMode);
  };

  return (
    <nav className="py-3 sm:py-4 px-3 sm:px-8 border-b-2 border-gray-200 shadow-sm dark:bg-neutral-900 dark:text-slate-100 dark:border-neutral-900">
      <div className="max-w-7xl flex justify-between items-center m-auto">
        <Link
          to="/"
          className="sm:text-lg font-bold cursor-pointer"
          onClick={props.resetFilters}
        >
          Where in the world?
        </Link>
        <div
          className="text-sm sm:text-base font-bold select-none cursor-pointer"
          onClick={switchMode}
        >
          {props.isDarkMode ? (
            <>
              <FontAwesomeIcon icon={faSun} className="mr-2" />
              Light Mode
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faMoon} className="mr-2" />
              Dark Mode
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
