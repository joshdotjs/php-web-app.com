import React from 'react';
import { useEffect, useState } from 'react';

// ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export default function Grid({
  refs,
  layout,
  addToCart,
  remove
}) {

  // // ============================================

  // const [in_carts, setInCarts] = useState(init(data.length, false));

  // // ============================================

  return (
      <ul // items
        className="
          grid  gap-4
          grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4
          max-w-screen-2xl  mx-auto
          p-4
        "
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
                aspectRatio: 3 / 4,
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
                onClick={() => {
                  addToCart(idx);
                }}
              >
                {item.status}
              </button>
            </li>
        ))}
      </ul>
  );

  // ============================================

}

// ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰