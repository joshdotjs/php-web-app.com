import React, { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import './chevron-anim.scss';

export default function ChevronAnim() {

  // --------------------------------------------
  
  const [is_up, setIsUp] = useState(true);

  const ref = useRef(null);
  const tl = useRef();
  const square = useRef(null);
  
  // --------------------------------------------

  const up = 'chevron-anim__arrow-up';

  // --------------------------------------------

  const [height, setHeight] = useState();

  useLayoutEffect(() => {

    const container_height = ref.current.offsetHeight;
    const square_height = square.current.offsetHeight;
    setHeight(container_height + square_height);
  }, []);

  // --------------------------------------------

  const handler = () => {
    setIsUp(prev => {
      const new_state = !prev;
      if (is_up) {
        if (tl.current)
          tl.current.revert();
        tl.current = gsap.to(ref.current, { height: 'auto' });
      } else {
        tl.current?.reverse();
      }
      return new_state;
    });
  };

  // --------------------------------------------

  return (

    <div 
      ref={ref}
      className="chevron-anim"
      onClick={handler}
      style={{
        height: `${height}px`,
      }}
    >
      <div className="chevron-anim__title">
        <h5>Category</h5>
        <svg 
          className={`chevron-anim__arrow ${is_up ? up : ''}`}
          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
          >
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>

      <div ref={square} style={{ height: '100px', border: 'solid black 1px', width: '100%', position: 'absolute' }}>

      </div>
    </div>

  );
}