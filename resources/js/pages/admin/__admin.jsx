import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/layout';
import Link from '@/comps/link/link';

import './.scss';

// ==============================================

export default function Page() {

  // --------------------------------------------

  return(
    
      <ul>
        <li className="admin">
          <Link href="/admin">admin</Link>
        </li>
        <ul>
          <li className="admin">
            <Link href="/admin/orders">orders</Link>
          </li>
          <li className="admin">
            <Link href="/admin/products">products</Link>
          </li>
          <li className="admin">
            <Link href="/admin/users">users</Link>
          </li>
        </ul>
      </ul>
    
  );

  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--admin-page');
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