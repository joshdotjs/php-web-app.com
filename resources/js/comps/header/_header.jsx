// resources/js/App.jsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

// ==============================================

export default function Header() {

  return (
    <header className="header">

      <div>
        <a href="/">Logo</a>
      </div>

      <nav>
        <li>
          <a href="/auth-register">Register</a>
        </li>

        <li>
          <a href="/auth-login">Login</a>
        </li>

        <li>
          <a href="/store">Store</a>
        </li>
      </nav>

    </header>
  );
};

// ==============================================

// const root_header = document.querySelector('#react-root--header');
// if(root_header){
//   createRoot(root_header).render(<Header />);
// }

// ==============================================