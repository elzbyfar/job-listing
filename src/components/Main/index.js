import React, { useContext } from "react";
import Filters from "../Filters";
import Results from "../Results";
import PageDescription from "../PageDescription";
import "./styles.css";
import { FilterContext } from "../../contexts/FilterContext";

const Main = () => {
  const { menuOpen, setMenuOpen } = useContext(FilterContext);

  const closeMenu = () => {
    if (menuOpen.department) {
      setMenuOpen((prevState) => ({
        ...prevState,
        department: false,
      }));
    } else if (menuOpen.location) {
      setMenuOpen((prevState) => ({
        ...prevState,
        location: false,
      }));
    }
  };

  return (
    <div className="App" onClick={() => closeMenu()}>
      <PageDescription />
      <Filters />
      <Results />
    </div>
  );
};

export default Main;
