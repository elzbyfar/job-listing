import React, { useContext } from "react";
import { MouseEventContext } from "../../contexts/MouseEventContext";
import { FilterContext } from "../../contexts/FilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = (props) => {
  const {
    options,
    selection,
    setSelection,
    menuOpen,
    setMenuOpen,
  } = useContext(FilterContext);

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
    <div
      onClick={() => toggleDropdown(props.menuName)}
      className={menuOpen[props.menuName] ? "dropdown-open" : "dropdown"}
    >
      <div className="dropdown-header">
        <span>{selection[props.menuName]}</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      <ul>
        {options[`${props.menuName}s`] &&
          options[`${props.menuName}s`].map((option, i) => {
            if (option !== selection[props.menuName]) {
              return (
                <li
                  onClick={() => handleSelection(props.menuName, option)}
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
  );
};

export default DropdownMenu;
