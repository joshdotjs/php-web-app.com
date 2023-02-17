import React, { useState, useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';

import Notifications from './notify/notify';
import HamburgerButton from './header-button-hamburger';
import CartButton from './header-button-cart';

import AuthContext from '@/context/auth-ctx';
import CartContext from '@/context/cart-ctx';


import NavbarBottom from './header-navbar-bottom';
import NavbarTop from './header-navbar-top'; 

import CartDrawer, { openCart } from './drawer-cart';
import NavDrawer, { openDrawer as openNavDrawer } from './drawer-nav';

import './header.scss';

// ==============================================

export default function Header() {

  // --------------------------------------------

  const year = new Date().getFullYear();

  // --------------------------------------------
  
  return (
    <footer className="grid place-items-center">
      <div className="text-center">
        <p className="mb-[0.35rem]">eCommerce Demo by Josh Holloway</p>
        <p className="m-0">Copyright © {year}</p>
      </div>
    </footer>
  );
}

// ==============================================