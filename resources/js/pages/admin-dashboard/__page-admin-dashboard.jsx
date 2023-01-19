// resources/js/App.jsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { ContextProvider } from '../../context/context';
import { CartContextProvider } from '../../context/cart-ctx';

import Header from '../../comps/header/_header';
// import Cart from '../../comps/cart/_cart';
// import Button from '../../comps/button/button';
import AdminDashboard from './_admin-dashboard';

// ==============================================

function Page({ user_SSR }) {

  // --------------------------------------------

  return(
    <>

      <Header />

      {/* <Cart /> */}

      <main id="page">

        <AdminDashboard user={user_SSR} />

      </main>

    </>
  );
}

// ==============================================

const root = document.querySelector('#react-root--admin-dashboard-page');
if(root){

  const user_SSR  = JSON.parse(root.dataset.user);

  createRoot(root).render(
    <ContextProvider>
      <CartContextProvider>
        <Page { ...{ user_SSR } } />
      </CartContextProvider>
    </ContextProvider>
  );

}

// ==============================================


