import React from "react";

// ==============================================

export default function Button({ children, onClick, disabled=false, classes }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm 
        ${disabled ? 'opacity-50' : 'hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'}
        ${classes}
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// ==============================================
