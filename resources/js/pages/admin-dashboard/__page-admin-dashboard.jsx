// resources/js/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '../../comps/_layout/layout';

import AdminDashboard from './_admin-dashboard';

// ==============================================

function Page({ user_SSR }) {

  // --------------------------------------------

  return(
    <Layout>
      <AdminDashboard user={user_SSR} />
    </Layout>
  );
}

// ==============================================

const root = document.querySelector('#react-root--admin-dashboard-page');
if(root){
  const user_SSR  = JSON.parse(root.dataset.user);
  createRoot(root).render(
    <Page { ...{ user_SSR } } />
  );
}

// ==============================================


