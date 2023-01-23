import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/layout';

// ==============================================

// import Link from '@/comps/link/link';
import './.scss';

// ==============================================


function Page() {

  // --------------------------------------------

  return(
    <>
      <h1>/admin</h1>
    </>
  );

  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--admin-page');
if(root){
  window.API_URL = root.dataset.apiUrl;
  createRoot(root).render(
    <Layout name="admin" restrict="admin">
    {/* <Layout name="admin"> */}
      <Page />
    </Layout>
  );
}

// ==============================================