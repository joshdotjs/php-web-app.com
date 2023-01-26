import React from 'react';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';

import RadioButtons from '@/comps/inputs/radio-buttons/radio-buttons-variants';
import Button from '@/comps/button/button';

// ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰


const CartInterior = ({ item, chosen_variant_id, setChosenVariantId, addToCart, idx }) => {

  return (
    <div>
      <p>Status: {item.status}</p>
      <p>Title: {item.title}</p>
      <p>Category: {item.category}</p>

      <div className="mb-8">
        <RadioButtons 
          name="variants" 
          options={item.variants.map(({id}) => id)} 
          option_labels={item.variants.map(({size, color}) => `${size} ${color}`)} 
          selected={chosen_variant_id} 
          setSelected={setChosenVariantId} 
        />
      </div>

      <Button onClick={() => {
        addToCart(idx);
      }}>
        add to cart
      </Button>
      
    </div>
  );

};

// ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export default function Grid({
  refs,
  layout,
  addToCart,
}) {

  // ============================================

  // -Keep the height of the grid constant between filtering and moving itemns out of it.
  // -This avoids any jumps and is much simpler than animating the height of the grid.
  // -On page load grab the height of the grid after being populated by all elements.
  // -Store this height and explicitly set the height on the container for the grid.
  // -The grid now stays constant height even during/after filtering/moving grid items.

  const [grid_height, setGridHeight] = useState();
  const [card_size, setCardSize] = useState({ height: null, width: null});
  const [screen_changed, setScreenChanged] = useState(false);

  useEffect(() => {
    // -Resize the 
    const resizeHandler = () => {
      setScreenChanged(prev => !prev);
      console.log('resized screen');
    }
    const debounced = _.debounce(resizeHandler, 150)
    addEventListener("resize", debounced);
    return () => removeEventListener('resize', debounced);
  }, []);

  // ============================================

  useLayoutEffect(() => {
    const grid_items = document.querySelector('#grid-items');
    const grid_height = grid_items.offsetHeight;
    setGridHeight(grid_height);

    const card = grid_items.querySelector('.box');
    const card_height = card.offsetHeight;
    const card_width  = card.offsetWidth;
    setCardSize({ height: card_height, width: card_width });
  }, [screen_changed]);

  // ============================================

  const [chosen_variant_id, setChosenVariantId] = useState();

  // ============================================

  return (
      <ul // items
        id="grid-items"
        // ref={container_ref}
        className="
          grid  gap-4
          grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4
          max-w-screen-2xl  mx-auto
          p-4
        "
        style={{
          background: 'gray',
          height: `${grid_height}px`,
          // gridAutoFlow: 'dense',
          gridAutoRows: 'min-content',
          marginTop: '200px',
        }}
      >
        {layout.items.map((item, idx) => (
          <li // item
            id={`box-${item.id}`} 
            key={item.id}
            className={`box  
              ${item.status} 
            `}
          >
            <div 
              ref={el => refs.current[idx] = el}
              className={`box-child
                ${item.color} 
              `}
              style={{
                height: `${card_size.height}px`,
                width: `${card_size.width}px`,
               }}
            >
              <CartInterior { ...{ item, chosen_variant_id, setChosenVariantId, addToCart, idx } } />

              {/* <Button className="dummy" onClick={() => addToCart(idx)}>
                Add to Cart
              </Button> */}

            </div>
          </li>
        ))}
      </ul>
  );

  // ============================================

}

// ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰