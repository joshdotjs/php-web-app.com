// resources/js/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';
import Page from './_product';

// ==============================================

const root = document.querySelector('#react-root--store-product-page');
if(root){
  window.API_URL_NODE         = root.dataset.apiUrlNode;
  window.API_URL_LARAVEL = root.dataset.apiUrlNodeLaravel;
  const product_SSR  = JSON.parse(root.dataset.product);
  const variants_SSR = JSON.parse(root.dataset.variants);
  createRoot(root).render(
    <Layout>
      <Page product={product_SSR[0]} variants={variants_SSR} />
    </Layout>   
  );
}

// ==============================================


