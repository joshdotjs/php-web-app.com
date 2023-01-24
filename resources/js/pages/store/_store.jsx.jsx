import React from 'react';

// import Link from '@src/comps/link/link';
import Link from '@/comps/link/link';
import Button from '@/comps/button/button';

// ==============================================

export default function Page ({ products }) {
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

            <Link href={`/store/product/${id}`}>
              <Button>Details</Button>
            </Link>
          </div>
        );
      })}   
    </section>
  );
};

// ==============================================
