import React, { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import uuid from 'react-uuid';
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";


import Button from '@/comps/button/button';

import { lc, lg, lo, lp, lb, lr, ly } from '@/util/log';
import { authFetch } from '@/util/fetch';
import { getCartLS, removeFromCartLS, updateNumCartItems, clearCartLS } from '@/context/cart-ctx/cart-fn';

gsap.registerPlugin(Flip);

// ==============================================

let openCart;

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
        w-[145px]
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

export default function Cart() {

  // --------------------------------------------

  const black = 'black';
  const light = '#757575';
  const green = '#41A139';

  // --------------------------------------------
  
  const portal_root = document.querySelector('#portal-cart');
  
  // --------------------------------------------

  const submit = () => {

    // - - - - - - - - - - - - - - - - - - - - - 

    const submitOrderToNode = () => {
      // const url = `${process.env.NEXT_PUBLIC_API_URL}/api/checkout/stripe-checkout-node`;
      const url = `${window.API_URL_NODE}/api/checkout/stripe-checkout-laravel`;

      const cart = getCartLS();
      
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ cart }),
      })
        .then(res => {
          if (res.ok) return res.json();
          return res.json().then(json => Promise.reject(json));
        })
        .then(({ url }) => {
          window.location = url;
        })
        .catch(e => {
          console.error(e.error);
        });

    };

    submitOrderToNode();

    // - - - - - - - - - - - - - - - - - - - - - 

    const insertOrderInDB = async () => {

      const cart = getCartLS();

      // const url = `${process.env.NEXT_PUBLIC_API_URL}/api/orders`;
      const url = `/api/orders`;
      debugger;
      const [data, error] = await authFetch({
        url: url, 
        method: 'POST', 
        body: { cart },
      });
  
      if (error) {
        // alert('TODO: Unauthorization Notification...');
        lr('FAIL');
        console.log('error: ', error);
      }
      if (!error) {
        lg('SUCCESS');
        console.log('data: ', data);
        resetCart();
      }

    };

    // insertOrderInDB();

    // - - - - - - - - - - - - - - - - - - - - - 

  };

  // --------------------------------------------

  openCart = ({ onComplete=null }) => {

    console.log('openCart()');

    const container = container_ref?.current;

    lr(tl_ref.current);
    if (tl_ref.current) // if cart is still open then reset timeline before opening. Fixes bug where timeline is overwritten with no animation if cart is already open and added to. Cart should always be closed when adding new item, but just in case this ensures the cart is closable if added to when already open if app is in some unforseen state.
      tl_ref.current.revert();

    tl_ref.current = gsap.to(container, { 
      x: 0,
      duration: 0.3,
      onComplete,
     });

  };

  // --------------------------------------------

  const closeCart = () => tl_ref.current?.reverse()

  // --------------------------------------------

  useEffect(() => {

    // Initialize num items in cart synchronized with local-state:
    updateNumCartItems();

    // Callback from 'add-cart' event:
    const addItem = () => { 

      // open cart:
      openCart({ onComplete: () => {
        setLayout((prev_layout) => { 
  
          const cart = getCartLS();
          const prev_items = prev_layout.items;
  
          let items;
          if (cart?.length === prev_items?.length) { // duplicate item => only increase quantity (already updated)
            lr('duplicate');
            items = cart.map(({ product, variant, qty}) => ({ id: variant.id, status: 'entered', product, variant, qty }));
          } else { // new item => add to cart
            const { product, variant, qty } = cart.at(-1);
            const new_item = { id: variant.id, status: 'entered', product, variant, qty };
            items = [new_item, ...prev_items];
          }
  
          const state = Flip.getState(q(".line-item")); 
          return { items, state }; 
        });
      }});
    };
    window.addEventListener('cart-add', addItem);
    return () => window.removeEventListener('cart-add', addItem);
  }, []);

  // --------------------------------------------

  const tl_ref = useRef(null);
  const container_ref = useRef(null);
  const q = gsap.utils.selector(container_ref); // Returns a selector function that's scoped to a particular Element, meaning it'll only find descendants of that Element .

  // --------------------------------------------
    
  const [layout, setLayout] = useState(() => {

    const cart = getCartLS();
    // console.log('cart: ', cart);

    let init_items = [];
    if (cart?.length > 0)
      init_items = cart.map(({ product, variant, qty }) => ({ id: variant.id, status: 'entered', product, variant, qty }));

    return {
      items: init_items.reverse(),
      state: undefined,
    };
  });

  // --------------------------------------------
  
  // Create the context
  //  -Add to it later via ctx.add(() => {...})
  const [ctx] = useState(() => gsap.context(() => {}));

  // --------------------------------------------
  
  useEffect(() => {
    return () => ctx.revert();
  }, []);

  // --------------------------------------------
    


  // --------------------------------------------
    
  const remove = (item) => {  

    console.log('item: ', item);

    const { variant: { id: variant_id }} = item;
    removeFromCartLS( variant_id );

    // set the item as exiting which will add a CSS class for display: none;
    item.status = "exiting"; // JOSH: This mutates the state!!!!
    
    setLayout((prev_layout) => { // Update state without mutation:

      console.log('prev_layout: ', prev_layout);

      const { items: prev_items } = prev_layout;

      const row_index = prev_items.findIndex(r => r.id === item.id);

      // Update the row
      const clone = [...prev_items];
      clone[row_index].status = 'exiting';

      return {
        items: clone,
        state: Flip.getState(q(".line-item")),
      };
    });

  };

  // --------------------------------------------
  
  const removeItems = useCallback((exiting_items) => {
      
    if (!exiting_items.length) return;
    
    setLayout((prev) => {{

      const non_exiting_items = prev.items.filter((item) => {
        return !exiting_items.includes(item);
      });

      return {
        state: Flip.getState(q(".line-item")),
        items: non_exiting_items, // this removes one item from the array => remove corresponding item from DOM
      };
    }});
  }, [q]);

  // --------------------------------------------

  useLayoutEffect(() => {
    if (!layout.state) return;

    const duration = 0.3;
    
    // get the items that are exiting in this batch
    const exiting = layout.items.filter(item => item.status === "exiting");
    ctx.add(() => {
      
      // Flip.from returns a timeline
      const timeline = Flip.from(layout.state, {
        absolute: true, 
        ease: "power1.inOut",
        targets: q(".line-item"),
        scale: true,
        simple: true,
        onEnter: elements => {
          return gsap.fromTo(elements, { 
            opacity: 0,
            scale: 0,
            duration
          }, { 
            opacity: 1,
            scale: 1,
            delay: 0.2,
            duration
          });
        },
        onLeave: elements => {
          return gsap.to(elements, { 
            opacity: 0, 
            scale: 0,
            duration
          });
        },
        duration,
      });

      // remove the exiting items from the DOM after the animation is done
      timeline.add(() => removeItems(exiting));
    });

  }, [ctx, layout, q, removeItems]);

  // --------------------------------------------
  
  return createPortal(
    <aside 
      id="cart" 
      ref={container_ref}
      className="
        w-[300px]
        md:w-[350px]
      " 
      style={{ position: 'fixed',
        top: 0,
        right: 0,
        background: 'white',
        height: '100vh',
        // width: '300px',
        zIndex: 100,
        // transform: 'translate(100%)'
      }}
    >

      {/* - - - - - - - - - - - - - - - - - - */}

      <svg onClick={closeCart}
        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
        className="bi bi-x  cursor-pointer m-4" viewBox="0 0 16 16"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      
      {/* - - - - - - - - - - - - - - - - - - */}

      {layout.items.map((item, idx) => {
        console.log('item: ', item);

        const {status, product: { title, sub_title, body, price, category }, variant: { id, img, color, size, qty }} = item;

        const key = `line-item-${id}`;

        return (
          <div  
            id={key} 
            key={key}
            data-flip-id={key}
            className={`line-item
              ml-4 mr-6 py-4
              ${idx !== layout.items.length - 1 ? 'border-b border-gray-200' : ''}
            `}
            style={{ 
              display: status === 'exiting' ? 'none' : 'flex',
              // padding: '1rem',
              // outline: 'dashed yellow 1px',
            }}
          >
            <img 
              className="rounded-md border border-gray-200"
              src={img} 
              style={{ 
                height: '75px', 
                // width: '75px' 
              }} 
            />

            <div
              style={{
                // background: 'rgba(255, 0, 0, 0.2)',
                flexGrow: 1,
                // outline: 'dashed hotpink 2px',
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '1rem'
              }}
            >
              <div 
                // className="mb-1"
                style={{
                  // background: 'yellow',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  // marginBottom: '0.1rem'
              }}>
                <Ellipsis color='black' fontSize='0.9rem' fontWeight='500' classes="text-left">{title}</Ellipsis>
                <p 
                  className=""
                  style={{
                    // background: 'red',
                    fontSize: '0.9rem'
                  }}
                >
                  ${price / 100}
                </p>
              </div>

              <Ellipsis color={light} fontSize='0.8rem' fontWeight='400' classes="mb-2">{sub_title}</Ellipsis>
                
              <div style={{
                // background: 'yellow',
                display: 'flex',
                justifyContent: 'space-between',
                // alignItems: 'center',
                // background: 'yellow',
                marginTop: 'auto'
              }}>
                
                {/* <Ellipsis color='black' fontSize='0.8rem' fontWeight='400' classes="mt-3 mb-1 text-left">Qty: {item.qty}</Ellipsis> */}
                <p style={{ fontSize: '0.8rem' }}>Qty: {item.qty}</p>

                <svg 
                  onClick={() => remove(item)}
                  className="bi bi-trash  cursor-pointer" 
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                  // fill="currentColor" 
                  fill="black"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
              </div>

              
            </div>                          
          </div>
        );
      })}

      {/* - - - - - - - - - - - - - - - - - - */}

      <div 
        id="cart-btn-container" 
        style={{ 
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50%'
        }}
      >
        <Button
          disabled={layout.items.length === 0}
          onClick={() => { 
            layout.items.map(item => remove(item));
            setTimeout(closeCart, 200);
          }}
          classes="mb-4"
        >
          Clear
        </Button>


        <Button
          disabled={layout.items.length === 0}
          onClick={() => {
            submit();
          }}
        >
          Checkout
        </Button>
      </div>

      {/* - - - - - - - - - - - - - - - - - - */}

    </aside>,
    portal_root
  );

  // --------------------------------------------
};

// ==============================================

export { openCart };