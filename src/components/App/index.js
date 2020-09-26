import React, { useState, useEffect, useContext } from "react";
import Filters from "../Filters";
import Results from "../Results";
import PageDescription from "../PageDescription";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <PageDescription />
      <Filters />
      <Results />
    </div>
  );
}

export default App;
