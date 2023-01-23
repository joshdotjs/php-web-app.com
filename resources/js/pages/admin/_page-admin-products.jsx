import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/layout';
import CreateProduct from "@/pages/admin/create-product";
// import ModifyProduct from "@/comps/__pages/admin/modify-product";

// ==============================================

// import Link from '@/comps/link/link';
import './.scss';

// ==============================================


function Page() {

  // --------------------------------------------

  return(
    <>
      <h1>/admin/products</h1>

      <CreateProduct />
    </>
  );

  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--admin-products-page');
if(root){
  window.API_URL         = root.dataset.apiUrl;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  createRoot(root).render(
    <Layout name="admin" restrict="admin">
      <Page />
    </Layout>
  );
}

// ==============================================