import React from "react";

import Chevron from "../chevron";

import "./input.scss";

const Input = ({ isActive, onDropdownClick }) => {
  return (
    <div className="dropdown-selector" onClick={onDropdownClick}>
      <input className="dropdown-selector__input" type="text" />
      <Chevron open={isActive} />
    </div>
  );
};

export default Input;
