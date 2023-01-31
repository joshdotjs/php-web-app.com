import React from 'react';
import { useState, useLayoutEffect, useEffect } from 'react';

import Card from './card';


// ==============================================

export default function Grid({
  refs,
  layout,
  addToCartAnim,
}) {

  // --------------------------------------------

  return (
      <ul // items
        id="grid-items"
      >

        <div id="filter-button-row" style={{ background: 'red'}}>
          <svg aria-hidden="true" className="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" strokeWidth="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path><path stroke="currentColor" strokeWidth="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" strokeWidth="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path></svg>
        </div>

        {layout.items.map((item, idx) => {
          return (
            <li // item
              key={item.product.id}
              id={`box-${item.product.id}`} 
              className="box"
              style={{ 
                display: item.status === 'exiting' ? 'none' : 'grid',
                // minWidth: '200px'
              }}
            >
              <div 
                ref={el => refs.current[idx] = el}
                className="box-child"
              >
                <Card { ...{ item, addToCartAnim, idx } } />
              </div>
            </li>);
        })}
      </ul>
  );

  // --------------------------------------------

}

// ==============================================