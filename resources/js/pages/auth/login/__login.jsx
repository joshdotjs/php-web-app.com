import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/layout';
import Page from './_login';

// ==============================================

const root = document.querySelector('#react-root--auth-login-page');
if(root){
  window.API_URL         = root.dataset.apiUrl;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  createRoot(root).render(
    <Layout>
      <Page />
    </Layout>
  );
}

// ==============================================


