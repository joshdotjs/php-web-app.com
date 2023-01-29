import React, { useContext } from 'react';

import AuthContext from '@/context/auth-ctx';
import CartContext from '@/context/cart-ctx';

import BagSVG from './bag-svg';

import { openCart } from './Cart';

import './_header.scss';

// ==============================================

export default function Header({ header_ref }) {

  // --------------------------------------------

  const { logged_in, user, logOut } = useContext(AuthContext);

  // --------------------------------------------

  const {
    cart_btn_ref,
    cart_icon_target_ref,
    cart_count_ref,
  } = useContext(CartContext);
  
  // --------------------------------------------

  return (
    <header 
      id="navbar" 
      ref={header_ref}
      style={{ position: 'fixed' }}
    >

      {/* ----------------------------------- */}

      <nav id="top">

        <div>
          <a href="/">Store Name</a>
        </div>


        <ul id="nav-links">

          <li className="nav-link">
            <a href="/store">Store</a>
          </li>

          {
            logged_in 
            ? 
            (
              <>
                <li className="nav-link" onClick={logOut}>
                  Log out
                </li>

                <li className="nav-link">
                  <a href="/admin-dashboard">{user?.email}</a>
                </li>
              </>
            )
            : 
            (
              <>
                <li className="nav-link">
                  <a href="/auth/register">Register</a>
                </li>

                <li className="nav-link">
                  <a href="/auth/login">Log in</a>
                </li>
              </>
            )
          }

        </ul>

      </nav>

      {/* ----------------------------------- */}

      <nav id="bottom">

        <h2 id="logo">Logo</h2>

        <div 
          id="cart-btn"
          ref={cart_btn_ref}
          onClick={() => {
            console.log('clicked cart button');
            openCart({});
          }}
        >

          <div ref={cart_icon_target_ref} id="hidden-target"></div>

          <BagSVG />

          <div ref={cart_count_ref} id="cart-count" style={{ opacity: 0 }}>
            <span style={{ color: 'white' }} ></span>
          </div>
          
        </div>

      </nav>

      {/* ----------------------------------- */}

    </header>
  );
}

// ==============================================