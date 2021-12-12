import React from "react";

import "./chevron.scss";

const Chevron = ({ open = false }) => {
  return (
    <>
      {open ? (
        <span className="chevron-icon">▲</span>
      ) : (
        <span className="chevron-icon">▼</span>
      )}
    </>
  );
};

export default Chevron;
