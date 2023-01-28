import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';

import MainApp from './app-main/App';
import HeaderApp from './app-header/App';

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

const header_root = document.querySelector('#root-header');
if(header_root){
  createRoot(header_root).render(<HeaderApp />);
}

// ==============================================