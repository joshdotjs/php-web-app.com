import React, { useEffect, useState, useRef, useContext } from 'react';

import Button from '../../comps/button/button';

import { lo, lg, lr, lb, ly } from '../../util/log';
import { fetchGET, fetchPOST, fetchPOST2 } from '../../util/fetch';
import { redirect } from '../../util/routes';
// import { 
//   getCartLS, setCartLS, 
// } from '../../util/local-storage';
// import { fireEvent } from '../../util/custom-event';

import '.scss';

// ==============================================

export default function AuthLogin () {


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

    const [data, error] = await fetchPOST2({ url: 'http://127.0.0.1:8000/api/login', 
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
      redirect('/');
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
