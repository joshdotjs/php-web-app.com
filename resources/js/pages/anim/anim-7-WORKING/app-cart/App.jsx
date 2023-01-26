import React from 'react';
import Cart from "./Cart";

// ==============================================

export default function App() {    
  return (
    <div 
      id="app-header"
      style={{ position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 10,
      }}
    >

      <Cart />

    </div>
  );
}

// ==============================================

