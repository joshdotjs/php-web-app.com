import React, { useState, useRef, createContext } from 'react';
import { gsap } from 'gsap';

import { MantineProvider, Notification } from '@mantine/core';
import { 
  NotificationsProvider, 
  showNotification, 
  updateNotification, 
  cleanNotifications 
} from '@mantine/notifications';

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

  const startLoading = ({title, message}) => {

    const ref = overlay_ref.current;
    ref.style.display = 'flex';
    gsap.to(ref, { 
      opacity: 1, 
      duration: 0.3,
      onStart: () => {
        document.body.style.overflow = "hidden"; // don't scroll stuff underneath the modal

        showNotification({
          id: 'loading-notification',
          // loading: true,
          title,
          message,
          autoClose: false,
          disallowClose: true,
          styles: { 
            icon: { 
              borderRadius: 0,
           }},
          // color: 'dark',
          icon: (
            <lottie-player 
              // id="lottie-player-1" 
              src="/ae/adobe-loading-animation--rounded-7dot-5px--dark.json"
              background="transparent"
              speed="1"
              loop  
              autoplay
            >
            </lottie-player>
          )
        });
      },
    });
  };

  // --------------------------------------------

  const stopLoading = () => {

    updateNotification({
      id: 'auth-notification',
      color: 'teal',
      title: 'Success!',
      message: 'You are now logged in',
      icon:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      ,
      autoClose: 1000,
      onClose: () => {
        const ref = overlay_ref.current;
        gsap.to(ref, { 
          opacity: 0,
           duration: 0.3, 
           onComplete: () => {
            ref.style.display = 'none';
            document.body.style.overflow = "overlay"; // custom scrollbar overlay
          }});
      }
    });
  };

  // --------------------------------------------

  const context = {
    overlay_ref,
    startLoading,
    stopLoading,
  };

  // --------------------------------------------

  return (
    <LoadingContext.Provider value={context}>     
      <MantineProvider 
        theme={{ 
          colorScheme: 'light',
          loader: 'dots', // 'oval' | 'bars' | 'dots'
          colors: {
            blue: [
              "","","","","","",
              "transparent",
            ],
          }
        }} 
      > 
        <NotificationsProvider>
          {/* <Notification /> */}
          { children }
        </NotificationsProvider>
      </MantineProvider>
    </LoadingContext.Provider>
  );

  // --------------------------------------------
};

// ==============================================

export default LoadingContext;
export { LoadingContextProvider };