import React, { useState } from "react";

import Select from "react-select";
import "./styles.css";

const Filters = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(
    "All Departments"
  );
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const [options, setOptions] = useState({
    departments: [
      {
        setter: setSelectedDepartment,
        value: "All Departments",
        label: "All Departments",
      },
      {
        setter: setSelectedDepartment,
        value: "Engineering",
        label: "Engineering",
      },
      {
        setter: setSelectedDepartment,
        value: "Customer Success",
        label: "Customer Success",
      },
      {
        setter: setSelectedDepartment,
        value: "Marketing",
        label: "Marketing",
      },
    ],
    locations: [
      {
        setter: setSelectedLocation,
        value: "All Locations",
        label: "All Locations",
      },
      {
        setter: setSelectedLocation,
        value: "New York City",
        label: "New York City",
      },
      {
        setter: setSelectedLocation,
        value: "San Francisco",
        label: "San Francisco",
      },
    ],
  });

  const handleDropdown = (selection) => {
    selection.setter(selection.value);
  };

  return (
    <section id="filters-container">
      <div className="filter-container">
        <small className="small-title">DEPARTMENT</small>
        <Select
          value={selectedDepartment}
          name="department"
          className="dropdown"
          onChange={(selection) => handleDropdown(selection)}
          options={options.departments}
          placeholder={selectedDepartment}
        />
      </div>
      <div className="filter-container">
        <small className="small-title">LOCATION</small>
        <Select
          value={selectedLocation}
          name="location"
          className="dropdown"
          onChange={(selection) => handleDropdown(selection)}
          placeholder={selectedLocation}
          options={options.locations}
        />
      </div>
    </section>
  );
};

export default Filters;
