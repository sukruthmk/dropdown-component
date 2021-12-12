import React, { useContext } from "react";

import DropdownContext from "../../context/dropdownContext";
import dropdownTypes from "../../constants/dropdownTypes";

import MultiOption from "./MultiOption";
import SingleOption from "./SingleOption";

import "./options.scss";

const Options = ({ selectedOptions, onSelect }) => {
  const { type } = useContext(DropdownContext);
  return (
    <>
      {type === dropdownTypes.SINGLE ? (
        <SingleOption selectedOptions={selectedOptions} />
      ) : (
        <MultiOption selectedOptions={selectedOptions} onSelect={onSelect} />
      )}
    </>
  );
};

export default Options;
