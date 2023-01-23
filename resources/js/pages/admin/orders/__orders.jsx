import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
// import Link from "next/link";
import Link from '@/comps/link/link';

import Layout from "@/comps/_layout/layout";
import Button from "@/comps/button/button";

import { authFetch } from "@/util/fetch";
import { lg, lr } from "@/util/log";

// ==============================================

function Page() {

  // --------------------------------------------

  const [orders, setOrders] = useState([]);

  // --------------------------------------------
  
  const getOrders = async () => {

  // TODO: Change to authFetch
  //  ---refer to users:
  // const getUsers = async () => {
  
    const url = '/api/orders';
    const [data, error] = await authFetch({ url });
    // const [data, error] = await fetchGET2({ url });
    console.log('data: ', data);

    if (error) {
      alert('TODO: Unauthorized Notification...');
    }
    if (!error) {
      lg('SUCCESS');
      console.log('data: ', data);
      setOrders(data);
    }
  };
  
  // --------------------------------------------

  useEffect(() => {
    getOrders();
  }, []);

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
  window.API_URL = root.dataset.apiUrl;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  createRoot(root).render(
    <Layout name="admin--orders" restrict="admin">
      <Page />
    </Layout>
  );
}

// ==============================================