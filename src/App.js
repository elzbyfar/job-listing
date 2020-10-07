import React from "react";
import Main from "./components/Main";
import "./styles.css";

import FilterProvider from "./contexts/FilterContext";
import MouseEventProvider from "./contexts/MouseEventContext";

const App = () => {
  return (
    <MouseEventProvider>
      <FilterProvider>
        <Main />
      </FilterProvider>
    </MouseEventProvider>
  );
};

export default App;
