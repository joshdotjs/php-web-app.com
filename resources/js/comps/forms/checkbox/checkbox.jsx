import React, { useState, useEffect } from "react";

import './_.scss';

const init_form = {
  check: false,
};

// ==============================================

export default function Checkbox({ children, id, }) {

  const [state, setState] = useState(false);

  const onChange = (event) => {

    const { checked, type, name, value } = event.target;
      setState(checked);
  };


  useEffect(() => {
    console.log('id: ', id, '\tstate: ', state);
  }, [state]);

  return (
    <div className="checkbox-container">
      <input 
        type="checkbox" 
        id={id} 
        name={id} 
        checked={state} 
        onChange={onChange} 
      />
      <label htmlFor={id}>{ children }</label>
    </div>
  );
}