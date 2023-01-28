// resources/js/App.jsx
import React, { useContext } from 'react';

import AuthContext from '@/context/auth-ctx';

import './.scss';

// ==============================================

export default function Header() {

  // --------------------------------------------

  const { logged_in, user, logOut } = useContext(AuthContext);

  // --------------------------------------------

  return (
    <header className="header">

      <div>
        <a href="/">Logo</a>
      </div>

      <nav>
        





      </nav>

    </header>
  );
};

// ==============================================
