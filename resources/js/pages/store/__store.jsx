import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';

import Page from './_store';

import './__store.scss';

// ==============================================

const main_root = document.querySelector('#root-main');
if(main_root){

  window.API_URL_NODE         = main_root.dataset.apiUrlNode;
  window.API_URL_LARAVEL = main_root.dataset.apiUrlLaravel;
  const products_SSR  = JSON.parse(main_root.dataset.products); // encodes variants
  main_root.removeAttribute('data-products');

  createRoot(main_root).render(
    <Layout name="store">
      <Page products={products_SSR} />
    </Layout>
  );
}

// ==============================================