import React, { useEffect, useState, useContext } from 'react';

import Context from '../../context/context';
import CartContext from '../../context/cart-ctx';

import Button from '../../comps/button/button';

import '.scss';

// ==============================================

export default function Orders ({ orders, user }) {


  const ctx = useContext(Context);
  const { addToCart } = useContext(CartContext);

  // --------------------------------------------

  // --------------------------------------------

  // --------------------------------------------

  return (
    <>
      <div className="my-4">
        <p>User ID: {user.id}</p>
        <p>Email: {user.email}</p>
      </div>

      <hr />
      <hr />

      <div className="my-4">
        <strong>Orders:</strong>

        {orders && orders.length > 0 && orders.map(({id, total}) => {
          return (
            <div key={`order-${id}`}>
              <hr />
              <p>Order ID: {id}</p>
              <p>Total: {total}</p>
              <hr />
            </div>
          );
        })}
      </div>


    </>
  );
};

// ==============================================
