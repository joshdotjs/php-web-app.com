import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

import ChevronDownSVG from '@/comps/svg/chevron-down';

import './chevron-anim.scss';

// ==============================================

export default function ChevronAnim({children, title, num, set}) {

  // --------------------------------------------
  
  const [is_up, setIsUp] = useState(true);

  const ref = useRef(null);
  const tl = useRef();
  const square = useRef(null);
  
  // --------------------------------------------

  const up = 'chevron-anim__title__arrow-up';

  // --------------------------------------------

  const open = () => {
    if (tl.current)
      tl.current.revert();
    tl.current = gsap.to(ref.current, { height: '40px' });
  };

  // --------------------------------------------

  const close = () => {
    tl.current?.reverse();
  };

  // --------------------------------------------

  const handler = () => {
    setIsUp((is_up) => {
      if (is_up) {
        open();
      } else {
        close();
      }
      return !is_up;
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
        <h5>{title} {' '} {num > 0 ? `(${num})` : ''}</h5>
        <ChevronDownSVG classes={`chevron-anim__title__arrow ${is_up ? up : ''}`} />
      </div>

      <div className="square" ref={square}>
        {children}
      </div>

    </div>
  );
}