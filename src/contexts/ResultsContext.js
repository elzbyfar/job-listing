import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
} from "react";
import { FilterContext } from "./FilterContext";

export const ResultsContext = createContext({});

const ResultsProvider = ({ children }) => {
  const { listings } = useContext(FilterContext);

  const [activeDepartments, setActiveDepartments] = useState(["hello"]);

  const ResultsProviderObject = useMemo(
    () => ({
      activeDepartments,
      setActiveDepartments,
    }),
    [activeDepartments]
  );

  return (
    <ResultsContext.Provider value={ResultsProviderObject}>
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsProvider;
