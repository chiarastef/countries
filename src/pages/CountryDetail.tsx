import "../index.css";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCountryInfo } from "../services/api";
import MoonLoader from "react-spinners/MoonLoader";
import { spinnerOverride } from "../utilities/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface CountryDetailProps {
  isDarkMode: boolean;
}

const CountryDetail = (props: CountryDetailProps): JSX.Element => {
  const { name } = useParams();

  const countryQuery = useQuery({
    queryKey: ["country"],
    queryFn: () => getCountryInfo(name),
  });

  return (
    <div className="h-[calc(100%-62px)] px-3 sm:px-8 pt-10 dark:bg-neutral-800 dark:text-slate-100">
      <Link
        to="/"
        className="bg-gray-200 dark:bg-neutral-900 px-3 py-1 rounded-md shadow-lg"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
        Back
      </Link>
      {countryQuery.isLoading ? (
        <MoonLoader
          color={`${props.isDarkMode ? "#F1F5F9" : "#000000"}`}
          loading={countryQuery.isLoading}
          cssOverride={spinnerOverride}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : countryQuery.isError ? (
        <div className="h-screen text-center mt-20 dark:text-slate-100">
          An error occurred
        </div>
      ) : (
        <div className="mt-8 flex flex-col lg:flex-row">
          <img
            src={countryQuery.data?.FlagSrc}
            alt={`Flag of ${name}`}
            className="sm:w-3/5 lg:w-1/2 max-w-[500px] object-cover aspect-video"
          />
          <div className="mt-5 lg:mt-0 lg:ml-8 xl:ml-24 flex flex-col justify-center">
            <div className="text-2xl font-bold mb-2 lg:mb-4">
              {countryQuery.data.Name}
            </div>
            <div className="grid lg:grid-cols-2 mb-4 gap-x-4 xl:gap-x-24 gap-y-1">
              <div>
                <span className="font-semibold">Native name: </span>
                {countryQuery.data.NativeName}
              </div>
              <div>
                <span className="font-semibold">Population: </span>
                {countryQuery.data.Population}
              </div>
              <div>
                <span className="font-semibold">Region: </span>
                {countryQuery.data.Region}
              </div>
              <div>
                <span className="font-semibold">Sub Region: </span>
                {countryQuery.data.SubRegion}
              </div>
              <div>
                <span className="font-semibold">Capital: </span>
                {countryQuery.data.Capital}
              </div>
              <div>
                <span className="font-semibold">Top Level Domain: </span>
                {countryQuery.data.Domain}
              </div>
              <div>
                <span className="font-semibold">Currencies: </span>
                {countryQuery.data.Currencies?.join(", ")}
              </div>
              <div>
                <span className="font-semibold">Languages: </span>
                {countryQuery.data.Languages?.join(", ")}
              </div>
            </div>
            {countryQuery.data.BorderCountries &&
              countryQuery.data.BorderCountries.length > 0 && (
                <div>
                  <span className="font-semibold">Border Countries: </span>
                  {countryQuery.data.BorderCountries?.map((border, idx) => {
                    return (
                      <span key={idx} className="border px-3 py-1 rounded ml-1">
                        {border}
                      </span>
                    );
                  })}
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
