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

export default function Products ({ products, addToCart }) {
  return (
    <section id="products" className="bg-orange-200">
      <h2>Products:</h2>
        
      { products && products.map((product) => {

        const {id, title, body, price} = product;

        return (
          <div
            key={id} 
            href={`/product/${id}`}
            className="
              mb-4 border p-4
              bg-greeb-200

            "
          >
            <h2>{title}</h2>
            <p>{body}</p>
            <p><strong>${price}</strong></p>

            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            <Button onClick={() => window.location.href = `/product/${id}`}>Details</Button>
          </div>
        );
      })}   
    </section>
  );
};

// ==============================================
