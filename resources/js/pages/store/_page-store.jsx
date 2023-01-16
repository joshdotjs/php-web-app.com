// resources/js/App.jsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import Button from '../../comps/button/button';

import { lo, lg, lr, lb, ly } from '../../util/log';
import { fetchGET, fetchPOST } from '../../util/fetch';
import { 
  getCartLS, setCartLS, 
} from '../../util/local-storage';
import { fireEvent } from '../../util/custom-event';

import './_page-store.scss';

// ==============================================

const Products = ({ products, addToCart }) => {
  return (
    <section id="products" className="bg-orange-200">
      <h2>Products:</h2>
        
      { products && products.map((product) => {

        const {id, title, body, price} = product;

        return (
          <div key={id} className="mb-4 border p-4">
            <h2>{title}</h2>
            <p>{body}</p>
            <p><strong>${price}</strong></p>

            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </div>
        );
      })}
    </section>
  );
};

// ==============================================

const Cart = ({ cart, removeFromCart }) => {
  return (
    <aside id="cart" className="border p-4">
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
          const url = `${process.env.NEXT_PUBLIC_API_URL}/api/checkout/stripe-checkout-node`;

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

function Page() {

  // --------------------------------------------

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {

      const data = await fetchGET('/products');
      console.log('data: ', data);

      setProducts(data);

    })();
  }, []);

  // --------------------------------------------

  useEffect(() => {
    setCart(getCartLS());
  }, []);

  useEffect(() => {
    console.log('cart: ', cart);
    
  }, [cart]);


  // --------------------------------------------

  const addToCart = (product) => {

    const { id } = product;

    const idx = cart.findIndex(x => id === x.id);

    if (idx < 0) {
      lo('addToCart() - new line item');
      const new_cart = [...cart, { ...product, qty: 1 }]; // clone local cart state and add a new product item to the array with the cloned cart.
      setCartLS(new_cart);
      setCart(new_cart);
    } else {
      ly('addToCart() - updating quantity');
      const new_cart = [...cart]; // clone local cart state via deep copy.
      new_cart[idx] = {...cart[idx], qty: cart[idx].qty + 1}; // update specific item's quantity in the cloned cart array.
      setCartLS(new_cart);
      setCart(new_cart);
    }

    // - - - - - - - - - - - - - - - - - - - - - 


    // TODO: FLIP anim...

    // - - - - - - - - - - - - - - - - - - - - - 

    fireEvent('cart-add');
  };

  // --------------------------------------------

  const removeFromCart = (id) => {
    lg('removeFromCart()');
    const new_cart = cart.filter(item => item.id !== id);
    setCartLS(new_cart);
    setCart(new_cart);
    fireEvent('cart-remove');

    // if (new_cart.length < 1) {
    //   closeCart();
    // }
  }

  // --------------------------------------------

  return(
    <div className="bg-blue-500 p-4">

      <Products { ...{ products, addToCart } } />

      <Cart { ...{ cart, removeFromCart } } />

    </div>
  );
}

// ==============================================

const root = document.querySelector('#react-root--products-page');
if(root){
  createRoot(root).render(<Page />);
}

// ==============================================