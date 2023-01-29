import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { AuthContextProvider } from "@/context/auth-ctx";
import { CartContextProvider } from "@/context/cart-ctx";

import Header from './Header';
import Cart from './Cart';
import Notifications from './notify/notify';

// ==============================================

export default function Layout({ children, name, restrict }) {

  // --------------------------------------------

  const page_ref = useRef(null);
  const header_ref = useRef(null);
  const blur_ref = useRef(null);

  // --------------------------------------------

  useEffect(() => {


    const page = page_ref.current;
    const blur_overlay = blur_ref.current;
    const header = header_ref.current;
    console.log('blur_overlay: ', blur_overlay);
    console.log('header: ', header);

    const duration = 0.5;
    const delay = 0.125;
    gsap.to(page, { opacity: 1, scale: 1, duration, delay });
    gsap.to(blur_overlay, { opacity: 0, duration, delay, onComplete: () => blur_overlay.remove() });
    // gsap.to(header, { opacity: 1, duration: 1 });

  }, []);

  // --------------------------------------------

  return (

    <AuthContextProvider { ...{ restrict } }>
      <CartContextProvider>

        <Cart />

        <Notifications />

        <Header { ...{ header_ref } } />

        <main id="page" className={name} ref={page_ref} style={{ opacity: 0, transform: 'scale(1.005)', background: 'black' }}>
          {children}
        </main> 

        <div 
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
        ></div>
      
      </CartContextProvider>
    </AuthContextProvider>
  );

  // --------------------------------------------

}

// ==============================================