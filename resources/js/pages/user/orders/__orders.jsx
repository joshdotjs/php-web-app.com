import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
// import Link from "next/link";
import Link from '@/comps/link/link';

import Layout from "@/comps/_layout/_layout";
import Button from "@/comps/button/button";

import { authFetch } from "@/util/fetch";
import { lg, lr } from "@/util/log";

// ==============================================

function Page() {

  // --------------------------------------------

  const [orders, setOrders] = useState([]);


  // --------------------------------------------
  
  const getOrders = async () => {

    // const url = `/api/orders/${query.id}`;
    const url = `/api/user/orders`;
    const [data, error] = await authFetch({ url });
    console.log('data: ', data);

    if (error) {
      // alert('TODO: Unauthorized Notification...');
      lr('TODO: Unauthorized Notification...');
    }
    if (!error) {
      lg('SUCCESS');
      console.log('data: ', data);
      setOrders(data);
    }
  };
  
  // --------------------------------------------

  // useEffect(() => {
  //   if (is_ready)
  //     getOrder();
  // }, [is_ready]);
  useEffect(() => {
      getOrders();
  }, []);

  // --------------------------------------------

  return (
    <>

      <table className="border-separate border-spacing-2 border border-slate-500 ">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          { orders?.length > 0 && orders.map(({ id, status, total, created_at }) => {

            const key = `order-${id}`;

            return (
              <tr key={key}>
                <th>{created_at}</th>
                <th>{status}</th>
                <th>{total}</th>
                <th>
                  <Link href={`/user/orders/${id}`}>
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

const root = document.querySelector('#react-root--user-orders-page');
if(root){
  window.API_URL_NODE = root.dataset.apiUrlNode;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  const orders_SSR = JSON.parse(root.dataset.orders);
  createRoot(root).render(
    <Layout name="user--orders" restrict="admin">
      <Page orders={orders_SSR} />
    </Layout>
  );
}

// ==============================================