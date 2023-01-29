import React, { useState, useEffect, useRef, useCallback, useLayoutEffect, useContext } from 'react';
import uuid from 'react-uuid';
import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";

import CartContext from '@/context/cart-ctx';

import Grid from './Grid';
import Filter from './Filter';

import { fireEvent } from '@/util/events';
import { disableClick, enableClick } from '@/util/dom';
import { lc, lg, lo, lp, lb, lr, ly } from '@/util/log';

gsap.registerPlugin(
  Flip, 
  CustomEase, 
  CustomWiggle, 
  ExpoScaleEase, 
  RoughEase, 
);

CustomWiggle.create("cartButtonWiggle", { wiggles: 8, type: "easeOut" });

// ==============================================

export default function App({ products }) {

  // --------------------------------------------

  const refs = useRef([]);

  const {
    setNumCartItems,
    cart_btn_ref,
    cart_icon_target_ref,
    cart_count_ref,
  } = useContext(CartContext);
  
  // --------------------------------------------

  const addToCartAnim = (idx) => {
    
    // ------------------------------------------

    disableClick();
    
    // ------------------------------------------
    
    const cartBtnAnimation = () => {
  
      const cartBtn = cart_btn_ref.current;
      const cartCount = cart_count_ref.current;


      // TODO: Update the cart count UI here (imperatively)
  
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
            setTimeout(() => {
              fireEvent('cart-add');
            }, 250);
          },
          onComplete: () => {
            enableClick();
          },
        }, "-=0.6");
    };

    // ------------------------------------------


    const animate = () => {
      const item = refs.current[idx];
      console.log('item: ', item);
           
      // Grab height from rendered element - currently computed relative to current location.
      const height = item.offsetHeight;
      const width  = item.offsetWidth;

      // Explicitly set inline styles of height so it won't change when re-positioned
      item.style.height = `${height}px`;
      item.style.width  = `${width}px`;

      // Follow same procedure for the grid container:
      const grid_items = document.querySelector('#grid-items');
      console.log('grid items: ', grid_items);
      const grid_height = grid_items.offsetHeight;
      grid_items.style.height = `${grid_height}px`;


      // Don't fade out variant images
      //  -remove all events on element via clone hack
      //  -gets rid of tl.reverse() in onMouseLeave event
      const variants_reveal = item.querySelector('.back.radio-container');
      const old_element = variants_reveal;
      const new_element = variants_reveal.cloneNode(true);
      old_element.parentNode.replaceChild(new_element, old_element);


      // take snapshot of state before DOM change:
      const state = Flip.getState(item);
    
      // Make DOM change:
      cart_icon_target_ref.current.appendChild(item); // move .cart-child
    
      // disable double click and set position for in-cart:
      item.style.pointerEvents = 'none';
      item.style.position = 'absolute';
  
      // apply FLIP:
      Flip.from(state, {
        duration: 0.8, // 0.5
        ease: "back.in(0.8)",
        scale: true,
        absolute: true,
        onComplete: () => {
          
          cartBtnAnimation();
          setNumCartItems(prev => prev + 1);
  
          // Collapse hole in grid:
          remove(idx);

          // -Hide the contents inside the hidden target
          // item.style.visibility = 'hidden';

          // -just remove item from dom:
          item.remove();
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
  const createRow = (category) => ({ id: uuid(), status: "entered", location: 'grid' });

  // STEP 1: Set up layout in state with grid items initialized
  const [layout, setLayout] = useState(() => ({
    items: products.map(({id, title, body, price, category, product, variants}) => {
      // return {  product_id: id, title, sub_title: product.sub_title, body, price, price_compare: product.price_compare, category, variants, ...createRow(category) };
      return { product, variants, ...createRow(category) };
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

  const [filter, setFilter] = useState(new Set(['shoes', 'clothes', 'accessories']));

  // --------------------------------------------

  const applyFilter = (category) => {
    setFilter((prev) => {

      // - - - - - - - - - - - - - - - - - - - - 

      console.log('prev_filter: ', prev);

      // -Keep height of grid constant through FLIP animation:
      const grid_items = document.querySelector('#grid-items');
      console.log('grid items: ', grid_items);
      const grid_height = grid_items.offsetHeight;
      grid_items.style.height = `${grid_height}px`;

      // - - - - - - - - - - - - - - - - - - - - 

      // Clone to avoid mutation
      const clone_prev_filters = new Set([...prev])
      if (prev.has(category))  clone_prev_filters.delete(category)
      if (!prev.has(category)) clone_prev_filters.add(category);

      // - - - - - - - - - - - - - - - - - - - - 

      setLayout((prev_layout) => { 

        const prev_items = prev_layout.items;

        
  
        const new_items = prev_items.map(prev_item => {

          const product_category = prev_item.product.category;

          if (clone_prev_filters.has( product_category))  return { ...prev_item, status: 'entered' }
          if (!clone_prev_filters.has(product_category))  return { ...prev_item, status: 'exiting' };
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
          addToCartAnim,
        } }
      />

    </div>
  );
}

// ==============================================