import React from "react";

import './_.scss';

// ==============================================

export default function Checkbox({ children, id, }) {
  return (
    <div className="checkbox-container">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{ children }</label>
    </div>
  );
}