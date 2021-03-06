import React, { useState, useEffect, useMemo, createContext } from "react";
import formatOptions from "../util/formatOptions";
import getListings from "../util/getListings";
import filterData from "../util/filterData";
import setActiveDepts from "../util/setActiveDepts";

export const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState({
    department: false,
    location: false,
  });
  const [options, setOptions] = useState({
    departments: [],
    locations: [],
  });
  const [selection, setSelection] = useState({
    department: "All Departments",
    location: "All Locations",
  });
  const [listings, setListings] = useState([]);
  const [activeDepartments, setActiveDepartments] = useState([]);

  useEffect(() => {
    const buildDropdownMenus = async () => {
      const allListings = await getListings();
      const menuOptions = await formatOptions(allListings);
      const filteredListings = await filterData(
        allListings,
        selection.department,
        selection.location
      );
      const activeDepts = await setActiveDepts(filteredListings);

      setActiveDepartments(activeDepts);
      setListings(filteredListings);
      setOptions(menuOptions);
    };

    buildDropdownMenus();
  }, [selection.department, selection.location]);

  const FilterProviderObject = useMemo(
    () => ({
      options,
      menuOpen,
      listings,
      selection,
      activeDepartments,
      setOptions,
      setMenuOpen,
      setListings,
      setSelection,
      setActiveDepartments,
    }),
    [options, menuOpen, listings, selection, activeDepartments]
  );

  return (
    <FilterContext.Provider value={FilterProviderObject}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
