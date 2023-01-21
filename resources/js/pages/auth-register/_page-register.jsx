// resources/js/App.jsx
import React, {  useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import { CartContextProvider } from '@/context/cart-ctx';

import Header from '@/comps/header/_header';
import Cart from '@/comps/cart/_cart';
import Button from '@/comps/button/button';

import { fetchGET, fetchPOST } from '@/util/fetch';

// ==============================================

function Page() {

  // --------------------------------------------

  const email_ref = useRef();
  const password_ref = useRef();

  // --------------------------------------------

  const handler = async () => {
    const email = email_ref.current.value;
    const password = password_ref.current.value;

    const data = await fetchPOST({ url: '/register', body: {
      email,
      password,
    } });
    // const data = await fetchGET('/register');

    console.log('data: ', data);

  };

  // --------------------------------------------

  return(
    <>

      <Header />

      <Cart />

      <main className="text-black">

        <h2>
          Auth Register Page
        </h2>

        <label htmlFor="email">Email: </label>
        <input id="email" ref={email_ref} />

        <label htmlFor="password">Password: </label>
        <input id="password" ref={password_ref} />

        <Button onClick={handler}>Submit</Button>

      </main>

    </>
  );
}

// ==============================================

const root = document.querySelector('#react-root--auth-register-page');
if(root){

  const API_URL = root.dataset.apiUrl;
  // console.log('api_url: ', API_URL);
  window.API_URL = API_URL;

  createRoot(root).render(
    <CartContextProvider>
      <Page />
    </CartContextProvider>
    );
}

// ==============================================