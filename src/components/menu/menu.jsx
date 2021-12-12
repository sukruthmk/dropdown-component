import React, { useContext } from "react";

import DropdownContext from "../../context/dropdownContext";
import dropdownTypes from "../../constants/dropdownTypes";

import "./menu.scss";

const Menu = ({ selectedOptions, onSelect }) => {
  const { optionsMap, type, renderOption } = useContext(DropdownContext);
  const options = [...optionsMap.keys()];

  return (
    <div className="dropdown-menu">
      {options.map((optionID, index) => {
        const id = `dropdown-option-${index}`;
        const option = optionsMap.get(optionID);
        const onOptonSelect = () => {
          onSelect(optionID);
        };
        return (
          <React.Fragment key={id}>
            {type === dropdownTypes.SINGLE ? (
              <div className="dropdown-menu__option" onClick={onOptonSelect}>
                <span className="dropdown-menu__value--single">
                  {renderOption(option)}
                </span>
              </div>
            ) : (
              <label htmlFor={id} className="dropdown-menu__option">
                <input
                  type="checkbox"
                  id={id}
                  onClick={onOptonSelect}
                  defaultChecked={selectedOptions.has(optionID)}
                />
                <span className="dropdown-menu__value">
                  {renderOption(option)}
                </span>
              </label>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Menu;
