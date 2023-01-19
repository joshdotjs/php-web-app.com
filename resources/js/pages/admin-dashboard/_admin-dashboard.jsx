import React, { useState, useEffect, useRef, useContext } from 'react';

import Button from '../../comps/button/button';

import { fetchPOST } from '../../util/fetch';

import '.scss';

// ==============================================

export default function AdminDashboard () {

  // --------------------------------------------

  const title_ref = useRef(null);
  const body_ref  = useRef(null);
  const price_ref = useRef(null);

  // --------------------------------------------

  const handler = async (e) => {
    e.preventDefault();

    // const data = await fetchPOST({ 
    //     url: 'http://127.0.0.1:8000/api/create-product', 
    //     jwt: '9|qnKVd7UITgwdF5t4S7TzVYBBRJXUDWlu5fv6AHYK',
    //     body: {
    //     // title: title_ref.current.value,
    //     // body: body_ref.current.value,
    //     // price: price_ref.current.value,
    //     title: 'new product',
    //     body: 'body...',
    //     price: 100,
    //   }},
    // );











    // const myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer 1|9e7Z73E5uBDtNRiwhn69l1eaM2iP03rNFVNTN0c0");
    // myHeaders.append("Content-Type", "application/json");
    // // myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6ImMrY090QzZJejVZa1VBWnQ4NEhzTlE9PSIsInZhbHVlIjoiQW1vaTh3Nmh3RVlNYkU0RHBYeWNib0hBNlQ2Vkl6SnE2WktVODcvTjkyM3c4MVhvcURaOXBZNU5yajlyVDdEQllNY1hibmNKZzJKRTVFVXFiaC9SOUJaV3dhNzZqRlc5TFZDTmFGclJUeFBiM0VGL0RMZ0JLa201b24zYXIrWlAiLCJtYWMiOiJjYmUyNTcxY2YxMDEwNGVlZWUwOWQwZThkZDg0NGQyYWVmYmU2MzM0NWZmOWNiYjBlY2JlMmVmZTRhMzQ4Yzk5IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IkRoaGgrQnFKYnVNUnJucDVvTjI4UUE9PSIsInZhbHVlIjoidTBtSVllTVlNdTcydFAzYTJpeVQwNTUxRGgrYmVwYk90L04wQmhhZkQ3S0U2eUdBVFYraUkySHZWRjJiMGE2N1cyaWxNYTRwNFcrdldCL0tDUHZMeFcyOXJqcEkrQTYyMm9zbWg1b1hsRTdXdW5xaVZiTEZuQUpUdXBWc2lINVYiLCJtYWMiOiIzOWIwNGVhM2IyOTIzNDM0MmJlNTM2M2EzYTA5N2FhNzliNWVhYjQwOGQ2MjVjZjE4NmRjNTYxYzk3ZDE4OWU3IiwidGFnIjoiIn0%3D");
    
    // const raw = JSON.stringify({
    //   "title": "product D",
    //   "body": "product body...",
    //   "price": 200
    // });
    
    // const requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };
    
    // fetch("http://127.0.0.1:8000/api/create-product", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));





    // console.log('data: ', data);
  };

  // --------------------------------------------

  return (
    <>
      ADMIN DASHBOARD


      <form>

        <label htmlFor="title">Title: </label>
        <input id="title" ref={title_ref} />

        <label htmlFor="body">Body: </label>
        <input id="body" ref={body_ref} />

        <label htmlFor="price">Price: </label>
        <input id="price" ref={price_ref} />


        <Button onClick={handler}>Submit</Button>
      </form>
    </>
  );
};

// ==============================================
