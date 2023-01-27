import React from 'react';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

import RadioButtons from '@/comps/inputs/radio-buttons/radio-buttons-variants';
import Button from '@/comps/button/button';

import { disableClick, enableClick } from '@/util/dom';

import { addToCartLS } from './cart-fn';

// ==============================================

export default function Card ({ item, addToCart, idx }) {

  // --------------------------------------------

  const imgs = ['/img/products/shoes/pegasus-green.webp', '/img/products/shoes/pegasus-pink.webp', '/img/products/shoes/pegasus-purple.webp', '/img/products/shoes/pegasus-white.webp'];

  const [hovered_image, setHoveredImage]       = useState(imgs[0]);
  const [chosen_variant_id, setChosenVariantId] = useState();

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

        <div ref={reveal_ref} className="back">
          <RadioButtons 
            name="variants" 
            options={item.variants.map(({id}) => id)} 
            option_labels={item.variants.map(({size, color}) => `${size} ${color}`)} 
            selected={chosen_variant_id} 
            setSelected={setChosenVariantId} 
          />

          {
            item.variants.map(({id, product_id, qty, size, color, img}) => {
              return (
                <img 
                  key={img} 
                  src={img}
                  onMouseEnter={() => { setHoveredImage(img) }}
                  onClick={() => { alert('todo: set variant') }}
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