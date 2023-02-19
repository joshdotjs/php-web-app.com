import React, { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import uuid from 'react-uuid';
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

import Button from '@/comps/button/button';

import { lc, lg, lo, lp, lb, lr, ly } from 'util/log';
import { authFetch } from 'util/fetch';
import { getCartLS, removeFromCartLS, updateNumCartItems, clearCartLS } from '@/context/cart-ctx/cart-fn';
import { getLS, setLS } from 'util/local-storage';

import './loading-animation/loading-animation.js';
import { fireEvent } from 'util/events.js';

gsap.registerPlugin(Flip);

// ==============================================

let openCart;

// ==============================================

const Ellipsis = ({ children, name, classes, color, fontSize, fontWeight }) => {

  const ellipsis = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };

  return (
    <p 
      className={`
        ${name}
        ${classes}
        w-[130px] md:w-[145px]
      `}
      style={{ 
        color,
        fontSize,
        fontWeight,
        ...ellipsis
      }}
    >
      {children}
    </p>
  );
};

// ==============================================

export default function Cart() {

  // --------------------------------------------

  const black = 'black';
  const light = '#757575';
  const green = '#41A139';

  // --------------------------------------------

  const overlay_ref = useRef(null);

  // --------------------------------------------
  
  const showOverlay = () => {
    const ref = overlay_ref.current;
    ref.style.display = 'block';
    gsap.to(ref, { 
      opacity: 1, 
      duration: 0.3,
      onStart: () => {
        document.body.style.overflow = "hidden"; // don't scroll stuff underneath the modal
      },
    });
  };

  // --------------------------------------------

  const hideOverlay = () => {
    const ref = overlay_ref.current;
    gsap.to(ref, { 
      opacity: 0,
       duration: 0.3, 
       onComplete: () => {
        ref.style.display = 'none';
        document.body.style.overflow = "overlay"; // custom scrollbar overlay
      }});
  };

  // --------------------------------------------

  const portal_root = document.querySelector('#portal-loading');

  // --------------------------------------------

  return createPortal(
    <div // Blur Overlay
      ref={overlay_ref}
      className="pointer-events-auto fixed inset-0"
      style={{ 
        display: 'none', 
        opacity: 0,
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(5px)', // I think this is not animating the blur!  I think a single blur is computed and then the opacity on it is animated - which is efficient.  I think animating a blur causes a diffrent blur to be computed for each frame of the animation with each one slightly more blurred than the previous.
        WebkitBackdropFilter: 'blur(5px)',
        zIndex: '99'
      }}
      onClick={() => closeCart()}
    >  
      <loading-animation></loading-animation>
    </div>    
    ,
    portal_root
  );

  // --------------------------------------------
};

// ==============================================

export { openCart };