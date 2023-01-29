import React, { useState, useEffect } from "react";

import './_.scss';

// ==============================================

export default function Checkbox({ id, setSet, option }) {

  // --------------------------------------------

  // -option:   the string option correponding to this checkbox
  // -setSet:   set the external state that stores the set of chosen checkboxes
  // -id:       unique identifier used in htmlFor

  // --------------------------------------------

  const [state, setState] = useState(false);

  // --------------------------------------------

  const onChange = (event) => {
    const { checked, type, name, value } = event.target;
    setState(checked); // local state for 'controlled-input'

    setSet(prev => { // external state storing the set of chosen checkboxes
      const clone = new Set([...prev]);

      if (prev.has(option)) {
        clone.delete(option);
      }
      else {
        clone.add(option);
      }
      return clone;
    });
  };

  // --------------------------------------------

  useEffect(() => {
    console.log('id: ', id, '\tstate: ', state);
  }, [state]);

  // --------------------------------------------

  return (
    <div className="checkbox-container">
      <input 
        type="checkbox" 
        id={id} 
        name={id} 
        checked={state} // controlled-input
        onChange={onChange} 
      />
      <label htmlFor={id}>{ option }</label>
    </div>
  );

  // --------------------------------------------
}