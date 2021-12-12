import React, { useState } from "react";

import DropdownBase from "../dropdownBase";
import DropdownContext from "../../context/dropdownContext";
import eventTypes from "../../constants/eventTypes.js";
import dropdownTypes from "../../constants/dropdownTypes";

const Dropdown = ({
  type = dropdownTypes.SINGLE,
  options,
  onDropdownChange,
  renderOption = (option) => option?.value,
}) => {
  const [selectedOptions, setSelectedOptions] = useState(new Set());
  const optionsMap = new Map();

  // normalize input options to key value pair so that we can optimize the performance
  for (let i = 0; i < options.length; i++) {
    optionsMap.set(i, options[i]);
  }

  const onSelectSingle = (id) => {
    const newSelectedOptions = new Set();
    newSelectedOptions.add(id);
    setSelectedOptions(newSelectedOptions);
    onDropdownChange(optionsMap.get(id));
  };

  const onSelectMulti = (id) => {
    const newSelectedOptions = new Set(selectedOptions);
    // if the option is already selected
    // then we need to remove it from the set
    let eventType = eventTypes.SELECT_OPTION;
    if (newSelectedOptions.has(id)) {
      newSelectedOptions.delete(id);
      eventType = eventTypes.REMOVE_OPTION;
    } else {
      newSelectedOptions.add(id);
    }

    setSelectedOptions(newSelectedOptions);

    // callback to developer who using this component
    onDropdownChange(optionsMap.get(id), eventType);
  };

  return (
    <DropdownContext.Provider
      value={{
        optionsMap: optionsMap,
        type: type,
        renderOption: renderOption,
      }}
    >
      <DropdownBase
        type={type}
        selectedOptions={selectedOptions}
        onSelectSingle={onSelectSingle}
        onSelectMulti={onSelectMulti}
      />
    </DropdownContext.Provider>
  );
};

export default Dropdown;
