import React from "react";
import { useQuery } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { getCountries } from "./services/api";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

const App = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const [searchText, setSearchText] = React.useState<string>("");
  const [regionSelected, setRegionSelected] = React.useState<string>("");

  const updateSearchText = (text: string): void => {
    setSearchText(text);
    setRegionSelected("");
  };

  const updateRegion = (region: string): void => {
    setRegionSelected(region);
    setSearchText("");
  };

  const resetFilters = (): void => {
    setSearchText("");
    setRegionSelected("");
  };

  const countriesQuery = useQuery({
    queryKey: ["countries"],
    queryFn: () => getCountries(searchText, regionSelected),
  });

  React.useEffect(() => {
    countriesQuery.refetch();
  }, [searchText, regionSelected, countriesQuery.refetch]);

  return (
    <div className={`font-nunito ${isDarkMode ? "dark" : ""} h-full`}>
      <Router>
        <Navbar
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          resetFilters={resetFilters}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isDarkMode={isDarkMode}
                searchText={searchText}
                updateSearchText={updateSearchText}
                regionSelected={regionSelected}
                updateRegion={updateRegion}
                resetFilters={resetFilters}
                countriesQuery={countriesQuery}
              />
            }
          />
          <Route
            path="/country/:name"
            element={<CountryDetail isDarkMode={isDarkMode} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
