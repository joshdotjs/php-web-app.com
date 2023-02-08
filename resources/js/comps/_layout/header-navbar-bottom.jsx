import React, { useState, useEffect, useRef, useContext } from 'react';
// import { gsap } from 'gsap';

// import Notifications from './notify/notify';
import HamburgerButton from './header-button-hamburger';
import CartButton from './header-button-cart';
import NavbarFlyoutDrawer, { 
  openDrawer as openFlyout,
  closeDrawer as closeFlyout,
} from './drawer-navbar-flyout';

// import AuthContext from '@/context/auth-ctx';
import CartContext from '@/context/cart-ctx';

import { openCart } from './drawer-cart';
import { openDrawer as openNavDrawer } from './drawer-nav';

import logo from './logo.svg';

// ==============================================

export default function NavbarBottom() {

  // --------------------------------------------

  // const { logged_in, user, logOut } = useContext(AuthContext);

  // --------------------------------------------

  const {
    cart_btn_ref,
    cart_icon_target_ref,
    cart_count_ref,
  } = useContext(CartContext);

  // --------------------------------------------
  
  return (
    <>
      <NavbarFlyoutDrawer />

      <nav id="bottom">
        <div className="gutter">

          <a 
            // href="/"
            >
            <img className="h-8 w-auto" src={logo} alt="Logo" />
          </a>


          <ul // navlinks
            className="hidden md:flex"
          >
            <li className="mr-6"            onClick={() => openFlyout(0)}>New & Featured</li>
            <li className="mr-6"            onClick={() => openFlyout(1)}>Men</li>
            <li className="lg:mr-6"         onClick={() => openFlyout(2)}>Women</li>
            <li className="hidden lg:block" onClick={() => openFlyout(3)}>Sale</li>
          </ul>


          <div // buttons container
            className="flex  justify-between  w-[110px]  md:w-fit"
            >

            <CartButton onClick={() => openCart({})} {...{cart_btn_ref, cart_count_ref, cart_icon_target_ref}} />

            <HamburgerButton onClick={() => openNavDrawer()}/>

          </div>

        </div>
      </nav>
    </>
  );
}

// ==============================================