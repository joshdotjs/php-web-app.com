// resources/js/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/layout';
import Page from './_product';

// ==============================================

const root = document.querySelector('#react-root--store-product-page');
if(root){
  window.API_URL         = root.dataset.apiUrl;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  const product_SSR  = JSON.parse(root.dataset.product);
  const variants_SSR = JSON.parse(root.dataset.variants);
  createRoot(root).render(
    <Layout>
      <Page product={product_SSR[0]} variants={variants_SSR} />
    </Layout>   
  );
}

// ==============================================


