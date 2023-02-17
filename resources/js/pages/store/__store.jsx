import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';
import Page from './_store';

import './__store.scss';

// ==============================================

const main_root = document.querySelector('#react-root-store');
if(main_root){

  // console.log('main_root.dataset: ', main_root.dataset);

  const API_URL_NODE = main_root.dataset.apiUrlNode;
  // console.log('API_URL_NODE: ', API_URL_NODE);

  window.API_URL_NODE      = main_root.dataset.apiUrlNode;
  window.API_URL_LARAVEL   = main_root.dataset.apiUrlLaravel;
  window.PRODUCTS_PER_PAGE = 6;
  const products_SSR       = JSON.parse(main_root.dataset.products); // encodes variants
  main_root.removeAttribute('data-products');
  const num_products_SSR = main_root.dataset.numProducts;

  createRoot(main_root).render(
    // <StrictMode>
      <Layout name="store">
        <Page {...{products_SSR, num_products_SSR}} />
      </Layout>
    // </StrictMode>
  );
}

// ==============================================