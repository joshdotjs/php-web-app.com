import React, { useCallback, useEffect, useLayoutEffect, useRef, useState, useContext } from 'react';
import uuid from 'react-uuid';
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

import AuthContext from '@/context/auth-ctx';

import Button from '@/comps/button/button';

import { lc, lg, lo, lp, lb, lr, ly } from '@/util/log';
import { authFetch } from '@/util/fetch';
import { redirect } from '@/util/routes';
import { getCartLS, removeFromCartLS } from './cart-fn';


gsap.registerPlugin(Flip);


// ==============================================

export default function Cart() {

  // --------------------------------------------

  const { logged_in } = useContext(AuthContext);

  // --------------------------------------------

  const submit = () => {

    // - - - - - - - - - - - - - - - - - - - - - 

    const submitOrderToNode = () => {
      // const url = `${process.env.NEXT_PUBLIC_API_URL}/api/checkout/stripe-checkout-node`;
      const url = `${window.API_URL}/api/checkout/stripe-checkout-laravel`;

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

  useEffect(() => {
    const addItem = () => { 
      setLayout((prev_layout) => { 

        const cart = getCartLS();
        const prev_items = prev_layout.items;

        let items;
        if (cart.length === prev_items.length) { // duplicate item => only increase quantity (already updated)
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
    };
    window.addEventListener('cart-add', addItem);
    return () => window.removeEventListener('cart-add', addItem);
  }, []);

  // --------------------------------------------

  const container_ref = useRef();
  const q = gsap.utils.selector(container_ref); // Returns a selector function that's scoped to a particular Element, meaning it'll only find descendants of that Element .

  // --------------------------------------------
    
  const [layout, setLayout] = useState(() => {

    const cart = getCartLS();
    console.log('cart: ', cart);

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
  
  return (
    <div className="text-center" ref={container_ref}
      style={{ position: 'fixed',
      top: '300px',
      right: 0,
      background: 'lightblue',
      height: '100vh',
      width: '300px',
      zIndex: 100
    }}
    >
      
      {/* - - - - - - - - - - - - - - - - - - */}

      {layout.items.map((item) => {

        const key = `line-item-${item.id}`;

        return (
          <div      
            id={key} 
            key={key}
            // data-flip-id={key}
            className={`line-item
              bg-green-400 mb-5 px-4 py-2
            `} 
            onClick={() => remove(item)}
            style={{ 
              display: item.status === 'exiting' ? 'none' : 'grid'
            }}
          >
            <p>Variant ID: {item.id}</p>
            <p>{item.product.title}</p>
            <p>{item.variant.size} {' '} {item.variant.color}</p>
            <p>Qty: {item.qty}</p>
          </div>
        );
      })}

      {/* - - - - - - - - - - - - - - - - - - */}

      <Button 
        // disabled={cart.length === 0}
        onClick={() => {

          if (logged_in)
            submit();
          else {
            // router.push('/auth/login');
            redirect('/auth/login');
          }

        }}
      >
        Checkout
      </Button>

      {/* - - - - - - - - - - - - - - - - - - */}

    </div>
  );

  // --------------------------------------------
};

// ==============================================