// resources/js/App.jsx
import React, { useContext } from 'react';
import { createRoot } from 'react-dom/client';

import AuthContext from '../../context/auth-ctx';

import Layout from '../../comps/_layout/layout';
import AdminDashboard from './_admin-dashboard';
import { redirect } from '../../util/routes';

// ==============================================

function Page() {

  // --------------------------------------------

  const { logged_in, user } = useContext(AuthContext);

  console.log('logged in: ', logged_in);
  console.log('user.is_admin: ', user.is_admin);
  console.log('user: ', user);

  // --------------------------------------------

  if (logged_in && user.is_admin) {
    return(
      <AdminDashboard />
    );
  } else {
    return (
      <div>Logged in Admins only!</div>
    )
  }
 
  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--admin-dashboard-page');
if(root){
  createRoot(root).render(
    <Layout>
      <Page />
    </Layout>
  );
}

// ==============================================


