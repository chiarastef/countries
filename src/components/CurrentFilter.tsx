import "../index.css";

interface CurrentFilterProps {
  searchText: string;
  region: string;
  resetFilters: () => void;
}

const CurrentFilter = (props: CurrentFilterProps): JSX.Element => {
  return (
    <div className="max-w-7xl mt-5 mx-auto dark:text-slate-100">
      {props.searchText ? "You have searched: " : "You have filtered: "}
      {props.searchText ? `"${props.searchText}"` : `"${props.region}"`}
      <button
        className="ms-3 bg-gray-200 dark:bg-neutral-900 px-2 py-1 rounded-md shadow-lg"
        onClick={props.resetFilters}
      >
        Reset {props.searchText ? "search" : "filter"}
      </button>
    </div>
  );
};

export default CurrentFilter;
