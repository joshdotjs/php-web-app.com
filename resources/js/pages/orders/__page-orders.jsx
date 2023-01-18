// resources/js/App.jsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { ContextProvider } from '../../context/context';
import { CartContextProvider } from '../../context/cart-ctx';

import Header from '../../comps/header/_header';
import Cart from '../../comps/cart/_cart';
// import Button from '../../comps/button/button';
import Orders from './_orders';

// ==============================================

function Page({ orders_SSR, user_SSR }) {

  console.log('user_SSR: ', user_SSR);
  console.log('orders_SSR: ', orders_SSR);
  
  // --------------------------------------------

  return(
    <>

      <Header />

      <Cart />

      <main id="page">

        <Orders orders={orders_SSR} user={user_SSR} />

      </main>

    </>
  );
}

// ==============================================

const root = document.querySelector('#react-root--orders-page');
if(root){
  window.API_URL = root.dataset.apiUrl;

  const orders_SSR  = JSON.parse(root.dataset.orders);
  const user_SSR = JSON.parse(root.dataset.user);

  createRoot(root).render(
    <ContextProvider>
      <CartContextProvider>
        <Page { ...{ orders_SSR, user_SSR } } />
      </CartContextProvider>
    </ContextProvider>
  );
}

// ==============================================


