import React, { useContext } from "react";

import DropdownContext from "../../context/dropdownContext";

const SingleOption = ({ selectedOptions, onSelect }) => {
  const { optionsMap } = useContext(DropdownContext);
  const optionsToDisplay = [...selectedOptions.values()];
  return (
    <>
      {optionsToDisplay.map((optionID, index) => (
        <div
          key={`option-selected-value-${index}`}
          className="dropdown-single-value"
        >
          {optionsMap.get(optionID).value}
        </div>
      ))}
    </>
  );
};

export default SingleOption;
