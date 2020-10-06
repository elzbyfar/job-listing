import React from "react";
import Main from "./components/Main";
import "./styles.css";

import FilterProvider from "./contexts/FilterContext";
import ResultsProvider from "./contexts/ResultsContext";
import MouseEventProvider from "./contexts/MouseEventContext";

const App = () => {
  return (
    <MouseEventProvider>
      <FilterProvider>
        <ResultsProvider>
          <Main />
        </ResultsProvider>
      </FilterProvider>
    </MouseEventProvider>
  );
};

export default App;
