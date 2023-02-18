import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';
// import Page from './_login';
import Page from "@/pages/page-auth/_page-auth";

// ==============================================

const root = document.querySelector('#react-root--auth-login-page');
if(root){
  window.API_URL_NODE    = root.dataset.apiUrlNode;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;

  createRoot(root).render(
    <Layout>
      {/* <Page /> */}
      <Page auth_type="login" />
    </Layout>
  );
}

// ==============================================


