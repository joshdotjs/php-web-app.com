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

  const ref = useRef(null);

  // --------------------------------------------

  useEffect(() => {


    const page = ref.current;
    const blur_overlay = page.querySelector('#blur-overlay');
    console.log('blur_overlay: ', blur_overlay);

    const duration = 0.5;
    gsap.to(page, { opacity: 1, scale: 1, duration });

    gsap.to(blur_overlay, { opacity: 0, duration, onComplete: () => blur_overlay.remove() });

  }, []);

  // --------------------------------------------

  return (

    <AuthContextProvider { ...{ restrict } }>
      <CartContextProvider>

        

        <Cart />

        <Notifications />

        <main id="page" className={name} ref={ref} style={{ opacity: 0, position: 'relative', transform: 'scale(1.01)', background: 'black' }}>

          <Header />

          {children}

          <div id="blur-overlay" style={{ 
            // backdropFilter: 'blur(10px)', 
            // background: 'rgba(0, 0, 0, 0.5)', 
            backdropFilter: 'blur(10px) saturate(180%)',
            // '-webkit-backdrop-filter': 'blur(10px) saturate(180%)',
            WebkitBackdropFilter: 'blur(10px) saturate(180%)',
            // backgroundColor: 'rgba(17, 25, 40, 0.75)',
            // border: '1px solid rgba(255, 255, 255, 0.125)',
            // color: 'white',
            // marginTop: '-1px', 
            position: 'fixed', 
            height: '100vh',
            width: '100vw',
            top: 0,
            left: 0,
            // zIndex: '-1' // offset upwards a little to hide the edge effect (it is very evident between the top and bottom), cover with the top navbar
            }}
          ></div>
        </main> 
      
      </CartContextProvider>
    </AuthContextProvider>
  );

  // --------------------------------------------

}

// ==============================================