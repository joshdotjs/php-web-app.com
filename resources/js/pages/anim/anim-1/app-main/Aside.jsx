import React from 'react';

import CartIcon from './cart-icon';

// ==============================================

const Top = ({
  cartBtnWrapper_ref,
  cartBtn_ref,
  cartCount_ref,
}) => {
  return (
    <div // visible
      ref={cartBtnWrapper_ref} 
      className="
        absolute  top-4  right-4
        z-1
      "
      // style={{ border: 'solid yellow 10px' }}
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
  );
}

// ==============================================

const Bottom = ({
  cartItems_ref
}) => {
  return (
    <div // hidden
      className="hidden"
    >
      <div 
        ref={cartItems_ref} 
        className="items"
      ></div>
    </div>
  );
}

// ==============================================

export default function Aside({
  cartBtnWrapper_ref,
  cartBtn_ref,
  cartCount_ref,
  cartItems_ref
}) {
  return (

      <aside 
        className="
          fixed  top-0  right-0
          z-20
        " // header z-10
        // style={{ border: 'solid red 10px' }}
      >

        <Top { ...{
            cartBtnWrapper_ref,
            cartBtn_ref,
            cartCount_ref,
          } }
        />

        <Bottom { ...{
            cartItems_ref
          } } 
        />

      </aside>

  );
}

// ==============================================