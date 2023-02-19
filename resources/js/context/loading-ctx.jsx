import React, { useState, useRef, createContext } from 'react';
import { gsap } from 'gsap';
import { fireEvent } from '@/util/events';

// ==============================================

const LoadingContext = createContext({
  startLoading: function() {},
  stopLoading: function() {},
});

// ==============================================

const LoadingContextProvider = ({ children }) => {

  // --------------------------------------------

  const overlay_ref = useRef(null);

  // --------------------------------------------

  const startLoading = () => {

    fireEvent('loading-animation-start');

    const ref = overlay_ref.current;
    ref.style.display = 'flex';
    gsap.to(ref, { 
      opacity: 1, 
      duration: 0.3,
      onStart: () => {
        document.body.style.overflow = "hidden"; // don't scroll stuff underneath the modal
      },
    });
  };

  // --------------------------------------------

  const stopLoading = () => {
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

  const context = {
    overlay_ref,
    startLoading,
    stopLoading,
  };

  // --------------------------------------------

  return (
    <LoadingContext.Provider value={context}>{ children }</LoadingContext.Provider>
  );

  // --------------------------------------------
};

// ==============================================

export default LoadingContext;
export { LoadingContextProvider };