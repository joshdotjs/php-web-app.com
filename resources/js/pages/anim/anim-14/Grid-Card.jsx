import React from 'react';
import { useState, useRef, useLayoutEffect, useEffect, useContext } from 'react';
import { gsap } from 'gsap';

// import CartContext from '@/context/cart-ctx';
import { addToCartLS } from '@/context/cart-ctx/cart-fn';

// import RadioButtons from '@/comps/inputs/radio-buttons/radio-buttons-variants';
import Button from '@/comps/button/button';

// import { addToCartLS } from '@/context/cart-fn';

// Import this here because the moving of the .box-child's means that their styles should not be nested
import './_grid.scss'; 

// ==============================================

export default function Card ({ item, addToCartAnim, idx }) {

  // --------------------------------------------

  // const { addToCartLS } = useContext(CartContext);

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

  const black = 'black';
  const light = '#757575';
  const green = '#41A139';

  // --------------------------------------------

  return (
    <div 
      // ref={container_ref}    
      className="card"
      onMouseEnter={enter}
      onMouseLeave={exit}
    >
      <div 
        className="img-container"
        style={{ position: 'relative' }}
      >
        <img src={hovered_image} />


        <div // btn-container
          className={`btn-container
            w-fit sm:w-[45%] 
          `} 
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            right: '1.25rem',
          }}
        >
          <Button 
            classes="absolute bottom-6 right-6"
            disabled={!chosen_variant_id}
            onClick={() => {
            const { product, variants } = item;
            const { id: product_id, title, body, price, category } = product;
            const variant = variants.find((variant) => variant.id === chosen_variant_id);
            const { id: variant_id, color, size, qty } = variant;
            addToCartLS({ 
              idx, 
              product: { id: product_id, title, body, price, category }, 
              variant: { id: variant_id, color, size, qty },
            });
            addToCartAnim(idx); // animation in <App />
          }}>
            Add to Bag
          </Button>
        </div>

      </div>

      <div className="card-bottom">

        <div className="front">
          <h5 className="title" style={{ color: 'black', fontWeight: '500' }}>{ item.title }</h5>
          <p className="sub-title" style={{ color: light, }}>{item.sub_title}</p>
          <p className="num-colors" style={{ color: light, }}>6 Colors</p>

          <p className="price" style={{ color: black, }}>${item.price / 100}  {item?.price_compare && <span style={{ color: light, textDecoration: 'line-through' }}>${item.price_compare / 100}</span>}</p>

          <p className="discount" style={{ color: green, fontWeight: '500' }}>42% off</p>

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
          

        </div>

      </div>

      
    </div>
  );

};

// ==============================================