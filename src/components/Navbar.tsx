import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = (props: NavbarProps): JSX.Element => {
  const switchMode = (): void => {
    props.setIsDarkMode(!props.isDarkMode);
  };

  return (
    <nav className="py-3 sm:py-4 px-3 sm:px-8 border-b-2 border-gray-200 shadow-sm">
      <div className="max-w-7xl flex justify-between items-center m-auto">
        <div className="sm:text-lg font-bold">Where in the world?</div>
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
