import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/layout';
import App from './App';

import './.scss';

// ==============================================

const root = document.querySelector('#root-main--anim-orders');
if(root) {

  window.API_URL         = root.dataset.apiUrl;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  const orders_SSR = JSON.parse(root.dataset.orders);

  createRoot(root).render(
    <Layout name="anim-orders">
      <App orders={orders_SSR} />
    </Layout>
  );
}

// ==============================================