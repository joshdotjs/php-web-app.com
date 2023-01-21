// resources/js/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/layout';

import Orders from './_orders';

// ==============================================

function Page({ orders_SSR, user_SSR }) {
  
  // --------------------------------------------

  return(
    <Layout>
      <Orders orders={orders_SSR} user={user_SSR} />
    </Layout>
  );
}

// ==============================================

const root = document.querySelector('#react-root--orders-page');
if(root){
  window.API_URL = root.dataset.apiUrl;
  const orders_SSR  = JSON.parse(root.dataset.orders);
  const user_SSR = JSON.parse(root.dataset.user);
  createRoot(root).render(
    <Page { ...{ orders_SSR, user_SSR } } />
  );
}

// ==============================================


