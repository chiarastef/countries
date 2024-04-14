import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  updateSearchText: (text: string) => void;
}

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const [queryText, setQueryText] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQueryText(e.target.value);
  };

  const search = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    props.updateSearchText(queryText);
    setQueryText("");
  };

  return (
    <form onSubmit={search}>
      <div className="shadow px-3 rounded bg-white relative dark:bg-neutral-900">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-slate-400 absolute top-0 bottom-0 my-auto"
        />
        <input
          type="text"
          value={queryText}
          onChange={handleChange}
          placeholder="Search for a country..."
          className="pl-7 pr-3 py-2 w-full dark:bg-neutral-900 dark:text-slate-100 focus-visible:outline-0"
        />
      </div>
    </form>
  );
};

export default SearchBar;
