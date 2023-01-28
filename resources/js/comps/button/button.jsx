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
      style={{
        background: 'black',
        color: 'white',
        padding: '1rem',
        width: '100%',
        borderRadius: '100vmax',
        fontWeight: '500',
        fontSize: '1.1rem'
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// ==============================================
