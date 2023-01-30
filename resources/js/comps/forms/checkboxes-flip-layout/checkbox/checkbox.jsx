import React, { useState, useEffect } from "react";

import './_.scss';

// ==============================================

export default function Checkbox({ id, type, option, applyFilter }) {

  // --------------------------------------------

  // -This version differs from the main version 
  //  by applying applyFilter(option) instead
  //  of updating the setSet state.
  // -applyFilter(option) is specific to the 
  //  FLIP grid logic and the Set is updated
  //  in-place in that function, as well as the
  //  layout state which triggers the FLIP animation.
  // -The goal of updating the state in place like this
  //  was to reduce the number of useEffects to 
  //  only one to avoid any unnecessary side effect complexity.
  // -Really only useLayoutEffect is used
  //  in response the the change of the layout
  //  state property named 'state' which stores
  //  the FLIP snapshot of the grid state.

  // --------------------------------------------

  // -option:   the string option correponding to this checkbox
  // -setSet:   set the external state that stores the set of chosen checkboxes
  // -id:       unique identifier used in htmlFor

  // --------------------------------------------

  const [state, setState] = useState(true);

  // --------------------------------------------

  const onChange = (event) => {
    // const { checked, type, name, value } = event.target;
    const { checked } = event.target;
    setState(checked); // local state for 'controlled-input'
    applyFilter({ type, option });
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