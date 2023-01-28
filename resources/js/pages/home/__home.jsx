import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';
import Page from './_home';
import './.scss';

// ==============================================

const root = document.querySelector('#react-root--home-page');
if(root){
  window.API_URL = root.dataset.apiUrl;
  createRoot(root).render(
    <Layout name="home">
      <Page />
    </Layout>
  );
}

// ==============================================