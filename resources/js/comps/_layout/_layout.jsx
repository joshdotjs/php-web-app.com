import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { AuthContextProvider } from "@/context/auth-ctx";
import { CartContextProvider } from "@/context/cart-ctx";

import Header from './Header';
import Cart from './Cart';
import Notifications from './notify/notify';

import './_layout.scss';

// ==============================================

export default function Layout({ children, name, restrict }) {

  // --------------------------------------------

  const layout_ref = useRef(null);
  const header_ref = useRef(null);
  const blur_ref = useRef(null);

  // --------------------------------------------

  useEffect(() => {


    const layout = layout_ref.current;
    const blur_overlay = blur_ref.current;
    const header = header_ref.current;
    // console.log('blur_overlay: ', blur_overlay);
    // console.log('header: ', header);

    const delay = 0.125;
    const tl = gsap.timeline();

    // tl.to(layout, { 
    //     opacity: 1, 
    //     duration: 0.25,
    //     delay,
    //   }, 
    // );
    // tl.to(blur_overlay, { 
    //     opacity: 0, 
    //     duration: 0.75, 
    //     onComplete: () => blur_overlay.remove() 
    //   },
    //   // "<="
    // );
    tl.to(layout, { opacity: 1, scale: 1, duration: 0.5, delay }, '<=');
    // gsap.to(header, { opacity: 1, duration: 1 });

  }, []);

  // --------------------------------------------

  return (
    <AuthContextProvider { ...{ restrict } }>
      <CartContextProvider>
        <div 
          id="layout" 
          ref={layout_ref} 
          style={{ opacity: 0, transform: 'scale(1.015)', transformOrigin: 'center' }}
        >

          <Cart />

          {/* <Notifications /> */}

          <Header { ...{ header_ref } } />

          <main id="page" className={`${name}`}>
            <div className="gutter">
              {children}
            </div>
          </main> 

          {/* <div 
            id="blur-overlay" 
            ref={blur_ref}
            style={{ 
              backdropFilter: 'blur(10px)', 
              // background: 'rgba(0, 0, 0, 0.5)', 
              // backdropFilter: 'blur(10px) saturate(180%)',
              // '-webkit-backdrop-filter': 'blur(10px) saturate(180%)',
              WebkitBackdropFilter: 'blur(10px) saturate(180%)',
              // backgroundColor: 'rgba(17, 25, 40, 0.75)',
              position: 'fixed', 
              height: '100vh',
              width: '100vw',
              top: 0,
              left: 0,
              zIndex: 10,
            }}
          ></div> */}

          <footer>
            <p>footer</p>
          </footer>
        
        </div>
      </CartContextProvider>
    </AuthContextProvider>
  );

  // --------------------------------------------

}

// ==============================================