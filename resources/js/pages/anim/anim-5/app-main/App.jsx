import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import uuid from 'react-uuid';

import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";

import Grid from './Grid';
import Aside from './Aside';
import Filter from './Filter';

import { init } from '@/util/util';
import { fireEvent } from '@/util/custom-event';
import { disableClick, enableClick } from '@/util/dom';
import { getLS, setLS, getCartLS, updateCartLS } from '@/util/local-storage';
import { lc, lg, lo, lp, lb, lr, ly } from '@/util/log';
import { rand } from '@/util/rand';

gsap.registerPlugin(
  Flip, 
  CustomEase, 
  CustomWiggle, 
  ExpoScaleEase, 
  RoughEase, 
);

CustomWiggle.create("cartButtonWiggle", { wiggles: 8, type: "easeOut" });

// ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

// ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

const setInCartClass = (item, inCart)   => item.parentNode.classList.toggle('in-cart', inCart);

// ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

const colors = ['red', 'blue', 'green'];
// const randColor = () => colors[rand(0, colors.length-1)];

// ☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export default function App({ products, }) {

  // ============================================

  const refs = useRef([]);

  const cartBtnWrapper_ref = useRef(null); //cartBtnWrapper = cart.querySelector(".btn-cart-wrapper");
  const cartBtn_ref = useRef(null); // cartBtn = cart.querySelector(".btn-cart");
  const cartItems_ref = useRef(null); // cartItems = cart.querySelector(".items");
  const cartCount_ref = useRef(null); // cartCount = cart.querySelector(".count");
  
  // ============================================
  
  const updateCartIcon = () => {
    const cartItems = cartItems_ref.current;
    const cartCount = cartCount_ref.current;
    
    const hasItems = cartItems.children.length > 0;
    
    cartCount.innerText = hasItems ? cartItems.children.length : null;

    cartItems.hidden = !hasItems;
  };
  
  // ============================================

  const addToCart = (idx) => {
    
    // ------------------------------------------

    // -Add product data to cart flow:
    //  -User clicks 'Add to cart' button in the card.
    //  -addToCart() function (here) is called.
    //  -call 
 


    disableClick();
    
    // ------------------------------------------
    
    const cartBtnAnimation = () => {
  
      const cartBtn = cartBtn_ref.current;
      const cartCount = cartCount_ref.current;
  
      gsap.timeline()
        .fromTo(cartBtn, { yPercent: 0, rotation: 0 },
        {
          duration: 0.9,
          ease: "cartButtonWiggle",
          yPercent: 20,
          rotation: -5,
          // clearProps: 'transform'
        })
        .fromTo(cartCount, { rotation: 0 }, {
          duration: 1.3,
          ease: "power4.out",
          rotation: 720,
          y: -30,
        }, "<")
        .to(cartCount, {
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
          y: 0,
          clearProps: 'transform',
          onStart: () => {
            fireEvent('cart-add');
          },
          onComplete: () => {
            enableClick();
          },
        }, "-=0.6");
    };

    // ------------------------------------------


    const animate = () => {
      const item = refs.current[idx];

      const state = Flip.getState(item);
      // debugger;
    
      setInCartClass(item, true);
      cartBtnWrapper_ref.current.appendChild(item);
    
      // disable double click and set position for in-cart
      item.style.pointerEvents = 'none';
      item.style.position = 'absolute';
  
      Flip.from(state, {
        duration: 2, // 0.5
        ease: "back.in(0.8)",
        onComplete: () => {
          cartItems_ref.current.appendChild(item);
    
          updateCartIcon(item);
          cartBtnAnimation();
  
          remove(idx);
        }
      });
    };
    animate();

    // ------------------------------------------

  };

  // --------------------------------------------
  // --------------------------------------------
  // --------------------------------------------
  // --------------------------------------------
  // --------------------------------------------
  // --------------------------------------------
  // --------------------------------------------
  // --------------------------------------------
  // --------------------------------------------


  // Below is port from the react-gsap-flip demo (Cart.js) for grid collapse after items has been added to cart.

  // -Generalize to use state:

  const createColor = (category) => ({'shoes': 'red', 'shirts': 'blue', 'pants': 'green'}[category]);
  const createRow = (category) => ({ id: uuid(), status: "entered", color: createColor(category), location: 'grid' });

  // STEP 1: Set up layout in state with grid items initialized
  const [layout, setLayout] = useState(() => ({
    items: products.map(({id, title, body, price, category, variants}) => {
      return {  product_id: id, title, body, price, category, variants, ...createRow(category) };
    }),
      // init(num_rows, null).map(() => createRow()) // create an array of lenth num_rows filled with null, then map over that array replacing each element with a row defined by createRow().
      // .reverse(),
    state: undefined
    }
  ));

  // --------------------------------------------

  // STEP 2: Create gsap.context in React state

  // Create the context
  //  -Add to it later via ctx.add(() => {...})
  const [ctx] = useState(() => gsap.context(() => {}));

  // --------------------------------------------

  // STEP 3: Set up cleanup

  useEffect(() => {
    return () => ctx.revert();
  }, []);

  // --------------------------------------------

  // STEP 5: Set up the container_ref with scoped selection via gsap.context

  const container_ref = useRef();
  const q = gsap.utils.selector(container_ref); // Returns a selector function that's scoped to a particular Element, meaning it'll only find descendants of that Element .

  // --------------------------------------------

  // STEP 6: 
  //  --  remove() sets layout.items[n].status   = 'exiting' 
  //  --  remove() sets layout.items[n].location = 'cart'    which is used to remove the row lf layout.items[n] from state in removeItems (at end of useLayoutEffect)
  //  --  NOT used for move to cart animation

  const remove = (row_idx) => { 

    // set the item as exiting which will add a CSS class for display: none;
    // item.status = "exiting"; // JOSH: This mutates the state!!!!
    
    setLayout((prev_layout) => { // Update state without mutation:

      const { items: prev_items } = prev_layout;

      // const row_index = prev_items.findIndex(r => r.id === item.id);

      // Update the row
      const clone = [...prev_items];
      clone[row_idx].status   = 'exiting';
      clone[row_idx].location = 'cart';


      const new_layout = {...{
        items: clone,
        state: Flip.getState(q(".box")),
      }};

      console.log('new_layout: ', new_layout);

      return new_layout;
    });

  };

  // --------------------------------------------

  // STEP 7: removeItems extracts the rows from layout.items that have location: 'cart' (as opposed to location: 'grid') - it does NOT remove filtered grid items.
  //  --Called at end of useLayoutEffect()

  const removeItems = useCallback((moved_items) => {
      
    if (!moved_items.length) return;
    
    setLayout((prev) => {{

      const non_moved_items = prev.items.filter((item) => {
        return !moved_items.includes(item);
      });

      return {
        state: Flip.getState(q(".box")),
        items: non_moved_items,
      };
    }});
  }, [q]);

  // --------------------------------------------

  useLayoutEffect(() => {
    if (!layout.state) return;


    const duration = 0.5;

    // get the items that are exiting in this batch
    const moved = layout.items.filter(item => item.location === "cart");
    ctx.add(() => {
      
      // Flip.from returns a timeline
      const timeline = Flip.from(layout.state, {
        absolute: true, 
        ease: "power1.inOut",
        targets: q(".box"),
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

      timeline.add(() => removeItems(moved));
    });

  }, [ctx, layout, q]);

  // --------------------------------------------

  const [filter, setFilter] = useState(new Set(colors));

  // --------------------------------------------

  const applyFilter = (color) => {

    setFilter((prev) => {

      // - - - - - - - - - - - - - - - - - - - - 

      // Clone to avoid mutation
      const clone_prev_filters = new Set([...prev])
      if (prev.has(color))  clone_prev_filters.delete(color)
      if (!prev.has(color)) clone_prev_filters.add(color);

      // - - - - - - - - - - - - - - - - - - - - 

      setLayout((prev_layout) => { 

        const prev_items = prev_layout.items;
  
        const new_items = prev_items.map(prev_item => {        
          if (clone_prev_filters.has(prev_item.color))  return { ...prev_item, status: 'entered' }
          if (!clone_prev_filters.has(prev_item.color)) return { ...prev_item, status: 'exiting' };
        })
  
        const new_layout = {
          items: new_items,
          state: Flip.getState(q('.box')),
        };
  
        return new_layout;
      });

      // - - - - - - - - - - - - - - - - - - - - 

      return clone_prev_filters;

      // - - - - - - - - - - - - - - - - - - - - 
    });
  };

  // --------------------------------------------

  return (
    <div id="app-main" ref={container_ref}>

      <Filter filter={filter} setFilter={setFilter} applyFilter={applyFilter} />

      <Grid { ...{
          refs,
          layout,
          addToCart,
          remove
        } }
      />

      <Aside { ...{
          cartBtnWrapper_ref,
          cartBtn_ref,
          cartCount_ref,
          cartItems_ref
        } }
      />

    </div>
  );
}