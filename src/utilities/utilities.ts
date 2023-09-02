import { Country } from "../models/country";

export const mapCountries = (countriesArr: []): Country[] => {
  const countries: Country[] = [];

  countriesArr.forEach((country) => {
    const countryItem: Country = {
      Flag: country["flags"]["png"],
      Name: country["name"]["common"],
    };

    countries.push(countryItem);
  });

  return countries;
};
