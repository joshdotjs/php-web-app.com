import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';
import Page from "./_auth";

// ==============================================

const root = document.querySelector('#react-root--auth-page');
if(root){
  const auth_type = root.dataset.authType;
  window.API_URL_NODE    = root.dataset.apiUrlNode;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;

  createRoot(root).render(
    <Layout>
      <Page {...{auth_type}} />
    </Layout>
  );
}

// ==============================================