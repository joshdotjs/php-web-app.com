import React, { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState, useContext } from 'react';
// import { createPortal } from 'react-dom';
import { gsap } from "gsap";

import { transitionTextColor } from '@/util/transition';
import { lc, lg, lo, lp, lb, lr, ly } from '@/util/log';
import { disableClick, enableClick } from '@/util/dom';

// ==============================================

let openDrawer, closeDrawer;

// ==============================================

const DrawerContents = () => {

  // --------------------------------------------

  return (
    <div>
      CONTENTS
    </div>
  );
};

// ==============================================

export default function NavbarFlyoutDrawer() {

  // --------------------------------------------

  // -<children /> needs to have either margin or padding of 1rem 
  //  to match the padding in the title

  // --------------------------------------------
  
  // const portal_root = document.querySelector('#portal-navbar-flyout-drawer');

  // --------------------------------------------

  openDrawer = () => {

    console.log('openDrawer()');

    showOverlay();   
    
    lr(tl_ref.current);
    if (tl_ref.current) // if still open then reset timeline before opening.
      tl_ref.current.revert();
    
    const container = container_ref?.current;
    const container_container = container.parentNode;
    container_container.style.display = 'block';

    tl_ref.current = gsap.to(container, { 
      y: 0,
      duration: 0.3,
      onReverseComplete: () => container_container.style.display = 'none',
    });

  };

  // --------------------------------------------

  closeDrawer = () => {
    hideOverlay();
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
  
  const showOverlay = () => {
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

  const hideOverlay = () => {
    // fireEvent('cart-close');
    // setDrawerCartOpen(false);
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

  const navbar_top_height = '50px';
  const navbar_bottom_height = '70px';
  const header_height =  '120px';

  const flyout_height = '200px';

  const translate = {
    // top: 0,
    transform: `translateY(-${flyout_height})`,
    // --navbar-top-height: 50px;
    // --navbar-bottom-height: 70px;
  };

  // --------------------------------------------
  
  return ( // createPortal(
    <div 
      className="hidden md:block"
      style={{ position: 'absolute',
        border: 'dashed hotpink 1px',
        height: flyout_height,
        width: '100vw',
        // top: '200px',
        top: header_height,
        overflow: 'hidden',
        display: 'none',
      }}
    >
      <div // Blur Overlay
        ref={overlay_ref}
        className="pointer-events-auto fixed inset-0"
        style={{ 
          display: 'none',
          opacity: 0,     
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(5px)', // I think this is not animating the blur!  I think a single blur is computed and then the opacity on it is animated - which is efficient.  I think animating a blur causes a diffrent blur to be computed for each frame of the animation with each one slightly more blurred than the previous.
          WebkitBackdropFilter: 'blur(5px)',
          // zIndex: '99'
        }}
        onClick={() => closeDrawer()}
      >  
      </div>

      <aside 
        ref={container_ref}
        style={{ 
          // position: 'fixed',
          background: 'red',
          height: '200px',
          width: '100vw',
          padding: 0,
          margin: 0,
          ...translate,
      }}
      >

        {/* - - - - - - - - - - - - - - - - - - */}

        <div
          className={`
            py-6 
          `}
          style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // background: 'lightgreen'
          }}
        >

          <h4>TITLE</h4>

          <svg onClick={closeDrawer}
            xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" 
            className="bi bi-x  cursor-pointer" viewBox="0 0 16 16"
            // style={{ background: 'red' }}
            >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>

        {/* - - - - - - - - - - - - - - - - - - */}

        <DrawerContents />

        {/* - - - - - - - - - - - - - - - - - - */}

      </aside>


    </div>
    // ,
    // portal_root
  );

  // --------------------------------------------
};

// ==============================================

export { openDrawer, closeDrawer }; // NOTE: Need to pass these in as props like: () => openDrawer();