// resources/js/App.jsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { CartContextProvider } from '../../context/cart-ctx';

import Header from '../../comps/header/_header';
import Cart from '../../comps/cart/_cart';
// import Button from '../../comps/button/button';
import Products from './products';

import { fetchGET, fetchPOST } from '../../util/fetch';

// ==============================================

function Page({ products_SSR }) {

  // --------------------------------------------

  // const [products, setProducts] = useState([]);
  //
  // useEffect(() => {
  //   (async () => {
  //
  //     const data = await fetchGET('/products');
  //     console.log('data: ', data);
  //
  //     setProducts(data);
  //
  //   })();
  // }, []);

  // --------------------------------------------

  return(
    <>

      <Header />

      <Cart />

      <main>

        <Products products={products_SSR} />

      </main>

    </>
  );
}

// ==============================================

const root = document.querySelector('#react-root--products-page');
if(root){

  window.API_URL = root.dataset.apiUrl;
  
  const products_SSR  = JSON.parse(root.dataset.products); 

  createRoot(root).render(
    <CartContextProvider>
      <Page { ...{ products_SSR } } />
    </CartContextProvider>
  );
}

// ==============================================