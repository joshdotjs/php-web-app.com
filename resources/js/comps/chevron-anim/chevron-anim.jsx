import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

import './chevron-anim.scss';

export default function ChevronAnim({children}) {

  // --------------------------------------------
  
  const [is_up, setIsUp] = useState(true);

  const ref = useRef(null);
  const tl = useRef();
  const square = useRef(null);
  
  // --------------------------------------------

  const up = 'chevron-anim__title__arrow-up';

  // --------------------------------------------

  const handler = () => {
    setIsUp(prev => {
      const new_state = !prev;
      if (is_up) {
        if (tl.current)
          tl.current.revert();
        // tl.current = gsap.to(ref.current, { height: 'auto' });
        tl.current = gsap.to(ref.current, { height: '40px' });
      } else {
        tl.current?.reverse();
      }
      return new_state;
    });
  };

  // --------------------------------------------

  // useEffect(() => {
  //   setTimeout(() => {
  //     handler();
  //   }, 1e3);
  // }, []);

  // --------------------------------------------

  return (
    <div 
      ref={ref}
      className="chevron-anim"      
    >
      <div 
        className="chevron-anim__title"
        onClick={handler}
      >
        <h5>Category</h5>
        <svg 
          className={`chevron-anim__title__arrow ${is_up ? up : ''}`}
          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
          >
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>

      <div className="square" ref={square}>
        {children}
      </div>

    </div>
  );
}