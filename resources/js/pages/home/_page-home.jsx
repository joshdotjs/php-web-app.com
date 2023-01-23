import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/layout';

// ==============================================

import Link from '@/comps/link/link';
import './.scss';

// ==============================================

function Page() {

  // --------------------------------------------

  return(
    <Layout name="home">
      <ul>
        <li className="all"> 
          <Link href="/">home</Link>
        </li>

        <li className="all">
          <Link href="/about">about</Link>
        </li>
        <ul>
          <li className="all">
            <Link href="/about/contact" >contact</Link>
          </li>
        </ul>
        
        <li className="all">
          <Link href="/store" >store</Link>
        </li>
        <ul>
          <li className="all">
            <Link href="/store/product/1" >product/[id]</Link>
          </li>

          <li className="user">
            <Link href="/store/checkout" className="logged-in">checkout</Link>
          </li>
        </ul>
        
        <li>
          auth
        </li>
        <ul>

          <li className="all">
            <Link href="/auth/login">login</Link>
          </li>
          <li className="all">
            <Link href="/auth/register">register</Link>
          </li>
        </ul>

        <li className="user">
          <Link href="/user">user</Link>
        </li>
        <ul>
          <li className="user">
            <Link href="/user/orders">orders</Link>
          </li>
        </ul>

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