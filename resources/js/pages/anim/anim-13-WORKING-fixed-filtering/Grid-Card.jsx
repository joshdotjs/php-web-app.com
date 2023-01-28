import React from 'react';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

import RadioButtons from '@/comps/inputs/radio-buttons/radio-buttons-variants';
import Button from '@/comps/button/button';

import { addToCartLS } from '@/util/cart-fn';

// Import this here because the moving of the .box-child's means that their styles should not be nested
import './_grid.scss'; 

// ==============================================

export default function Card ({ item, addToCart, idx }) {

  // --------------------------------------------

  const [hovered_image, setHoveredImage]        = useState(item.variants[0].img);
  const [chosen_variant_id, setChosenVariantId] = useState(item.variants[0].id);

  // TODO: Get these images from the DB
  // --------------------------------------------

  const container_ref = useRef(null);
  const reveal_ref    = useRef(null)
  const tl_ref        = useRef(null);

  const enter = () => {


    const container = container_ref.current;
    const reveal = reveal_ref.current;

    tl_ref.current = gsap.to(reveal, {
      opacity: 1,
      duration: 0.15,
    });

  };

  const exit = () => {
    tl_ref.current.reverse();
  }

  // --------------------------------------------

  return (
    <div 
      // ref={container_ref}    
      className="card"
      onMouseEnter={enter}
      onMouseLeave={exit}
    >
      <img src={hovered_image} />

      <div className="card-bottom">

        <div className="front">
          <h5 className="title">Nike Pegasus 39</h5>
          <p className="sub-title">Men's Road Running Shoes</p>
          <p className="num-colors">6 Colors</p>

          <p className="price">$74.97  <span>$139</span></p>

          <p className="discount">42% off</p>

        </div>

        <div ref={reveal_ref} className="back radio-container">
          {
            item.variants.map(({id, product_id, qty, size, color, img}) => {

              const key = `radio-${id}`;

              return (
                <img 
                  id={key}
                  key={key} 
                  src={img}
                  // onMouseEnter={() => { 
                  //   setHoveredImage(img);
                  //   setChosenVariantId(id);
                  //  }}
                  onClick={() => { 
                    setHoveredImage(img);
                    setChosenVariantId(id);
                   }}
                  style={{
                    outline: chosen_variant_id === id ? 'dashed limegreen 3px' : '',
                    height: '70px'
                  }}
                />
              );
            })
          }
          
          <Button 
            disabled={!chosen_variant_id}
            onClick={() => {
            const { product_id, title, body, price, category, variants } = item;
            const variant = variants.find((variant) => variant.id === chosen_variant_id);
            const { id: variant_id, color, size, qty } = variant;
            addToCartLS({ 
              idx, 
              product: { id: product_id, title, body, price, category }, 
              variant: { id: variant_id, color, size, qty },
            });
            addToCart(idx); // animation in <App />
          }}>
            add to cart
          </Button>
        </div>

      </div>

      
    </div>
  );

};

// ==============================================