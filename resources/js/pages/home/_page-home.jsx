import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/layout';

import './.scss';

// ==============================================

function Page() {

  // --------------------------------------------

  return(
    <Layout>
      <h2>Home Page</h2>
    </Layout>
  );

  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--home-page');
if(root){
  window.API_URL = root.dataset.apiUrl;
  createRoot(root).render(<Page />);
}

// ==============================================