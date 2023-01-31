import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

import './chevron-anim.scss';

export default function ChevronAnim({children, title, num, filter, idx}) {

  // --------------------------------------------
  
  const [is_up, setIsUp] = useState(true);

  const ref = useRef(null);
  // const tl = useRef();
  const square = useRef(null);
  
  // --------------------------------------------

  const up = 'chevron-anim__title__arrow-up';

  // --------------------------------------------

  const open = () => {
    if (filter.tl_refs.current[idx])
      filter.tl_refs.current[idx].revert();

    const el = ref.current;
    filter.tl_refs.current[idx] = gsap.to(el, { height: '40px', duration: 0.3 });
  };

  // --------------------------------------------

  const close = () => {
    // tl.current?.reverse();
    filter.tl_refs.current[idx]?.reverse();
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
      // ref={el => filter.refs.current[idx] = el}
      ref={ref}
      className="chevron-anim"      
    >
      <div 
        className="chevron-anim__title"
        onClick={handler}
      >
        <h5>{title} {' '} {num > 0 ? `(${num})` : ''}</h5>
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