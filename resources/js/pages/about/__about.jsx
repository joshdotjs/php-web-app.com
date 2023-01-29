import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';
import Checkboxes from '@/comps/forms/checkboxes/checkboxes';

// ==============================================

// import Link from '@/comps/link/link';
import './.scss';

// ==============================================


function Page() {

  // --------------------------------------------

  const options = ['sm', 'lg'];
  const [set, setSet]   = useState(new Set());

  // --------------------------------------------

  return(
    <Layout name="about">
      
      <h1>About Page</h1>

      <div id="playground" style={{ height: '300px', width: '100vw', background: 'white', display: 'grid', placeItems: 'center' }}>
        <Checkboxes 
          options={options}
          set={set}
          setSet={setSet}
        />
      </div>

    </Layout>
  );

  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--home-about-page');
if(root){
  window.API_URL_NODE         = root.dataset.apiUrlNode;
  window.API_URL_LARAVEL = root.dataset.apiUrlNodeLaravel;
  createRoot(root).render(<Page />);
}

// ==============================================