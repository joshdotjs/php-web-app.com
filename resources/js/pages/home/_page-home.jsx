// resources/js/App.jsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { CartContextProvider } from '../../context/cart-ctx';

import Header from '../../comps/header/_header';
import Cart from '../../comps/cart/_cart';
// import Button from '../../comps/button/button';

// import { fetchGET, fetchPOST } from '../../util/fetch';

// ==============================================

function Page() {

  // --------------------------------------------

  return(
    <>

      <Header />

      <Cart />

      <main>

        Home Page

      </main>

    </>
  );
}

// ==============================================

const root = document.querySelector('#react-root--home-page');
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