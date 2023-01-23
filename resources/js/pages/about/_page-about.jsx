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
    <Layout name="about">
      <h1>About Page</h1>
    </Layout>
  );

  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--home-about-page');
if(root){
  window.API_URL = root.dataset.apiUrl;
  createRoot(root).render(<Page />);
}

// ==============================================