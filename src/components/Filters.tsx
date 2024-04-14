import "../index.css";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import CurrentFilter from "./CurrentFilter";

interface FiltersProps {
  isDarkMode: boolean;
  searchText: string;
  updateSearchText: (text: string) => void;
  region: string;
  updateRegion: (region: string) => void;
  resetFilters: () => void;
}

const Filters = (props: FiltersProps): JSX.Element => {
  return (
    <div className="px-3 sm:px-8">
      <div className="max-w-7xl pt-5 flex flex-col sm:flex-row justify-between gap-4 m-auto">
        <SearchBar updateSearchText={props.updateSearchText} />
        <Dropdown
          isDarkMode={props.isDarkMode}
          region={props.region}
          updateRegion={props.updateRegion}
        />
      </div>
      {(props.searchText || props.region) && (
        <CurrentFilter
          searchText={props.searchText}
          region={props.region}
          resetFilters={props.resetFilters}
        />
      )}
    </div>
  );
};

export default Filters;
