import React from "react";

import DropdownMenu from "../DropdownMenu";
import "./styles.css";

const Filters = () => {
  return (
    <section id="filters-container">
      <div className="filter-container">
        <small className="small-title">DEPARTMENT</small>
        <DropdownMenu menuName="department" />
      </div>
      <div className="filter-container">
        <small className="small-title">LOCATION</small>
        <DropdownMenu menuName="location" />
      </div>
    </section>
  );
};

export default Filters;
