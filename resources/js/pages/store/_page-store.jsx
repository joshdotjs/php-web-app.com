// resources/js/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '../../comps/_layout/layout';
import Products from './products';

// ==============================================

function Page({ products_SSR }) {

  // --------------------------------------------

  return(
    <Layout>
      <Products products={products_SSR} />
    </Layout>
  );

  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--products-page');
if(root){
  window.API_URL = root.dataset.apiUrl; 
  const products_SSR  = JSON.parse(root.dataset.products); 
  createRoot(root).render(
      <Page { ...{ products_SSR } } />
  );
}

// ==============================================