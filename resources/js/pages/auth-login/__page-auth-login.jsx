// resources/js/App.jsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { CartContextProvider } from '../../context/cart-ctx';

import Header from '../../comps/header/_header';
import Cart from '../../comps/cart/_cart';

import AuthLogin from './_auth-login';

// ==============================================

function Page() {

  // --------------------------------------------

  return(
    <>

      <Header />

      {/* <Cart { ...{ cart, removeFromCart } } /> */}
      <Cart />

      <main id="page">

        <AuthLogin />

      </main>

    </>
  );
}

// ==============================================

const root = document.querySelector('#react-root--auth-login-page');
if(root){
  window.API_URL = root.dataset.apiUrl;

  createRoot(root).render(
    <CartContextProvider>
      <Page />
    </CartContextProvider>
  );
}

// ==============================================


