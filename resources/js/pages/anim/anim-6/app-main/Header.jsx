import React from 'react';

import CartIcon from './cart-icon';

// ==============================================

export default function Header({
  cartBtnWrapper_ref,
  cartBtn_ref,
  cartCount_ref,
  cart_icon_target_ref
}) {
  return (
    
    <header id="navbar">

      <nav id="top"></nav>

      <nav id="bottom">
  
        <h2 id="logo">Logo</h2>


        <div ref={cart_icon_target_ref}></div>

        <div // top-visible
          id="top-visible"
          ref={cartBtnWrapper_ref} 
          >
          <button // icon
            ref={cartBtn_ref}
            className="
            flex  items-center 
            bg-white 
            p-4
            "
            style={{ fontSize: '1.5rem', borderRadius: '0.25rem', boxShadow: '0 1rem 2rem hsla(0 0% 0% / 0.2)' }}
            >
            <CartIcon />
          </button>

          <div // count 
            ref={cartCount_ref} 
            className=" 
            empty:hidden
            absolute
            flex items-center justify-center
            text-white
            bg-pink-400
            "
            style={{
              top: '-0.65em',
              right: '-0.75em',
              fontSize: '0.9rem',
              letterSpacing: '-0.08em',
              width: '1.75rem',
              height: '1.75rem',
              borderRadius: '50%',
            }}
            >
          </div>

        

        </div>

        
      </nav>

      
    </header>


  );
}

// ==============================================