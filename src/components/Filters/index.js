import React from "react";

import DropdownMenu from "../DropdownMenu";
import "./styles.css";

const Filters = () => {
  return (
    <section id="filters-container">
      <div className="filter-container">
        <span className="filter-title">
          {/* Not sure what is causing this bug, but the combination of TM was automatically producing a trademark superscript. */}
          DEPART<span id="ment"> MENT</span>
        </span>
        <DropdownMenu menuName="department" />
      </div>
      <div className="filter-container">
        <small className="filter-title">LOCATION</small>
        <DropdownMenu menuName="location" />
      </div>
    </section>
  );
};

export default Filters;
