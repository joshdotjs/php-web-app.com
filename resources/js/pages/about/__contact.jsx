import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';

// ==============================================

// import Link from '@/comps/link/link';
// import './.scss';

// ==============================================


function Page() {

  // --------------------------------------------

  return(
    <Layout name="about">
      <h1>Contact Page</h1>
    </Layout>
  );

  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--home-contact-page');
if(root){
  window.API_URL_NODE         = root.dataset.apiUrlNode;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  createRoot(root).render(<Page />);
}

// ==============================================