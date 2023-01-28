import React, { useState, useEffect, useRef, createContext, } from 'react';
import uuid from 'react-uuid';

import { lo, lg, lr, lb, ly } from '@/util/log';

import { 
  getCartLS,
  addToCartLS, 
  removeFromCartLS,
  getNumItemsInCart,
 } from './cart-fn';

// ==============================================

const CartContext = createContext({
  cart: [],
  setCart: function() {},
});

// ==============================================

const CartContextProvider = ({ children }) => {

  // --------------------------------------------

  const [num_cart_items, setNumCartItems] = useState(getCartLS().length);
  const cart_btn_ref = useRef(null); // cartBtn = cart.querySelector(".btn-cart");
  const cart_icon_target_ref = useRef(null); // cartItems = cart.querySelector(".items");
  const cart_count_ref = useRef(null); // cartCount = cart.querySelector(".count");

  // const cart_open = useState(false);

  // Update cart-items when item is added or removed
  addEventListener('cart-add', () => setNumCartItems());

  // --------------------------------------------

  const context = {
    num_cart_items,
    setNumCartItems,
    cart_btn_ref,
    cart_icon_target_ref,
    cart_count_ref,
    // cart_open,
  };

  // --------------------------------------------
  
  return (
    <CartContext.Provider value={context}>{ children }</CartContext.Provider>
  );
  
  // --------------------------------------------
};

// ==============================================

export default CartContext;
export { CartContextProvider, 
  // getCartLS,
  // addToCartLS, 
  // removeFromCartLS
};