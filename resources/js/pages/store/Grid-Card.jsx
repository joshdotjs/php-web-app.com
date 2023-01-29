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

const Ellipsis = ({ children, name, classes, color, fontSize, fontWeight }) => {

  const ellipsis = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };

  return (
    <p 
      className={`
        ${name}
        ${classes}
        w-[150px] sm:w-full
      `}
      style={{ 
        color,
        fontSize,
        fontWeight,
        ...ellipsis
      }}
    >
      {children}
    </p>
  );
};

// ==============================================

export default function Card ({ item, addToCartAnim, idx }) {

  // --------------------------------------------

  // const { addToCartLS } = useContext(CartContext);

  // --------------------------------------------

  const { product, variants } = item;
  const { price, price_compare, title, sub_title, body, category } = product;

  const [hovered_image, setHoveredImage]        = useState(variants[0].img);
  const [chosen_variant_id, setChosenVariantId] = useState(variants[0].id);

  // TODO: Get these images from the DB
  // --------------------------------------------

  const container_ref = useRef(null);
  const reveal_ref    = useRef(null)
  const tl_ref        = useRef(null);

  const enter = () => {


    // const container = container_ref.current;
    const reveal = reveal_ref.current;

    tl_ref.current = gsap.to(reveal, {
      opacity: 1,
      duration: 0.15,
    });

  };

  const exit = () => {
    tl_ref.current?.reverse();
  }

  // --------------------------------------------

  const black = 'black';
  const light = '#757575';
  const green = '#41A139';

  // --------------------------------------------

  const display = (price) => price / 100;
  const is_price_different = price < price_compare;

  const percent_diff = Math.round((Math.abs(price_compare - price) / ((price_compare + price) / 2)) * 100);

  // --------------------------------------------

  return (
    <div // wrapper used to have local onMouseEnter callbacks
      // ref={container_ref}    
      className="card"
      onMouseEnter={enter}
      onMouseLeave={exit}
      style={{ 
        height: '100%',  
        background: 'white'
      }}
    >
      <div 
        className="img-container"
        style={{ position: 'relative' }}
      >
        <img src={hovered_image} />


        <div // btn-container
          className={`btn-container
            w-[55%] sm:w-[35%] 
          `} 
          style={{
            position: 'absolute',
            // bottom: '1.25rem',
            bottom: '5%',
            // right: '1.25rem',
            right: '5%',
          }}
        >
          <Button 
            classes=""
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

      <div className="card-bottom  relative">

        <div 
          className="front"
          style={{
            // opacity: 1,
          }}
        >
          <Ellipsis color='black' fontSize='1.2rem' fontWeight='500'>{title}</Ellipsis>
          <Ellipsis color={light} fontSize='1rem' fontWeight='400'>{sub_title}</Ellipsis>
          <p className="num-colors" style={{ color: light, }}>6 Colors</p>

          <p className="price mt-1" style={{ color: black, }}>${display(price)}  {is_price_different && <span style={{ color: light, textDecoration: 'line-through' }}>${display(price_compare)}</span>}</p>

          <p className="discount" style={{ color: green, fontWeight: '500', visibility: is_price_different ? '' : 'hidden' }}>{percent_diff}% off</p>

        </div>

        <div 
          ref={reveal_ref} 
          className="back radio-container  hidden  sm:flex"
          style={{ 
            opacity: 0,
            // display: 'flex',
            gap: '7px',
            padding: '7px 0',
            // background: 'lightgreen',
            background: 'white',
            position: 'absolute',
            top: 0,
            width: '100%',
          }}
        >
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
                    // outline: chosen_variant_id === id ? 'dashed limegreen 3px' : '',
                    height: '60px'
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