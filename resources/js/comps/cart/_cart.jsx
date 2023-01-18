import React, { useEffect, useState, useContext } from 'react';

import CartContext from '../../context/cart-ctx';

import Button from '../../comps/button/button';

// import { lo, lg, lr, lb, ly } from '../../util/log';
import { fetchGET, fetchPOST } from '../../util/fetch';
// import { 
//   getCartLS, setCartLS, 
// } from '../../util/local-storage';
// import { fireEvent } from '../../util/custom-event';


// ==============================================

export default function Cart() {

  // --------------------------------------------

  const { cart, removeFromCart } = useContext(CartContext);

  // --------------------------------------------

  const handler = () => {

    // - - - - - - - - - - - - - - - - - - - - - 

    const submitOrderToNode = () => {
      // const url = `${process.env.NEXT_PUBLIC_API_URL}/api/checkout/stripe-checkout-node`;
      const url = `${window.API_URL}/api/checkout/stripe-checkout-laravel`;

      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ cart }),
      })
        .then(res => {
          if (res.ok) return res.json();
          return res.json().then(json => Promise.reject(json));
        })
        .then(({ url }) => {
          window.location = url;
        })
        .catch(e => {
          console.error(e.error);
        });

    };

    submitOrderToNode();

    // - - - - - - - - - - - - - - - - - - - - - 

    const insertOrderInDB = async () => {

      const data = await fetchPOST( {url: '', body: { cart }});

      
      
    };

    insertOrderInDB();


    // - - - - - - - - - - - - - - - - - - - - - 

  };

  // --------------------------------------------

  return (
    <aside 
      id="cart" 
      className="border p-4"
      style={{
        position: 'fixed',
        top: 40,
        right: 0,
        width: '200px',
        height: '100vh',
        background: 'lightblue'
      }}
    >
      <h2>Cart: </h2>

      { cart.length > 0 && cart.map(({ 
        product: { title, body, price, id: product_id },
        variant: { size, color, id: variant_id },
        qty 
      }) => {

        return (
          <div key={`variant-${variant_id}`} className="border mb-4 p-4">

            <h2>{title}</h2>
            <p>{body}</p>
            <p>Size: {size}</p>
            <p>Color: {color}</p>
            <p><strong>${price}</strong></p>
            <p>Quantity: {qty}</p>
            <Button onClick={() => {
              console.warn('removeFromCart()');
              removeFromCart(variant_id);
            }}>Remove</Button>
          </div>
        );
      }) }

      <Button 
        disabled={cart.length === 0}
        onClick={handler}
      >
        Checkout
      </Button>
    </aside>
  );
};

// ==============================================
