import React, { useState, useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';

import Notifications from './notify/notify';
import HamburgerButton from './header-button-hamburger';
import CartButton from './header-button-cart';

import AuthContext from '@/context/auth-ctx';
import CartContext from '@/context/cart-ctx';

import Cart, { openCart } from './cart';
import NavDrawer, { openDrawer as openNavDrawer } from './header-drawer-nav';

// ==============================================

export default function NavbarBottom() {

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
          className="flex  justify-between  w-[110px]  md:w-fit"
        >

          <CartButton onClick={() => openCart({})} {...{cart_btn_ref, cart_count_ref, cart_icon_target_ref}} />

          <HamburgerButton onClick={() => openNavDrawer()}/>

        </div>

      </div>
    </nav>
  );
}

// ==============================================