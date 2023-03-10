import React, { useState, useEffect, useRef, useContext } from 'react';
// import { gsap } from 'gsap';

import Link from '@/comps/link/link';

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
        
        <Link id="logo-text" href="/" >React</Link>

        <ul id="nav-links">

          <li className="nav-link hidden md:inline">
            <Link href="/store">Store</Link>
          </li>

          <span className="hidden md:inline mx-2">│</span>

          {
            logged_in 
            ? 
            (
              <>
                <li className="nav-link inline" onClick={logOut}>
                  Log out
                </li>

                <span className="mx-2">│</span>

                <li className="nav-link inline">
                  <Link href="/admin-dashboard">{user?.email}</Link>
                </li>
              </>
            )
            : 
            (
              <>
                <li className="nav-link inline">
                  <Link href="/auth/register">Register</Link>
                </li>

                <span className="mx-2">│</span>

                <li className="nav-link inline">
                  <Link href="/auth/login">Log in</Link>
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