import React from 'react';
import { useState, useLayoutEffect, useEffect } from 'react';

import Card from './Grid-Card';

// ==============================================

export default function Grid({
  refs,
  layout,
  addToCart,
}) {

  // --------------------------------------------

  return (
      <ul // items
        id="grid-items"
      >
        {layout.items.map((item, idx) => {
          return (
            <li // item
              key={item.id}
              id={`box-${item.id}`} 
              className="box"
              style={{ 
                display: item.status === 'exiting' ? 'none' : 'grid'
              }}
            >
              <div 
                ref={el => refs.current[idx] = el}
                className="box-child"
              >
                <Card { ...{ item, addToCart, idx } } />
              </div>
            </li>);
        })}
      </ul>
  );

  // --------------------------------------------

}

// ==============================================