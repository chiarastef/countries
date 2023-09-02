import React from "react";
import { Country } from "./models/country";
import { mapCountries } from "./utilities/utilities";
import { useQuery } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";

const App = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  //const [countries, setCountries] = React.useState<Country[]>([]);
  const [searchText, setSearchText] = React.useState<string>("");
  const [regionSelected, setRegionSelected] = React.useState<string>("");

  const query = useQuery({
    queryKey: ["countries"],
    queryFn: () =>
      fetch("https://restcountries.com/v3.1/all").then((res) => res.json()),
  });

  //console.log(query.data);

  return (
    <div className="font-nunito">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="bg-slate-50">
        <Filters
          setSearchText={setSearchText}
          region={regionSelected}
          setRegion={setRegionSelected}
        />
      </div>
    </div>
  );
};

export default App;
