import React from "react";

// ==============================================

export default function Button({ children, onClick, disabled=false, classes, width=null }) {
  return (
    <button
      type="button"
      onClick={onClick}
      // className={`
      //   inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm 
      //   ${disabled ? 'opacity-50' : 'hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'}
      //   ${classes}
      // `}
      
      className={`
        ${disabled ? 'opacity-50' : ''}
        ${classes}
        text-sm md:text-md
        p-2 md:p-3
      `}
      
      style={{
        background: 'black',
        color: 'white',
        // padding: '0.75rem',
        width: '100%',
        borderRadius: '100vmax',
        fontWeight: '500',
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// ==============================================
