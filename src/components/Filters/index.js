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
      { value: "All Departments", label: "All Departments" },
      { value: "Engineering", label: "Engineering" },
      { value: "Customer Success", label: "Customer Success" },
      { value: "Marketing", label: "Marketing" },
    ],
    locations: [
      { value: "All Locations", label: "All Locations" },
      { value: "New York City", label: "New York City" },
      { value: "San Francisco", label: "San Francisco" },
    ],
  });

  const handleSelection = (event) => {};

  return (
    <section id="filters-container">
      <div className="filter-container">
        <small>DEPARTMENT</small>
        <Select
          value={selectedDepartment}
          name="department"
          onChange={(e) => handleSelection(e)}
          options={options.departments}
        />
      </div>
      <div className="filter-container">
        <small>LOCATION</small>
        <Select
          value={selectedLocation}
          name="location"
          onChange={(e) => handleSelection(e)}
          options={options.locations}
        />
      </div>
    </section>
  );
};

export default Filters;
