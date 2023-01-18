// resources/js/App.jsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import Header from '../../comps/header/_header';
import Cart from '../../comps/cart/_cart';
// import Button from '../../comps/button/button';
import Product from './product';

import { lo, lg, lr, lb, ly } from '../../util/log';
import { fetchGET, fetchPOST } from '../../util/fetch';
import { 
  getCartLS, setCartLS, 
} from '../../util/local-storage';
import { fireEvent } from '../../util/custom-event';

// ==============================================

function Page({ product_SSR, variants_SSR }) {

  console.log('variants_SSR: ', variants_SSR);
  console.log('product_SSR: ', product_SSR);

  // --------------------------------------------

  const [product, setProduct] = useState(product_SSR[0]);
  const [variants, setVariants] = useState(variants_SSR);
  const [cart, setCart] = useState([]);

  // --------------------------------------------

  useEffect(() => {
    setCart(getCartLS());
  }, []);

  useEffect(() => {
    console.log('cart: ', cart);
    
  }, [cart]);


  // --------------------------------------------

  const addToCart = (product, variant) => {

    console.log('product: ', product, '\nvariant: ', variant);

    const { id } = product;

    setCart((prev_cart) => {

      const idx = prev_cart.findIndex(x => id === x.id);
      
      let new_cart;

      if (idx < 0) {
        lo('addToCart() - new line item');
        new_cart = [...cart, { ...product, qty: 1 }]; // clone local cart state and add a new product item to the array with the cloned cart.        
      } else {
        ly('addToCart() - updating quantity');
        new_cart = [...cart]; // clone local cart state via deep copy.
        new_cart[idx] = {...cart[idx], qty: cart[idx].qty + 1}; // update specific item's quantity in the cloned cart array.        
      }

      setCartLS(new_cart);
      return new_cart;
    });



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
    <>
      <Header />

      <Cart { ...{ cart, removeFromCart } } />

      <main>

        <Product { ...{ product, variants, addToCart } } />

      </main>

    </>
  );
}

// ==============================================

const root = document.querySelector('#react-root--product-page');
if(root){
  window.API_URL = root.dataset.apiUrl;

  const product_SSR  = JSON.parse(root.dataset.product);
  const variants_SSR = JSON.parse(root.dataset.variants);


  createRoot(root).render(<Page { ...{ product_SSR, variants_SSR } } />);
}

// ==============================================


