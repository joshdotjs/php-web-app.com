import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';
import Page from './_about';

import './__about.scss';

// ==============================================

const root = document.querySelector('#react-root--home-about-page');
if(root){
  window.API_URL_NODE         = root.dataset.apiUrlNode;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  createRoot(root).render(
    <Layout name="about">
      <Page />
    </Layout>
  );
}

// ==============================================