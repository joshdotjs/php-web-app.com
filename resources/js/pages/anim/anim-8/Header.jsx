import React from 'react';

import BagSVG from './bag-svg';

// ==============================================

export default function Header({
  cart_btn_ref,
  cart_count_ref,
  cart_icon_target_ref,
  num_cart_items
}) {
  return (
    
    <header id="navbar">

    <nav id="top"></nav>

    <nav id="bottom">

      <h2 id="logo">Logo</h2>

      <div 
        id="cart-btn"
        ref={cart_btn_ref}
      >

        <div ref={cart_icon_target_ref} id="hidden-target"></div>

        <BagSVG />

        <div ref={cart_count_ref} id="cart-count">
          <div>{num_cart_items}</div>
        </div>
        
      </div>

    </nav>

  </header>


  );
}

// ==============================================