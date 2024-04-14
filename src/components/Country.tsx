import { CountryModel } from "../models/country";
import { Link } from "react-router-dom";

interface CountryProps {
  country: CountryModel;
}

const Country = (props: CountryProps): JSX.Element => {
  return (
    <Link
      to={`/country/${props.country.Name}`}
      className="bg-white dark:bg-neutral-900 dark:text-slate-100 rounded-md w-[280px] h-[300px] md:h-[350px] m-auto cursor-pointer"
    >
      <div className="rounded-md h-[45%]">
        <img
          src={props.country.FlagSrc}
          alt={props.country.Name}
          className="rounded-md w-full h-full object-cover"
        />
      </div>
      <div className="px-5 py-4">
        <div className="font-bold mb-3">{props.country.Name}</div>
        <div>
          <div>
            <span className="font-semibold">Population: </span>
            {props.country.Population}
          </div>
          <div>
            <span className="font-semibold">Region: </span>
            {props.country.Region}
          </div>
          <div>
            <span className="font-semibold">Capital: </span>
            {props.country.Capital}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Country;
