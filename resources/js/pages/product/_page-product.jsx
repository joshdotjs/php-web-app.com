// resources/js/App.jsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { ContextProvider } from '../../context/context';
import { CartContextProvider } from '../../context/cart-ctx';

import Header from '../../comps/header/_header';
import Cart from '../../comps/cart/_cart';
// import Button from '../../comps/button/button';
import Product from './product';

// ==============================================

function Page({ product_SSR, variants_SSR }) {

  console.log('variants_SSR: ', variants_SSR);
  console.log('product_SSR: ', product_SSR);

  // --------------------------------------------

  return(
    <>

      <Header />

      {/* <Cart { ...{ cart, removeFromCart } } /> */}
      <Cart />

      <main>

        {/* <Product { ...{ product, variants, addToCart } } /> */}
        {/* <Product { ...{ product, variants } } /> */}
        <Product product={product_SSR[0]} variants={variants_SSR} />

      </main>

    </>
  );
}

// ==============================================

const root = document.querySelector('#react-root--product-page');
if(root){
  window.API_URL = root.dataset.apiUrl;

  const product_SSR  = JSON.parse(root.dataset.product);
  const variants_SSR = JSON.parse(root.dataset.variants);

  createRoot(root).render(
    <ContextProvider>
      <CartContextProvider>
        <Page { ...{ product_SSR, variants_SSR } } />
      </CartContextProvider>
    </ContextProvider>
  );
}

// ==============================================


