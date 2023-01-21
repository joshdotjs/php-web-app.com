import React from 'react';

export default function CartIcon() {

  return (
    <svg 
      className="icon" 
      style={{  
        width: '1.5em',
        height: '1.5em',
        color: 'black',
      }}
      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentcolor" viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none"></rect>
      <path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
      <circle cx="80" cy="204" r="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
      <circle cx="184" cy="204" r="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
      <path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
    </svg>
  );

}