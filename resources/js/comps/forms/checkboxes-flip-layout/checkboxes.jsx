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
  
  return (
    <div className="checkboxes-container">
      { options.map((option, idx) => {

        const key = `check-${option}`;

        return (
          <Fragment key={key}>
            <Checkbox id={key} { ...{ type, option, applyFilter } } />
          </Fragment>
        );
      }) }
    
    </div>
  );
}