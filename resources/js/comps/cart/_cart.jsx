import React, { useEffect, useState } from 'react';

import Button from '../../comps/button/button';

// import { lo, lg, lr, lb, ly } from '../../util/log';
// import { fetchGET, fetchPOST } from '../../util/fetch';
// import { 
//   getCartLS, setCartLS, 
// } from '../../util/local-storage';
// import { fireEvent } from '../../util/custom-event';


// ==============================================

export default function Cart({ cart, removeFromCart }) {
  return (
    <aside 
      id="cart" 
      className="border p-4"
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '200px',
        height: '100vh',
        background: 'lightblue'
      }}
    >
      <h2>Cart: </h2>

      { cart && cart.map(({ id, title, body, price, qty }) => {

        return (
          <div key={id} className="border mb-4 p-4">

            <h2>{title}</h2>
            <p>{body}</p>
            <p><strong>${price}</strong></p>
            <p>Quantity: {qty}</p>
            <Button onClick={() => removeFromCart(id)}>Remove</Button>
          </div>
        );
      }) }

      <Button 
        disabled={cart.length === 0}
        onClick={ () => {

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

      }}
      >
        Checkout
      </Button>
    </aside>
  );
};

// ==============================================
