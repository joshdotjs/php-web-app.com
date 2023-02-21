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

const Link = ({ href, className, style, children }) => {

  return (
    <a 
      // href={href}
      className={className}
      style={{
        ...style,
        cursor: 'pointer',
      }}
      onClick={() => {
        redirect(href);
      }}
    >
      {children}
    </a>
  );
};

// ==============================================

export { redirect };
export default Link;