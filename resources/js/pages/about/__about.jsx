import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';

// ==============================================

// import Link from '@/comps/link/link';
import './.scss';

// ==============================================


function Page() {

  // --------------------------------------------

  const sizes = ['sm', 'lg'];
  const [selected_sizes, setSelectedSizes]   = useState(new Set());

  // --------------------------------------------

  return(
    <Layout name="about">
      
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>
      <h1>About Page</h1>

    </Layout>
  );

  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--home-about-page');
if(root){
  window.API_URL_NODE         = root.dataset.apiUrlNode;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  createRoot(root).render(<Page />);
}

// ==============================================