import React, { useState, useEffect, Fragment } from "react";

import './_.scss';
import Checkbox from "@/comps/forms/checkbox/checkbox";

// ==============================================

export default function Checkboxes({ options, set, setSet }) {
  
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
            <Checkbox id={key} setSet={setSet} option={option} />
          </Fragment>
        );
      }) }
    
    </div>
  );
}