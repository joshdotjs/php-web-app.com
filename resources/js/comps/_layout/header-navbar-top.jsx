import React, { useState, useEffect, useRef, useContext } from 'react';
// import { gsap } from 'gsap';

// import Notifications from './notify/notify';
// import HamburgerButton from './header-button-hamburger';
// import CartButton from './header-button-cart';

import AuthContext from '@/context/auth-ctx';
// import CartContext from '@/context/cart-ctx';


// import NavbarBottom from './header-navbar-bottom';
// import Cart, { openCart } from './cart';
// import NavDrawer, { openDrawer as openNavDrawer } from './header-drawer-nav';

// ==============================================

export default function NavbarTop() {

  // --------------------------------------------

  const { logged_in, user, logOut } = useContext(AuthContext);

  // --------------------------------------------
  
  return (
    <nav id="top">
      <div className="gutter">
        <div>
          <a href="/"></a>
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
      </div>
    </nav>
  );
}

// ==============================================