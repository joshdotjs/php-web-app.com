import React, { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import uuid from 'react-uuid';
import { gsap } from "gsap";

import { lc, lg, lo, lp, lb, lr, ly } from '@/util/log';

// ==============================================

let openMobileFilters;

// ==============================================

export default function MobileFilters() {

  // --------------------------------------------
  
  const portal_root = document.querySelector('#portal-mobile-filters');

  // --------------------------------------------

  openMobileFilters = () => {

    openDrawerCart();

    console.log('openCart()');
    
    const container = container_ref?.current;

    lr(tl_ref.current);
    if (tl_ref.current) // if cart is still open then reset timeline before opening. Fixes bug where timeline is overwritten with no animation if cart is already open and added to. Cart should always be closed when adding new item, but just in case this ensures the cart is closable if added to when already open if app is in some unforseen state.
      tl_ref.current.revert();

    tl_ref.current = gsap.to(container, { 
      x: 0,
      duration: 0.3,
     });

  };

  // --------------------------------------------

  const closeCart = () => {
    closeDrawerCart();
    tl_ref.current?.reverse();
  };

  // --------------------------------------------

  const tl_ref = useRef(null);
  const container_ref = useRef(null);
  const q = gsap.utils.selector(container_ref); // Returns a selector function that's scoped to a particular Element, meaning it'll only find descendants of that Element .

  // --------------------------------------------

  // const { overlay_ref } = useContext(CartContext);
  const overlay_ref = useRef(null);

  // --------------------------------------------
  
  const openDrawerCart = () => {
    // setDrawerCartOpen(true);

    console.log('openDrawerCart()');

    const container = document.querySelector('#portal-cart');
    container.style.zIndex = 100;
    // console.log('container: ',  container);

    lr('opening cart drawer');
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

  const closeDrawerCart = () => {
    // fireEvent('cart-close');
    // setDrawerCartOpen(false);
    const ref = overlay_ref.current;
    gsap.to(ref, { 
      opacity: 0,
       duration: 0.3, 
       onComplete: () => {
        ref.style.display = 'none';
        document.body.style.overflow = "overlay"; // custom scrollbar overlay

        const container = document.querySelector('#portal-cart');
        container.style.zIndex = -1;
      }});
  };

  // --------------------------------------------
  
  return createPortal(
    <div className="md:hidden">
      <div // Blur Overlay
        ref={overlay_ref}
        className="pointer-events-auto fixed inset-0"
        style={{ 
          display: 'none', 
          opacity: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(5px)', // I think this is not animating the blur!  I think a single blur is computed and then the opacity on it is animated - which is efficient.  I think animating a blur causes a diffrent blur to be computed for each frame of the animation with each one slightly more blurred than the previous.
          WebkitBackdropFilter: 'blur(5px)',

        }}
        onClick={() => closeCart()}
      >  
      </div>

      <aside 
        id="cart" 
        ref={container_ref}
        className="
          w-[300px]
          md:w-[350px]
          z-100
        " 
        style={{ position: 'fixed',
        top: 0,
        right: 0,
        background: 'white',
        height: '100vh',
        // width: '300px',
        zIndex: 100,
        transform: 'translate(100%)'
      }}
      >

        {/* - - - - - - - - - - - - - - - - - - */}

        <div
          id="cart-title"
          className="ml-4 mr-6 pt-8 pb-4"
          style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // background: 'lightgreen'
          }}
        >

          <h4>Filters</h4>

          <svg onClick={closeCart}
            xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" 
            className="bi bi-x  cursor-pointer" viewBox="0 0 16 16"
            // style={{ background: 'red' }}
            >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>

        


        {/* - - - - - - - - - - - - - - - - - - */}

      </aside>
    </div>
    ,
    portal_root
  );

  // --------------------------------------------
};

// ==============================================

export { openMobileFilters };