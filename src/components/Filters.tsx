import "../index.css";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

interface FiltersProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}

const Filters = (props: FiltersProps): JSX.Element => {
  return (
    <div className="px-3 sm:px-8">
      <div className="max-w-7xl pt-5 flex flex-col sm:flex-row justify-between gap-4 m-auto">
        <SearchBar setSearchText={props.setSearchText} />
        <Dropdown region={props.region} setRegion={props.setRegion} />
      </div>
    </div>
  );
};

export default Filters;
