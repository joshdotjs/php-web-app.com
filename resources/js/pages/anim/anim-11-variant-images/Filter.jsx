import React from 'react';

// ==============================================

export default function Filter({ filter, setFilter, applyFilter }) {

  // --------------------------------------------
  // --------------------------------------------

  return (
    <div id="btn-container">
      <div className="radio" onClick={() => applyFilter('red')}   style={ filter.has('red')   ? { background: 'darkorange'} : {} }>Red</div>
      <div className="radio" onClick={() => applyFilter('blue')}  style={ filter.has('blue')  ? { background: 'darkorange'} : {} }>Blue</div>
      <div className="radio" onClick={() => applyFilter('green')} style={ filter.has('green') ? { background: 'darkorange'} : {} }>Green</div>
    </div>
  );

  // --------------------------------------------

}

// ==============================================