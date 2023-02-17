import React from 'react';

import './header.scss';

// ==============================================

export default function Header() {

  // --------------------------------------------

  const year = new Date().getFullYear();

  // --------------------------------------------
  
  return (
    <footer className="grid place-items-center text-white">
      <div className="text-center">
        <p className="mb-[0.35rem]">eCommerce Demo by Josh Holloway</p>
        <p className="m-0">Copyright © {year}</p>
      </div>
    </footer>
  );
}

// ==============================================