import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/layout';

import MainApp from './app-main/App';
import CartApp from './app-cart/App';

import './.scss';

// ==============================================

const main_root = document.querySelector('#root-main');
if(main_root){

  window.API_URL         = main_root.dataset.apiUrl;
  window.API_URL_LARAVEL = main_root.dataset.apiUrlLaravel;
  const products_SSR  = JSON.parse(main_root.dataset.products); // encodes variants

  createRoot(main_root).render(
    <Layout>
      <MainApp products={products_SSR} />
    </Layout>
  );
}

// ==============================================

const cart_root = document.querySelector('#root-header'); // TODO: Change to #root-cart
if(cart_root){
  createRoot(cart_root).render(<CartApp />);
}

// ==============================================