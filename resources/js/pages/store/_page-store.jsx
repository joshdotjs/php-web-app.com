// resources/js/App.jsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { fetchGET, fetchPOST } from '../../util/fetch';

import './_page-store.scss';

// ==============================================

function Page() {

  // --------------------------------------------

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {

      const data = await fetchGET('/products');
      console.log('data: ', data);

      setProducts(data);

    })();
  }, []);

  // --------------------------------------------

  return(
    <div className="bg-blue-500 p-4">

      { products.length > 0 && products.map(({id, title, body, price}) => {
        return (
          <div key={id} style={{ border: 'solid black 1px', margin: '1rem'}}>
            <h2>{title}</h2>
            <p>{body}</p>
            <p>${price}</p>

            <button></button>
          </div>
        );
      })}

    </div>
  );
}

// ==============================================

const root = document.querySelector('#react-root--products-page');
if(root){
  createRoot(root).render(<Page />);
}

// ==============================================