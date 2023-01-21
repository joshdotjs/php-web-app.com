import React from 'react';
import { createRoot } from 'react-dom/client';

// import Layout from '@/comps/_layout/layout';

import MainApp from './app-main/App';
import HeaderApp from './app-header/App';

import './.scss';

// ==============================================

// function Page() {

//   // --------------------------------------------

//   return(
//     // <Layout>
//       <h2>Anim Page</h2>
//     // </Layout>
//   );

//   // --------------------------------------------
// }

// ==============================================

// const root = document.querySelector('#react-root--anim-page');
// if(root){
//   window.API_URL = root.dataset.apiUrl;
//   createRoot(root).render(<Page />);
// }

// ==============================================

const main_root = document.querySelector('#root-main');
// main_root.render(<MainApp />);
if(main_root){
  createRoot(main_root).render(<MainApp />);
}

const header_root = document.querySelector('#root-header');
// header_root.render(<HeaderApp />);
if(header_root){
  createRoot(header_root).render(<HeaderApp />);
}
