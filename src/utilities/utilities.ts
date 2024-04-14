import { CountryModel } from "../models/country";

export const Regions = ["africa", "america", "asia", "europe", "oceania"];

export const mapCountries = (countriesArr: []): CountryModel[] => {
  const countries: CountryModel[] = [];

  countriesArr.forEach((country) => {
    const countryItem: CountryModel = {
      FlagSrc: country["flags"]["png"],
      Name: country["name"]["common"],
      Population: new Intl.NumberFormat("en-US").format(country["population"]), // Format number with thousands separator
      Region: country["region"],
      Capital: country["capital"][0],
    };

    countries.push(countryItem);
  });

  return countries;
};

export const mapCountry = (countryInfo: any): CountryModel => {
  const country: CountryModel = {
    FlagSrc: countryInfo["flags"]["png"],
    Name: countryInfo["name"]["common"],
    Population: new Intl.NumberFormat("en-US").format(
      countryInfo["population"]
    ), // Format number with thousands separator
    Region: countryInfo["region"],
    Capital: countryInfo["capital"][0],
    NativeName: getNativeName(countryInfo["name"]["nativeName"]),
    SubRegion: countryInfo["subregion"],
    Domain: countryInfo["tld"][0],
    Currencies: getCurrencies(countryInfo["currencies"]),
    Languages: getLanguages(countryInfo["languages"]),
    BorderCountries: countryInfo["borders"],
  };

  return country;
};

const getNativeName = (nativeNames: any): string => {
  let name = "";

  for (const language in nativeNames) {
    name = nativeNames[language]["common"];
  }

  return name;
};

const getCurrencies = (currenciesObj: any): string[] => {
  const currencies: string[] = [];

  for (const currency in currenciesObj) {
    currencies.push(currenciesObj[currency]["name"]);
  }

  return currencies;
};

const getLanguages = (languagesObj: any): string[] => {
  const languages: string[] = [];

  for (const language in languagesObj) {
    languages.push(languagesObj[language]);
  }

  return languages;
};

export const spinnerOverride: React.CSSProperties = {
  display: "block",
  margin: "80px auto",
};
