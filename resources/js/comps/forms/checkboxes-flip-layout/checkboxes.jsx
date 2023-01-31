import React, { useState, useEffect, Fragment } from "react";

import './_.scss';
import Checkbox from "./checkbox/checkbox";

// ==============================================

export default function Checkboxes({ type, options, set, applyFilter }) {
  
  // --------------------------------------------

  // -options:    array of options to choose from.
  // -set:        set of chosen options.
  // -setSet:     function setting the external chosen set.

  // --------------------------------------------

  // const options = ['sm', 'lg'];
  // const [set, setSet]   = useState(new Set());
  useEffect(() => {
    console.log('set: ', set);
  }, [set]);

  // --------------------------------------------

  const [state, setState] = useState(options.map(option => false));

  // --------------------------------------------

  const onChange = (option) => (event) => {

    const { checked, name } = event.target;
    const index = options.indexOf(name);

    // const { checked, type, name, value } = event.target;
    setState((prev) => {
      const clone = structuredClone(prev);
      clone[index] = checked;
      return clone;
    }); // local state for 'controlled-input'
    applyFilter({ type, option });
  }

  // --------------------------------------------
  
  return (
    <div className="checkboxes-container">
      { options.map((option, idx) => {

        const key = `check-${option}`;

        return (
          <Fragment key={key}>
            <Checkbox id={key} checked={state[idx]} { ...{ type, option, onChange } } />
          </Fragment>
        );
      }) }
    
    </div>
  );
}