import { CountryModel } from "../models/country";
import { mapCountries, mapCountry } from "../utilities/utilities";

export const getCountries = async (
  searchQuery: string,
  region: string
): Promise<CountryModel[]> => {
  let url =
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital";

  if (searchQuery && !region) {
    url = `https://restcountries.com/v3.1/name/${searchQuery}?fields=flags,name,population,region,capital`;
  } else if (!searchQuery && region) {
    url = `https://restcountries.com/v3.1/region/${region}?fields=flags,name,population,region,capital`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    const sortedData = data.sort((a: any, b: any) =>
      ("" + a.name.common).localeCompare(b.name.common)
    );
    const result = mapCountries(sortedData);
    return result;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getCountryInfo = async (
  name: string | undefined
): Promise<CountryModel> => {
  if (name === undefined) {
    return {
      FlagSrc: "",
      Name: "",
      Population: "",
      Region: "",
      Capital: "",
      NativeName: "",
      SubRegion: "",
      Domain: "",
      Currencies: [],
      Languages: [],
      BorderCountries: [],
    };
  }

  const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = mapCountry(data[0]);
    return result;
  } catch (e) {
    console.log(e);
    return {
      FlagSrc: "",
      Name: "",
      Population: "",
      Region: "",
      Capital: "",
      NativeName: "",
      SubRegion: "",
      Domain: "",
      Currencies: [],
      Languages: [],
      BorderCountries: [],
    };
  }
};
