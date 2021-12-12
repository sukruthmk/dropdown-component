import React, { useState } from "react";

import Control from "../control";
import Menu from "../menu";
import dropdownTypes from "../../constants/dropdownTypes";

import "./dropdownBase.scss";

const DropdownBase = ({
  type,
  selectedOptions,
  onSelectSingle,
  onSelectMulti,
}) => {
  const [isActive, setActive] = useState(false);

  const onDropdownClick = () => {
    setActive(!isActive);
  };

  const onSelect = (id) => {
    if (type === dropdownTypes.SINGLE) {
      onSelectSingle(id);
      setActive(!isActive);
    } else {
      onSelectMulti(id);
    }
  };

  return (
    <div className="dropdown">
      <Control
        selectedOptions={selectedOptions}
        isActive={isActive}
        onDropdownClick={onDropdownClick}
        onSelect={onSelect}
      />
      {isActive && (
        <Menu selectedOptions={selectedOptions} onSelect={onSelect} />
      )}
    </div>
  );
};

export default DropdownBase;
