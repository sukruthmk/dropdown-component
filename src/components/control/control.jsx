import React from "react";

import Input from "../input";
import Options from "../options";

import "./control.scss";

const Control = ({ selectedOptions, isActive, onDropdownClick, onSelect }) => {
  return (
    <div className="dropdown-form-control">
      <div className="dropdown-form-control__value-container">
        <Options selectedOptions={selectedOptions} onSelect={onSelect} />
        <div className="dropdown-form-control__input-container">
          <Input isActive={isActive} onDropdownClick={onDropdownClick} />
        </div>
      </div>
    </div>
  );
};

export default Control;
