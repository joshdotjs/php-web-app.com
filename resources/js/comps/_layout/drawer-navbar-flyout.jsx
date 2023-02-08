import React, { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState, useContext } from 'react';
// import { createPortal } from 'react-dom';
import { gsap } from "gsap";

import { transitionTextColor } from '@/util/transition';
import { lc, lg, lo, lp, lb, lr, ly } from '@/util/log';
import { disableClick, enableClick } from '@/util/dom';

// ==============================================

let openDrawer, closeDrawer;

// ==============================================

const DrawerContents = ({ panel_refs, active_panel }) => {

  // --------------------------------------------
  // --------------------------------------------

  return (
    <>
      <div 
        ref={el => panel_refs.current[0] = el}
        className="grid grid-cols-2 gap-[1rem]
          mx-4
          absolute  left-0  top-0
          w-[100%]
          h-[100%]
        "
        style={{ opacity: 1, display: 'grid'  }}
      >
        PANEL 1
      </div>

      <div 
        ref={el => panel_refs.current[1] = el}
        className="grid grid-cols-2 gap-[1rem]
          mx-4
          absolute  left-0  top-0
          w-[100%]
          h-[100%]
        "
        style={{ opacity: 0, display: 'none'  }}
      >
        PANEL 2
      </div>
    </>
  );
};

// ==============================================

export default function NavbarFlyoutDrawer() {

  // --------------------------------------------

  // -used to not open twice if already open and user clicks another navlink
  const [drawer_open, setDrawerOpen] = useState(false);
  const [active_panel, setActivePanel] = useState(0);
  const panel_refs = useRef([]);

  // --------------------------------------------

  const changePanel = (idx) => {

    disableClick();
    setActivePanel(idx);

    const duration = 0.3;

    panel_refs.current.forEach((ref, i) => {
      if (i !== idx) { // place all other panels in back
        gsap.to(ref, { 
          opacity: 0, 
          onStart: () => ref.style.pointEvents = 'none', // don't want to be able to click links in non-active panels
          duration,
        });
      }
    });

    const ref = panel_refs.current[idx];
    gsap.to(ref, { // bring current panel to front
      opacity: 1,
      onStart: () => ref.style.display = 'grid', // only render non default active panel 1st time if user opens it => lazy load (no reason to display: 'none' after first render here)
      onComplete: () => {
        ref.style.pointerEvents = 'auto'; // allow clicking of links in active panel
        enableClick();
      },
      duration,
    });

  };

  // --------------------------------------------

  openDrawer = (idx) => {

    console.log('openDrawer()');

    if (active_panel !== idx) // Panel other than currently active panel clicked => set active_panel = idx
      changePanel(idx);

    if (!drawer_open) { // drawer is not open => open it

      setDrawerOpen(true);
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
    }
  };

  // --------------------------------------------

  closeDrawer = () => {
    setDrawerOpen(false);
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
        // border: 'dashed hotpink 1px',
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
          top: header_height,
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

        <DrawerContents {...{active_panel, panel_refs}} />

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