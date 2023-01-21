import React, { useEffect, useRef, useContext } from 'react';

import AuthContext from '../../context/auth-ctx';

import Button from '../../comps/button/button';

import { lr } from '../../util/log';
import { fetchPOST2 } from '../../util/fetch';

import '.scss';

// ==============================================

export default function AuthLogin () {

  const { logIn } = useContext(AuthContext);

  // --------------------------------------------

  const email_ref = useRef(null);
  const password_ref = useRef(null);

  useEffect(() => {
    email_ref.current.value = 'josh@josh.com';
    password_ref.current.value = 'josh';
  }, []);

  // --------------------------------------------

  const handler = async () => {
    const email = email_ref.current.value;
    const password = password_ref.current.value;

    // const [data, error] = await fetchPOST2({ url: 'http://127.0.0.1:8000/api/login', 
    const url = `${API_URL_LARAVEL}/api/login`;
    const [data, error] = await fetchPOST2({ url, 
      response_type: 'text',
      body: {
        email,
        password,
      }
    });

    if (error) {
      lr('ERROR');
    }
    if (!error) {
      // console.log('data: ', data);
      // console.log('JSON.parse(data): ', JSON.parse(data));
      const { user, token } = JSON.parse(data);
      console.log('user: ', user);
      logIn({ user, token });
    }

  };

  // --------------------------------------------

  return (
    <>
      <h2>Auth Login Page</h2>

      <label htmlFor="email">Email: </label>
      <input id="email" ref={email_ref} />

      <label htmlFor="password">Password: </label>
      <input id="password" ref={password_ref} />

      <Button onClick={handler}>Submit</Button>
    </>
  );
};

// ==============================================
