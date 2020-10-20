import React from "react";
import Main from "./components/Main";

import FilterProvider from "./contexts/FilterContext";

const App = () => {
  return (
    <FilterProvider>
      <Main />
    </FilterProvider>
  );
};

export default App;
