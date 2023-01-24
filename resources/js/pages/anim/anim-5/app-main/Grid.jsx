import React from 'react';
import { useState, useRef, useLayoutEffect } from 'react';

import RadioButtons from '@/comps/inputs/radio-buttons/radio-buttons-variants';
import Button from '@/comps/button/button';

// ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export default function Grid({
  refs,
  layout,
  addToCart,
  remove
}) {

  // ============================================

  // -Keep the height of the grid constant between filtering and moving itemns out of it.
  // -This avoids any jumps and is much simpler than animating the height of the grid.
  // -On page load grab the height of the grid after being populated by all elements.
  // -Store this height and explicitly set the height on the container for the grid.
  // -The grid now stays constant height even during/after filtering/moving grid items.

  const [height, setHeight] = useState();
  const container_ref = useRef(null);

  useLayoutEffect(() => {
    const container = container_ref.current;
    const height = container.offsetHeight;
    setHeight(height);
  }, []);

  // ============================================

  const [chosen_variant_id, setChosenVariantId] = useState();

  // ============================================

  return (
      <ul // items
        ref={container_ref}
        className="
          grid  gap-4
          grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4
          max-w-screen-2xl  mx-auto
          p-4
        "
        style={{
          background: 'gray',
          height: `${height}px`,
          // gridAutoFlow: 'dense',
          gridAutoRows: 'min-content',
        }}
      >
        {layout.items.map((item, idx) => (
            <li // item
              id={`box-${item.id}`} 
              key={item.id}
              className={`box  ${item.status} 
                relative
                grid
              `}
              style={{
                // aspectRatio: 3 / 4,
                height: '300px',
                border: 'dashed yellow 2px',
              }}
            >
              <button 
                ref={el => refs.current[idx] = el}
                className={`btn-item
                  flex  items-center  justify-center
                  text-white  
                  ${item.color} 
                `}
                style={{
                  aspectRation: 3 / 4,
                }}
              >
                <div>
                  <p>Status: {item.status}</p>
                  <p>Title: {item.title}</p>
                  <p>Category: {item.category}</p>

                  <div className="mb-8">
                    <h2 className="text-md mb-4 text-blue-300">Classification</h2>
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
              </button>
            </li>
        ))}
      </ul>
  );

  // ============================================

}

// ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰