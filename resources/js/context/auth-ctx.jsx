import React, { useState, createContext, useEffect } from 'react';

import { getLS, setLS, removeLS } from '../util/local-storage';
// import { fetchGET } from '../util/fetch';
import { redirect } from '../util/routes';

// ==============================================

const AuthContext = createContext({
  user: {},
  setUser: () => {},
  token: '',
  setToken: () => {},
  logged_in: false,
  logOut: () => {},
  logIn: () => {},
});

// ==============================================

function AuthContextProvider ({ children }) {

  // --------------------------------------------

  const [user, setUser]          = useState({});
  const [token, setToken]        = useState('');
  const [logged_in, setLoggedIn] = useState(false);
  
  // --------------------------------------------

  // -Load data from LS on page load
  console.log('auch context');
  useEffect(() => {

    console.log('(auth-ctx.js) page load useEffect...');

    const logged_in = getLS('logged_in');
    if (logged_in) {
      setLoggedIn(logged_in);
      setToken(getLS('token'));
      setUser(getLS('user'));
    }
  }, []);

  // --------------------------------------------

  const logIn = ({token, user}) => {

    console.log('logging user in');

    setToken(token);
    setLS('token', token);

    setUser(user);
    setLS('user', user);

    setLoggedIn(true);
    setLS('logged_in', true);

    if (user.is_admin)
      redirect('/admin-dashboard');
    else
      redirect('/orders');
  };

  // --------------------------------------------
  
  const logOut = () => {
    setToken(null);
    removeLS('token');

    setUser(user);
    removeLS('user');

    setLoggedIn(false);
    removeLS('logged_in');

    redirect('/');
  };
  
  // --------------------------------------------
  
  const context = {
    user,
    token,
    logged_in,
    logIn,
    logOut,
  };
  
  // --------------------------------------------
  
  return (
    <AuthContext.Provider value={context}>{ children }</AuthContext.Provider>
  );
  
  // --------------------------------------------

}

// ==============================================

export default AuthContext;
export { AuthContextProvider };