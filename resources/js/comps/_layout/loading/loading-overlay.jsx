import React, { useRef, useContext } from 'react';
import { createPortal } from 'react-dom';

import { gsap } from 'gsap';

// import LoadingContext from '@/context/loading-ctx.jsx';


import { showNotify, updateNotify } from '@/comps/_layout/notify/notify';
import { lr, lg } from '@/util/log';

// ==============================================

let startLoading, stopLoading;

// ==============================================

export default function LoadingOverlay() {

  // --------------------------------------------

  // const { overlay_ref } = useContext(LoadingContext);
  const overlay_ref = useRef(null);

  // --------------------------------------------

  const portal_root = document.querySelector('#portal-loading');

  // --------------------------------------------

  startLoading = () => {
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

  stopLoading = (onComplete=()=>{}) => {
    const ref = overlay_ref.current;
    gsap.to(ref, { 
      opacity: 0,
        duration: 0.3, 
        onComplete: () => {
          ref.style.display = 'none';
          document.body.style.overflow = "overlay"; // custom scrollbar overlay
          onComplete();
      }});
  };

  // --------------------------------------------

  return createPortal(
    <div // Blur Overlay
      ref={overlay_ref}
      className="pointer-events-auto fixed inset-0"
      style={{ 
        display: 'none', 
        opacity: 0,
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(5px)', // I think this is not animating the blur!  I think a single blur is computed and then the opacity on it is animated - which is efficient.  I think animating a blur causes a diffrent blur to be computed for each frame of the animation with each one slightly more blurred than the previous.
        WebkitBackdropFilter: 'blur(5px)',
        zIndex: '100',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >  
      <div
        style={{
          height: '200px',
          width: '200px',
          marginTop: '-100px',
        }}
      >
        <lottie-player 
          id="lottie-player-1" 
          src="/ae/adobe-loading-animation--rounded-7dot5px.json"
          background="transparent"
          speed="1"
          loop  
          autoplay
        >
        </lottie-player>
      </div>
    </div>    
    ,
    portal_root
  );

  // --------------------------------------------
};

// ==============================================

export { startLoading, stopLoading };