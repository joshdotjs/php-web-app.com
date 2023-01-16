// resources/js/App.jsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { fetchGET, fetchPOST } from './util/fetch';

import './App.scss';

// ==============================================

const json = (str) => JSON.parse(JSON.stringify(str));

// ==============================================

export default function App() {

  // --------------------------------------------

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {

      const data = await fetchGET('/get-products');
      console.log('data: ', data);

      setProducts(data);

    })();
  }, []);

  // --------------------------------------------

  return(
    <h1 className="bg-blue-500 p-4">


      { products.length > 0 && products.map(({id, title, body, price}) => {
        return (
          <div key={id} style={{ border: 'solid black 1px', margin: '1rem'}}>
            <h2>{title}</h2>
            <p>{body}</p>
            <p>${price}</p>
          </div>
        );
      })}
    </h1>
  );
}

// ==============================================

const root = document.querySelector('#react-root--products-page');
if(root){
  createRoot(root).render(<App />);
}

// ==============================================

function Header() {

  return (
    <header className="header">

      <div>
        <a href="/">Logo</a>
      </div>

      <nav>
        <li>
          <a href="/auth-register">Register</a>
        </li>

        <li>
          <a href="/auth-login">Login</a>
        </li>

        <li>
          <a href="/store">Store</a>
        </li>
      </nav>

    </header>
  );
};

const root_header = document.querySelector('#react-root--header');
if(root_header){
  createRoot(root_header).render(<Header />);
}

// ==============================================