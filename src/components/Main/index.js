import React from "react";
import Filters from "../Filters";
import Results from "../Results";
import PageDescription from "../PageDescription";
import "./styles.css";

const Main = () => {
  return (
    <div className="App">
      <PageDescription />
      <Filters />
      <Results />
    </div>
  );
};

export default Main;
