import React, { useContext } from 'react';

import AuthContext from '@/context/auth-ctx';
import CartContext from '@/context/cart-ctx';

import BagSVG from './bag-svg';

import './_header.scss';

// ==============================================

export default function Header() {

  // --------------------------------------------

  const { logged_in, user, logOut } = useContext(AuthContext);

  // --------------------------------------------

  const {
    num_cart_items,
    setNumCartItems,
    cart_btn_ref,
    cart_icon_target_ref,
    cart_count_ref,
  } = useContext(CartContext);
  

  // --------------------------------------------

  return (
    <header id="navbar" style={{ position: 'fixed' }}>

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
        >

          <div ref={cart_icon_target_ref} id="hidden-target"></div>

          <BagSVG />

          <div ref={cart_count_ref} id="cart-count">
            <div style={{ color: 'white' }} >{num_cart_items}</div>
          </div>
          
        </div>

      </nav>

      {/* ----------------------------------- */}

    </header>
  );
}

// ==============================================