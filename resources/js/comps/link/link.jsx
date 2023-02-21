import React from 'react';
import { gsap } from 'gsap';

// ==============================================

const redirect = (path /* string */ ) => {

  console.log('redirect()');
  gsap.to(document.body, { 
    opacity: 0,
    onComplete: () => {
      console.log('onComplete()');
      window.location = path;
    },
  });
}

// ==============================================

const Link = ({ href, className, style, onClick=()=>{}, onMouseEnter, onMouseLeave, children }) => {

  return (
    <a 
      // href={href}
      className={className}
      style={{
        ...style,
        cursor: 'pointer',
      }}
      onClick={() => {
        onClick();
        redirect(href);
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

// ==============================================

export { redirect };
export default Link;