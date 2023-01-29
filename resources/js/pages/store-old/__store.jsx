import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';
import Page from './_store.jsx.jsx';

// ==============================================

const root = document.querySelector('#react-root--products-page');
if(root){
  window.API_URL_NODE         = root.dataset.apiUrl;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  const products_SSR  = JSON.parse(root.dataset.products); 

  createRoot(root).render(
    <Layout>
      <Page products={products_SSR} />
    </Layout>
  );
}

// ==============================================