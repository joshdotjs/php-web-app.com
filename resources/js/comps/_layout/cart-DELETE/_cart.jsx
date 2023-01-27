import React, { useContext } from 'react';

import CartContext from '@/context/cart-ctx';
import AuthContext from '@/context/auth-ctx';

import Button from '@/comps/button/button';

import { lo, lg, lr, lb, ly } from '@/util/log';
import { authFetch } from '@/util/fetch';
import { redirect } from '@/util/routes';

// ==============================================

export default function Cart() {

  // --------------------------------------------

  const { cart, removeFromCart, resetCart } = useContext(CartContext);
  const { logged_in } = useContext(AuthContext);

  // --------------------------------------------

  const submit = () => {

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

    // submitOrderToNode();

    // - - - - - - - - - - - - - - - - - - - - - 

    const insertOrderInDB = async () => {

      // const url = `${process.env.NEXT_PUBLIC_API_URL}/api/orders`;
      const url = `/api/orders`;
      debugger;
      const [data, error] = await authFetch({
        url: url, 
        method: 'POST', 
        body: { cart },
      });
  
      if (error) {
        // alert('TODO: Unauthorization Notification...');
        lr('FAIL');
        console.log('error: ', error);
      }
      if (!error) {
        lg('SUCCESS');
        console.log('data: ', data);
        resetCart();
      }

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

        const key = `variant-${variant_id}`;

        return (
          <div key={key} className="border mb-4 p-4">

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
        onClick={() => {

          if (logged_in)
            submit();
          else {
            // router.push('/auth/login');
            redirect('/auth/login');
          }

        }}
      >
        Checkout
      </Button>
    </aside>
  );
};

// ==============================================
