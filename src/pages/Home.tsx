import "../index.css";
import MoonLoader from "react-spinners/MoonLoader";
import Filters from "../components/Filters";
import CountriesContainer from "../components/CountriesContainer";
import { CountryModel } from "../models/country";
import { UseQueryResult } from "@tanstack/react-query";
import { spinnerOverride } from "../utilities/utilities";

interface HomeProps {
  isDarkMode: boolean;
  searchText: string;
  updateSearchText: (text: string) => void;
  regionSelected: string;
  updateRegion: (region: string) => void;
  resetFilters: () => void;
  countriesQuery: UseQueryResult<CountryModel[], unknown>;
}

const Home = (props: HomeProps): JSX.Element => {
  return (
    <div className="min-h-[calc(100%-62px)] bg-slate-50 dark:bg-neutral-800 pb-6">
      <Filters
        isDarkMode={props.isDarkMode}
        searchText={props.searchText}
        updateSearchText={props.updateSearchText}
        region={props.regionSelected}
        updateRegion={props.updateRegion}
        resetFilters={props.resetFilters}
      />
      {props.countriesQuery.isLoading || props.countriesQuery.isRefetching ? (
        <div className="h-[calc(100%-62px)]">
          <MoonLoader
            color={`${props.isDarkMode ? "#F1F5F9" : "#000000"}`}
            loading={
              props.countriesQuery.isLoading ||
              props.countriesQuery.isRefetching
            }
            cssOverride={spinnerOverride}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : props.countriesQuery.isError ? (
        <div className="h-[calc(100%-62px)] text-center mt-20 dark:text-slate-100">
          An error occurred
        </div>
      ) : (
        <CountriesContainer countries={props.countriesQuery.data} />
      )}
    </div>
  );
};

export default Home;
