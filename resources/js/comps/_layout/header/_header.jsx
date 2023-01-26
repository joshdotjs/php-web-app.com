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
        
        <li>
          <a href="/store">Store</a>
        </li>

        {
          logged_in 
          ? 
            (
              <>
                <li onClick={logOut}>
                  Log out
                </li>

                <li>
                  <a href="/admin-dashboard">{user?.email}</a>
                </li>
              </>
            )
          : 
            (
              <>
                <li>
                  <a href="/auth/register">Register</a>
                </li>

                <li>
                  <a href="/auth/login">Log in</a>
                </li>
              </>
            )
        }




      </nav>

    </header>
  );
};

// ==============================================
