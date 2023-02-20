import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { AuthContextProvider } from "@/context/auth-ctx";
import { CartContextProvider } from "@/context/cart-ctx";

import Header from './header';
import Footer from './footer';
import LoadingOverlay from "./loading/loading-overlay";
import Notifications from "./notify/notify";

import './_layout.scss';

// ==============================================

export default function Layout({ children, name, restrict, gutter='gutter' }) {

  // --------------------------------------------

  return (
    <Notifications>
      <AuthContextProvider { ...{ restrict } }>
        <CartContextProvider>

            <Header />

            <main id="page" className={`${name} ${gutter}`}>
              <div className='gutter'>
                {children}
              </div>
            </main> 

            <Footer />

            <LoadingOverlay />

        </CartContextProvider>
      </AuthContextProvider>
    </Notifications>
  );

  // --------------------------------------------

}

// ==============================================

const getElem   = (str) => document.querySelector(str)
const getHeight = (el)  => el.offsetHeight; 
const setStyle  = (el, {property, value }) => el.style[property] = value;

// ==========================================

const pageLoadAnim = () => {
  const body = getElem('body');
  gsap.to(body, { opacity: 1, delay: 0.525, duration: 0.75 });
};
pageLoadAnim();

// ==========================================