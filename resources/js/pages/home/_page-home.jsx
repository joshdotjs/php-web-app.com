import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '../../comps/_layout/layout';

// ==============================================

function Page() {

  // --------------------------------------------

  return(
    <Layout>
        Home Page
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