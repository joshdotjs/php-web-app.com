import React, { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from "gsap";

import { transitionTextColor } from '@/util/transition';
import { lc, lg, lo, lp, lb, lr, ly } from '@/util/log';
import { disableClick, enableClick } from '@/util/dom';

// ==============================================

let openDrawer, closeDrawer;

// ==============================================

const DrawerContents = () => {

  // --------------------------------------------

  const Card = ({ title, img, classes }) => (
    <div 
      className={`
        cursor-pointer
        ${classes}
      `}
    >
      <img src={img} className="rounded-md overflow-hidden mb-4" />
      <h5 className="text-sm font-medium text-gray-900">{title}</h5>
      <p className="text-sm text-gray-500">Shop now</p>
    </div>
  );

  // --------------------------------------------

  const [active_panel, setActivePanel] = useState(0);

  const panel_refs = useRef([]);

  // --------------------------------------------

  const clickHandler = (idx) => {

    disableClick();
    setActivePanel(idx);

    const duration = 0.3;

    panel_refs.current.forEach((ref, i) => {
      if (i !== idx) {
        gsap.to(ref, { 
          opacity: 0, 
          onStart: () => ref.style.pointEvents = 'none',
          duration,
        });
      }
    });

    const ref = panel_refs.current[idx];
    gsap.to(ref, {
      opacity: 1,
      onStart: () => ref.style.display = 'grid',
      onComplete: () => enableClick(),
      duration,
    });

  };

  // --------------------------------------------

  return (
    <div>

      <div className="flex justify-evenly border-b border-gray-200">
        <div 
          onClick={() => clickHandler(0)}
          className={
            `
              pb-4 w-[100px] text-center border-b-2
              ${transitionTextColor(active_panel === 0, 'text-indigo-600 border-indigo-600', 'text-gray-900 border-transparent')}
              cursor-pointer
              text-base font-medium
            `
          }
        >
          Women
        </div>
        <div 
          onClick={() => clickHandler(1)}
          className={
            `
              pb-4 w-[100px] text-center border-b-2
              ${transitionTextColor(active_panel === 1, 'text-indigo-600 border-indigo-600', 'text-gray-900 border-transparent')}
              cursor-pointer
              text-base font-medium
            `
          }
        >
          Men
        </div>
      </div>

      <div className="relative
          px-4 py-6
          border-b border-gray-200
        "
      >

        {/* ------------------------------------------- */}

        <div // HIDDEN (for height)
          className="grid grid-cols-2 gap-[1rem]" 
          // -use this one to set the height on the section 
          //  since the others are removed from document flow
          style={{ visibility: 'hidden' }} 
        >
          <Card title='Shoes'  classes="mb-4" img="/img/products/clothes/women/Dri-FIT-One-blue.webp"                />
          <Card title='Pants'  classes="mb-4" img="/img/products/clothes/women/Nike-Sportswear-pink.webp"            />
          <Card title='Shirts'                img="/img/products/clothes/women/Sportswear-Phoenix-Fleece-brown.webp" />
          <Card title='Hats'                  img="/img/products/clothes/women/Nike-Swoosh-green.webp"               />
        </div>

        {/* ------------------------------------------- */}

        <div 
          ref={el => panel_refs.current[0] = el}
          className="grid grid-cols-2 gap-[1rem]
            mx-4
            absolute  left-0  top-6
          "
          style={{ opacity: 1, display: 'grid'  }}
        >
          <Card title='Shoes'   classes="mb-4" img="/img/products/clothes/women/Dri-FIT-One-blue.webp"                />
          <Card title='Clothes' classes="mb-4" img="/img/products/clothes/women/Nike-Sportswear-pink.webp"            />
          <Card title='Pants'                  img="/img/products/clothes/women/Sportswear-Phoenix-Fleece-brown.webp" />
          <Card title='Accessories'            img="/img/products/clothes/women/Nike-Swoosh-green.webp"               />
        </div>

        {/* ------------------------------------------- */}

        <div 
          ref={el => panel_refs.current[1] = el}
          className="grid grid-cols-2 gap-[1rem]
            mx-4
            absolute  left-0  top-6
          "
          style={{ opacity: 0, display: 'none'  }}
        >
          <Card title='Shoes'   classes="mb-4" img="/img/products/shoes/men/Vaporfly-2-1.webp"                />
          <Card title='Clothes' classes="mb-4" img="/img/products/clothes/men/Dri-FIT-DNA-shorts-blue.webp"           />
          <Card title='Pants'                  img="/img/products/clothes/men/cargo-pants-green.webp"                 />
          <Card title='Accessories'            img="/img/products/accessories/men/backpack.webp"       />
        </div>

        {/* ------------------------------------------- */}

      </div>

      <div className="px-4 py-6 border-b border-gray-200">
        <h4 className="mb-6 cursor-pointer">About</h4>
        <h4 className="     cursor-pointer">Contact</h4>
      </div>

      <div className="px-4 py-6 border-b border-gray-200">
        <h4 className="mb-6 cursor-pointer">Register</h4>
        <h4 className="     cursor-pointer">Sign in</h4>
      </div>
    </div>
  );
};

// ==============================================

export default function Drawer({ title, position, classes }) {

  // --------------------------------------------

  // -<children /> needs to have either margin or padding of 1rem 
  //  to match the padding in the title

  // --------------------------------------------
  
  const portal_root = document.querySelector('#portal-nav-drawer');

  // --------------------------------------------

  openDrawer = () => {

    console.log('openDrawer()');

    showOverlay();   
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

        const container = document.querySelector('#portal-cart');
        container.style.zIndex = -1;
      }});
  };

  // --------------------------------------------

  let translate;
  if (position === 'left') {
    translate = {
      left: 0,
      transform: 'translate(-100%)'
    };
  }
  else {
    translate = {
      right: 0,
      transform: 'translate(100%)'
    };
  }

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
        onClick={() => closeDrawer()}
      >  
      </div>

      <aside 
        ref={container_ref}
        className={`
          z-100
          ${classes}
        `} 
        style={{ position: 'fixed',
          top: 0,
          background: 'white',
          height: '100vh',
          zIndex: 100,
          padding: 0,
          margin: 0,
          ...translate,
      }}
      >

        {/* - - - - - - - - - - - - - - - - - - */}

        <div
          id="cart-title"
          className={`
            ml-4 
            ${position === 'right' ? 'mr-6' : 'mr-4'} 
            py-6 
          `}
          style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // background: 'lightgreen'
            flexDirection: position === 'left' ? 'row-reverse' : 'row',
          }}
        >

          <h4>{title}</h4>

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
    ,
    portal_root
  );

  // --------------------------------------------
};

// ==============================================

export { openDrawer, closeDrawer }; // NOTE: Need to pass these in as props like: () => openDrawer();