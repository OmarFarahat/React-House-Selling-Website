import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import Housefilter from "./housefilter";
import HouseFromQuery from "../house/HouseFromQuery";
import Inquiry from "../house/inquiry";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import HouseContext from "../context/housesContext";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);
  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
        <div className="container">
          <Header />
          <Housefilter />

          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>
            <Route path="/house/:id">
              <HouseFromQuery />
            </Route>
            <Route path="/">
              <FeaturedHouse house={featuredHouse} />
            </Route>
          </Switch>
        </div>
      </HouseContext.Provider>
    </Router>
  );
}

export default App;
