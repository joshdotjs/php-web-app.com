import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
// import Link from "next/link";
import Link from '@/comps/link/link';

import Layout from "@/comps/_layout/_layout";
import Button from "@/comps/button/button";

import { authFetch } from "@/util/fetch";
import { lg, lr } from "@/util/log";

// ==============================================

function Page({ orders }) {

  // --------------------------------------------

  return (
    <>

      <table className="border-separate border-spacing-2 border border-slate-500 ">
        <thead>
          <tr>
            <th>User</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          { orders.length > 0 && orders.map(({ id, email, status, total, created_at }) => {

            const key = `order-${id}`;

            return (
              <tr key={key}>
                <th>{email}</th>
                <th>{created_at}</th>
                <th>{status}</th>
                <th>{total}</th>
                <th>
                  <Link href={`/admin/orders/${id}`}>
                    <Button>Details</Button>
                  </Link>
                </th>
              </tr>  
            );
          }) }

        </tbody>
      </table>
    </>
  );

  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--admin-orders-page');
if(root){
  window.API_URL_NODE = root.dataset.apiUrlNode;
  window.API_URL_LARAVEL = root.dataset.apiUrlNodeLaravel;
  const orders_SSR = JSON.parse(root.dataset.orders);
  createRoot(root).render(
    <Layout name="admin--orders" restrict="admin">
      <Page orders={orders_SSR} />
    </Layout>
  );
}

// ==============================================