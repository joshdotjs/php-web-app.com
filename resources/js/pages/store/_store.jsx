import React, { useState, useEffect, useRef, useCallback, useLayoutEffect, useContext } from 'react';
import uuid from 'react-uuid';
import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";

import CartContext from '@/context/cart-ctx';
import { updateNumCartItems } from '@/context/cart-ctx/cart-fn';

import Grid from './grid';
import Checkboxes from '@/comps/forms/checkboxes-flip-layout/checkboxes';
import ChevronAnim from '@/comps/chevron-anim/chevron-anim';

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

export default function Page({ products }) {

  // --------------------------------------------

  const refs = useRef([]);

  const {
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
        duration: 0.8,
        ease: "back.in(0.8)",
        scale: true,
        absolute: true,
        onComplete: () => {
          
          cartBtnAnimation();
          // setNumCartItems(prev => prev + 1);
          updateNumCartItems();
  
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

  // STEP 1: Set up layout in state with grid items initialized
  const [layout, setLayout] = useState(() => ({
    items: products.map(({product, variants}) => {
      return { product, variants, id: uuid(), status: "entered", location: 'grid' };
    }),
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

  // const sizes = ['sm', 'lg'];
  // const [selected_sizes, setSelectedSizes] = useState(new Set());
  const categories = ['shoes', 'clothes', 'accessories'];
  const genders = ['men', 'women', 'unisex'];
  const prices = ['25-50', '50-100', '100-150', '150-200', '200+'];

  // const filter = {
  //   category: {
  //     state: category_filter,
  //     setState: setCategoryFilter,
  //   },
  //   gender: {
  //     state: gender_filter,
  //     setState: setGenderFilter,
  //   },
  //   price: {
  //     state: price_filter,
  //     setState: setPriceFilter
  //   },
  // };

  const [filter, setFilter] = useState({ // type => key, option => value
    category: new Set(categories),  // options 1
    gender:   new Set(genders),     // options 2
    price:    new Set(prices),      // options 3
    getNum(type) { return this[type].size; },
    in_init_state: {
      category: true, // this.category.size === categories.length (is Set this.category same size as the full array categories)
      gender:   true,
      price:    true
    },
    //  -start wil all-selected => don't display any checkmarks
    //  -when changed from true to false, we reset all sets
    // reset() { setFilter((prev) => ({ ...prev, category: new Set([]), gender: new Set([]), price: new Set([]) }));  },
    initialClick(type, option) { 
      this.reset();
      setFilter((prev) => ({ ...prev, [type]: new Set([option]) }));
     },
  });

  useEffect(() => {
    console.log('filter: ', filter);
  }, [filter]);

  const getNumActiveFilters = () => {
    let count = 0;
    for (let key in filter) {
      count += filter[key].size; 
    }
    return count;
  }

  // --------------------------------------------

  const applyFilter = ({ type, option }) => {

    // -type: 'category' | 'gender' | 'price'
    // -option: 'shoes' (type: 'category')

    // -Keep height of grid constant through FLIP animation:
    const grid_items = document.querySelector('#grid-items');
    console.log('grid items: ', grid_items);
    const grid_height = grid_items.offsetHeight;
    grid_items.style.height = `${grid_height}px`;

    // - - - - - - - - - - - - - - - - - - - - - 

    setFilter((prev) => { 
      
      console.log('prev.in_initial_state:', prev.in_initial_state);

      let new_filter;
      if (prev.in_init_state[type]) {
        // -uncheck all and only check first selection:
        new_filter = { 
          ...prev, 
          [type]: new Set([option]), 
          in_init_state: { ...prev.in_init_state, [type]: false },
        };

      } else { // general (not first check and not uncheck all in group)
        let set = structuredClone(prev[type]);
        if ( set.has(option))
          set.delete(option);
        else 
          set.add(option);

        // all unchecked in group => check all in group!
        if( set.size === 0 ) {
          if (type === 'category') {
            set = new Set(categories);
          } else if (type === 'gender') {
            set = new Set(genders); 
          } else if (type === 'price') {
            set = new Set(prices); 
          }
        }

        new_filter = { ...prev, [type]: set };
      }

      // -the callback passed into setFilter() is run asynchronously.
      // -We need the value of new_filter immediately inside setLayout()'s callback.
      // -Hence, just plop setLayout() right here.
      setLayout((prev_layout) => { 
  
        const prev_items = prev_layout.items;  
        
        // -step 4:
        const new_items = prev_items.map(prev_item => {
  
          const { product } = prev_item;
  
          const category = product['category'];
          const gender   = product['gender'];
          const price    = product['price']; 
  
          const category_set = new_filter['category'];
          const gender_set   = new_filter['gender'];
          const price_set    = new_filter['price'];
          
          //  -Filter on intersection of all filters 
          if (category_set.has(category) && gender_set.has(gender) /*&& price_set.has(price) */ ) {
            return { ...prev_item, status: 'entered' };
          }
          else { 
            return { ...prev_item, status: 'exiting' };
          }
        });
  
        const new_layout = {
          items: new_items,
          state: Flip.getState(q('.box')),
        };
  
        return new_layout;
      });

      return new_filter;
    });

    // - - - - - - - - - - - - - - - - - - - - - 

  };

  // --------------------------------------------

  return (
    <div id="grid-container" ref={container_ref} >

      <div id="grid-left">

        {/* <h5>Active filters: { getNumActiveFilters() }</h5> */}

        <ChevronAnim title="Category" num={filter.in_init_state['category'] ? 0 : filter.getNum('category')}>
          <Checkboxes type="category" options={categories} set={filter['categories']} applyFilter={applyFilter}>
          </Checkboxes>
        </ChevronAnim>
        
        <hr />

        <ChevronAnim title="Gender" num={filter.in_init_state['gender'] ? 0 : filter.getNum('gender')}>
          <Checkboxes type="gender" options={genders} set={filter['gender']} applyFilter={applyFilter}>
          </Checkboxes>
        </ChevronAnim>

        <hr />

        <button onClick={() => filter.reset()}>Reset</button>

        <hr />

        {/* <Checkboxes type="price" options={prices} set={price_filter} applyFilter={applyFilter}>
          Shop by Price
        </Checkboxes> */}

      </div>

      <div id="grid-right">
        <Grid { ...{
            refs,
            layout,
            addToCartAnim,
          } }
        />
      </div>

    </div>
  );

  // --------------------------------------------
}

// ==============================================