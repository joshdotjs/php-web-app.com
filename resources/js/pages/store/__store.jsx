import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/layout';
import Page from './_store.jsx';

// ==============================================

const root = document.querySelector('#react-root--products-page');
if(root){
  window.API_URL         = root.dataset.apiUrl;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  const products_SSR  = JSON.parse(root.dataset.products); 

  createRoot(root).render(
    <Layout>
      <Page products={products_SSR} />
    </Layout>
  );
}

// ==============================================