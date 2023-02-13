import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
// import { useRouter } from 'next/router';
// import Link from "next/link";
import Link from "@/comps/link/link";

import Layout from "@/comps/_layout/_layout";
import Button from "@/comps/button/button";

import { authFetch } from "@/util/fetch";
import { lg, lr } from "@/util/log";

// ==============================================

function Page({ id }) {

  // --------------------------------------------

  // const router = useRouter();
  // const { isReady: is_ready, query } = router;
  // console.log('router: ', router);

  // --------------------------------------------

  const [order, setOrder] = useState({ id: null, email: null, total: null, status: null, created_at: null, products: [] });

  // --------------------------------------------
  
  const getOrder = async () => {

    // const url = `/api/orders/${query.id}`;
    const url = `/api/orders/${id}`;
    const [data, error] = await authFetch({ url });
    console.log('data: ', data);

    if (error) {
      // alert('TODO: Unauthorized Notification...');
      lr('TODO: Unauthorized Notification...');
    }
    if (!error) {
      lg('SUCCESS');
      console.log('data: ', data);

      const { order, products } = data;
      const { id, email, total, status, created_at } = order;

      setOrder({ id, email, total, status, created_at, products });
    }
  };
  
  // --------------------------------------------

  // useEffect(() => {
  //   if (is_ready)
  //     getOrder();
  // }, [is_ready]);
  useEffect(() => {
      getOrder();
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

          </tr>
        </thead>

        <tbody>

          <tr>
            <th>{order.email}</th>
            <th>{order.created_at}</th>
            <th>{order.status}</th>
            <th>{order.total}</th>

          </tr>  

        </tbody>
      </table>


      <table className="border-separate border-spacing-2 border border-slate-500 ">
        
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Variant ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Body</th>
            <th>Size</th>
            <th>Color</th>
            <th>Qty</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {order.products.length > 0 && order.products.map(({ variant_id: id, product_id, title, body, price, qty, size, color }) => {

            const key = `product-${id}`;

            return (
              <tr key={key}>
                <th>{product_id}</th>
                <th>{id}</th>
                <th>{title}</th>
                <th>{price}</th>
                <th>{body}</th>
                <th>{size}</th>
                <th>{color}</th>
                <th>{qty}</th>
                <th>
                  <Link href={`/store/product/${id}`}>
                    <Button>Details</Button>
                  </Link>
                </th>
              </tr>  
            );
          })}


        </tbody>
      </table>

    </>
  );

  // --------------------------------------------
}

// ==============================================

const root = document.querySelector('#react-root--user-order-details-page');
if(root){
  window.API_URL_NODE         = root.dataset.apiUrlNode;
  window.API_URL_LARAVEL = root.dataset.apiUrlLaravel;
  const id = root.dataset.id;
  createRoot(root).render(
    <Layout name="user--order-details" restrict="user">
      <Page id={id} />
    </Layout>
  );
}

// ==============================================