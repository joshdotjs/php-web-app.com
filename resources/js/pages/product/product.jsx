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

// ==============================================

export default function Product ({ product, addToCart }) {

  // --------------------------------------------

  const {id, title, body, price} = product;

  // --------------------------------------------

  return (
    <section id="product" className="bg-orange-200">
        
      <div key={id} className="mb-4 border p-4">
        <h2>{title}</h2>
        <p>{body}</p>
        <p><strong>${price}</strong></p>

        <div>VARIANTS: TODO</div>

        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </div>

    </section>
  );
};

// ==============================================
