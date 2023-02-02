import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';
import CreateProduct from "@/pages/admin/create-product";
import ModifyProduct from "@/pages/admin/modify-product";
// import ModifyProduct from "@/comps/__pages/admin/modify-product";

// ==============================================

// import Link from '@/comps/link/link';
import './.scss';

// ==============================================


function Page() {

  // --------------------------------------------

  return(
    <>
      <CreateProduct />

      {/* Update & Delete */}
      <ModifyProduct />
    </>
  );

  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--admin-products-page');
if(root){
  window.API_URL_NODE         = root.dataset.apiUrlNode;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  createRoot(root).render(
    <Layout name="admin--products" restrict="admin">
      <Page />
    </Layout>
  );
}

// ==============================================