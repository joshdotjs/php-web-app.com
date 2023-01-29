import React, { useState, useEffect, Fragment } from "react";

import './_.scss';
import Checkbox from "@/comps/forms/checkbox/checkbox";

// ==============================================

export default function Checkboxes({ options, set, setSet }) {
  
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

  const handleOption = (option) => () => {

    setSet(prev => {
      if (prev.has(option)) {
        const clone = new Set([...prev]);
        clone.delete(option);
        return clone;
      }
      else {
        const clone = new Set([...prev]);
        clone.add(option);
        return clone;
      }
    });

  };

  // --------------------------------------------
  
  return (
    <div className="checkboxes-container">
      { options.map((option, idx) => {

        const key = `check-${option}`;

        return (
          <Fragment key={key}>
            <Checkbox id={key} setSet={setSet}>{option}</Checkbox>
          </Fragment>
        );
      }) }
    
    </div>
  );
}