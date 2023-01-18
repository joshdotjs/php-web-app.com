import React, { useEffect, useState } from 'react';

import Button from '../../comps/button/button';

// ==============================================

export default function Products ({ products }) {
  return (
    <section id="products" className="bg-orange-200">
      <h2>Products:</h2>
        
      { products && products.map((product) => {

        const {id, title, body, price} = product;

        return (
          <div
            key={id} 
            href={`/product/${id}`}
            className="
              mb-4 border p-4
              bg-greeb-200

            "
          >
            <h2>{title}</h2>
            <p>{body}</p>
            <p><strong>${price}</strong></p>

            <Button onClick={() => window.location.href = `/product/${id}`}>Details</Button>
          </div>
        );
      })}   
    </section>
  );
};

// ==============================================
