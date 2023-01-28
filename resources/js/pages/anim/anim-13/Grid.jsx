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

  // -Keep the height of the grid constant between filtering and moving itemns out of it.
  // -This avoids any jumps and is much simpler than animating the height of the grid.
  // -On page load grab the height of the grid after being populated by all elements.
  // -Store this height and explicitly set the height on the container for the grid.
  // -The grid now stays constant height even during/after filtering/moving grid items.

  // const [grid_height, setGridHeight] = useState();
  // const [card_size, setCardSize] = useState({ height: null, width: null});
  // const [screen_changed, setScreenChanged] = useState(false);

  // useEffect(() => {
  //   // -Resize the 
  //   const resizeHandler = () => {
  //     setScreenChanged(prev => !prev);
  //     console.log('resized screen');
  //   }
  //   const debounced = _.debounce(resizeHandler, 150)
  //   addEventListener("resize", debounced);
  //   return () => removeEventListener('resize', debounced);
  // }, []);

  // --------------------------------------------

  // useLayoutEffect(() => {
  //   const grid_items = document.querySelector('#grid-items');
  //   const grid_height = grid_items.offsetHeight;
  //   setGridHeight(grid_height);

  //   const card = grid_items.querySelector('.box');
  //   const card_height = card.offsetHeight;
  //   const card_width  = card.offsetWidth;
  //   setCardSize({ height: card_height, width: card_width });
  // }, [screen_changed]);

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