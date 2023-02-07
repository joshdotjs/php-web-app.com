import React, { useState, useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';

import Notifications from './notify/notify';
import HamburgerButton from './button-hamburger';
import CartButton from './button-cart';

import AuthContext from '@/context/auth-ctx';
import CartContext from '@/context/cart-ctx';

import Cart, { openCart } from './Cart';
import NavDrawer, { openDrawer as openNavDrawer } from './drawer-nav';

import './_header.scss';

// ==============================================

export default function Header() {

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
    <>
      <Cart />

      <NavDrawer title="" position="left" classes="w-[300px]" portal_id='#portal-nav-drawer'>
      </NavDrawer>

      <header 
        id="navbar" 
        style={{ position: 'fixed' }}
      >

        {/* ----------------------------------- */}

        <nav id="top">
          <div className="gutter">
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
          </div>
        </nav>

        {/* ----------------------------------- */}

        <nav id="bottom">
          <div className="gutter">

            <h2 id="logo">Logo</h2>


            <div // navlinks
              className="hidden md:flex"
            >
              <div className="mr-6">New & Featured</div>
              <div className="mr-6">Men</div>
              <div className="lg:mr-6">Women</div>
              <div className="hidden lg:block ">Sale</div>
            </div>


            <div // buttons container
              className="flex  justify-between  w-[135px]  md:w-fit"
            >

              <CartButton onClick={() => openCart({})} {...{cart_btn_ref, cart_count_ref, cart_icon_target_ref}} />

              <HamburgerButton onClick={() => openNavDrawer()}/>

            </div>

          </div>
        </nav>

        {/* ----------------------------------- */}

      </header>
    </>
  );
}

// ==============================================