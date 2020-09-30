import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { MouseEventContext } from "../../contexts/MouseEventContext";
import { FilterContext } from "../../contexts/FilterContext";
import "./styles.css";

const Filters = () => {
  const { options, selection, setSelection } = useContext(FilterContext);
  const { menuOpen, setMenuOpen } = useContext(MouseEventContext);

  const toggleDropdown = (menuName) => {
    setMenuOpen((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  const handleSelection = (menuName, option) => {
    setSelection((prevState) => ({
      ...prevState,
      [menuName]: option,
    }));
  };

  return (
    <section id="filters-container">
      <div className="filter-container">
        <small className="small-title">DEPARTMENT</small>
        <div
          onClick={() => toggleDropdown("department")}
          className={menuOpen.department ? "dropdown-open" : "dropdown"}
        >
          <div className="dropdown-header">
            <span>{selection.department}</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <ul>
            {options.departments &&
              options.departments.map((option, i) => {
                if (option !== selection.department) {
                  return (
                    <li
                      onClick={() => handleSelection("department", option)}
                      className="dropdown-option"
                      key={i}
                    >
                      {option}
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      </div>
      <div className="filter-container">
        <small className="small-title">LOCATION</small>
        <div
          onClick={() => toggleDropdown("location")}
          className={menuOpen.location ? "dropdown-open" : "dropdown"}
        >
          <div className="dropdown-header">
            <span>{selection.location}</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <ul>
            {options.locations &&
              options.locations.map((option, i) => {
                if (option !== selection.location) {
                  return (
                    <li
                      onClick={() => handleSelection("location", option)}
                      className="dropdown-option"
                      key={i}
                    >
                      {option}
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Filters;
