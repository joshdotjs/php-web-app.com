// resources/js/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/layout';
import Product from './product';

// ==============================================

function Page({ product_SSR, variants_SSR }) {

  // --------------------------------------------

  return(
    <Layout>
      <Product product={product_SSR[0]} variants={variants_SSR} />
    </Layout>    
  );
}

// ==============================================

const root = document.querySelector('#react-root--product-page');
if(root){
  window.API_URL = root.dataset.apiUrl;
  const product_SSR  = JSON.parse(root.dataset.product);
  const variants_SSR = JSON.parse(root.dataset.variants);
  createRoot(root).render(
    <Page { ...{ product_SSR, variants_SSR } } />
  );
}

// ==============================================


