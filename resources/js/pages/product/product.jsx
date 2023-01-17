import React, { useEffect, useState } from 'react';
// import { createRoot } from 'react-dom/client';

// import Header from '../../comps/header/_header';
// import Cart from '../../comps/cart/_cart';
import Button from '../../comps/button/button';

// import { lo, lg, lr, lb, ly } from '../../util/log';
// import { fetchGET, fetchPOST } from '../../util/fetch';
// import { 
//   getCartLS, setCartLS, 
// } from '../../util/local-storage';
// import { fireEvent } from '../../util/custom-event';

import '.scss';

// ==============================================

export default function Product ({ product, variants, addToCart }) {

  // --------------------------------------------

  const {product_id, title, body, price} = product;

  // --------------------------------------------

  const [variant, setVariant] = useState(variants[0]);

  useEffect(() => console.log('variant: ', variant), [variant]);


  // --------------------------------------------

  return (
    <section id="product" className="bg-orange-200">
        


      <div className="mb-4 border p-4">
        <h2>{title}</h2>
        <p>{body}</p>
        <p><strong>${price}</strong></p>


        <div className="radio-group">

        { variants.map(({ id: variant_id, size, color }) => {


          return (
            <div
              key={`variant-${variant_id}`}
              onClick={() => {
                
                console.log('variant_id', variant_id);
                const new_variant = variants.find(item => item.id === variant_id);
                console.log('new_variant: ', new_variant);
                setVariant(new_variant);
              }}
              className="radio"
            >
              <p>Size: {size}</p>
              <p>Color: {color}</p>
            </div>
            );
          })}
        </div>


        <div style={{background: 'red', height: '100px', width: '100px'}}>

          {JSON.stringify(variant)}
        </div>






        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </div>

    </section>
  );
};

// ==============================================
