import React, { useContext } from "react";

import DropdownContext from "../../context/dropdownContext";

const MultiOption = ({ selectedOptions, onSelect }) => {
  const { optionsMap } = useContext(DropdownContext);
  const optionsToDisplay = [...selectedOptions.values()];
  return (
    <>
      {optionsToDisplay.map((optionID, index) => (
        <div
          key={`option-selected-value-${index}`}
          className="dropdown-multi-value"
          onClick={() => onSelect(optionID)}
        >
          {optionsMap.get(optionID).value}
        </div>
      ))}
    </>
  );
};

export default MultiOption;
