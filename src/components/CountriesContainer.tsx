import { CountryModel } from "../models/country";
import Country from "./Country";

interface CountriesContainerProps {
  countries: CountryModel[] | undefined;
}

const CountriesContainer = (props: CountriesContainerProps): JSX.Element => {
  return (
    <div className="px-3 sm:px-8">
      {props.countries && props.countries.length > 0 ? (
        <div className="max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 mt-7 m-auto">
          {props.countries !== undefined &&
            props.countries.map((country, idx) => {
              return <Country country={country} key={idx} />;
            })}
        </div>
      ) : (
        <div className="h-[calc(100%-62px)] text-center mt-20 dark:text-slate-100">
          No results found
        </div>
      )}
    </div>
  );
};

export default CountriesContainer;
