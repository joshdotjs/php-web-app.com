import React, { useState, createContext } from 'react';

// ==============================================

const AuthContext = createContext({
  user: {},
  setUser: () => {},
  token: '',
  setToken: () => {},
});

// ==============================================

const AuthContextProvider = ({ children }) => {

  const [user, setUser]   = useState({});
  const [token, setToken] = useState('');

  const context = {
    user,  setUser,
    token, setToken,
  };

  return (
    <AuthContext.Provider value={context}>{ children }</AuthContext.Provider>
  );

};

// ==============================================

export default AuthContext;
export { AuthContextProvider };