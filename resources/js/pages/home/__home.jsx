import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';
import Page from './_home';

// ==============================================

const root = document.querySelector('#react-root--home-page');
if(root){
  window.API_URL_NODE = root.dataset.apiUrlNode;
  createRoot(root).render(
    <Layout name="home" gutter="no-gutter">
      <Page />
    </Layout>
  );
}

// ==============================================