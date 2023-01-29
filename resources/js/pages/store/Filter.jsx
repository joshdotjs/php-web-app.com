import React from 'react';

import './_filter.scss';

// ==============================================

export default function Filter({ filter, applyFilter }) {

  // --------------------------------------------

  return (
    <div id="btn-container">
      <div className="radio" onClick={() => applyFilter('shoes')}       style={ filter.has('shoes')       ? { background: 'darkorange'} : {} }>Shoes</div>
      <div className="radio" onClick={() => applyFilter('clothes')}     style={ filter.has('clothes')     ? { background: 'darkorange'} : {} }>Clothes</div>
      <div className="radio" onClick={() => applyFilter('accessories')} style={ filter.has('accessories') ? { background: 'darkorange'} : {} }>Accessories</div>
    </div>
  );

  // --------------------------------------------

}

// ==============================================