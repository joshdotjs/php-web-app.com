import React, { useState, createContext, useEffect } from 'react';

import { getLS, setLS, removeLS } from '../util/local-storage';
import { fetchGET } from '../util/fetch';

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
  };

  // --------------------------------------------
  
  const logOut = () => {
    setToken(null);
    removeLS('token');

    setUser(user);
    removeLS('user');

    setLoggedIn(false);
    removeLS('logged_in');

    // DO I NEED TO LOG OUT ON THE SERVER?
    // DO I NEED TO LOG OUT ON THE SERVER?
    // DO I NEED TO LOG OUT ON THE SERVER?
    // DO I NEED TO LOG OUT ON THE SERVER?
    // DO I NEED TO LOG OUT ON THE SERVER?
    // DO I NEED TO LOG OUT ON THE SERVER?

    // -Specifically, how do I use auth middleware to ensure the user is an admin?
    // -Specifically, how do I use auth middleware to ensure the user is an admin?
    // -Specifically, how do I use auth middleware to ensure the user is an admin?
    // -Specifically, how do I use auth middleware to ensure the user is an admin?
    // -Specifically, how do I use auth middleware to ensure the user is an admin?
    // -Specifically, how do I use auth middleware to ensure the user is an admin?

    // -There must be user data encoded in the token.
    // -There must be user data encoded in the token.
    // -There must be user data encoded in the token.
    // -There must be user data encoded in the token.

    // -If so, then no need for logging out.

    // -Yes, Token is created as $user->createToken(...)
    //  => Encodes user info.
    //  => Auth middleware work via this encoded data!


    // -TODO:
    //  --Add POLICY to Admin to 

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