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
import Filters from './filters/filters';

import { fireEvent } from '@/util/events';
import { disableClick, enableClick } from '@/util/dom';
import { lc, lg, lo, lp, lb, lr, ly } from '@/util/log';
import { fetchGET2, fetchPOST2 } from '@/util/fetch';
import { set2arr } from '@/util/transform';

gsap.registerPlugin(
  Flip, 
  CustomEase, 
  CustomWiggle, 
  ExpoScaleEase, 
  RoughEase, 
);

CustomWiggle.create("cartButtonWiggle", { wiggles: 8, type: "easeOut" });

// ==============================================

export default function Page({ products_SSR, num_products_SSR }) {

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

  const product2layoutItem = ({ product, variants }) => ({ product, variants, id: uuid(), status: "entered", location: 'grid' });

  // STEP 1: Set up layout in state with grid items initialized
  const [layout, setLayout] = useState(() => ({
    items: products_SSR.map(({product, variants}) => {
      return product2layoutItem({ product, variants });
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

  const removeItems = useCallback((items_to_remove) => {
      
    if (!items_to_remove.length) return;

    // -this callback cannot be async => 
    setLayout((prev) => {{

      const non_removed_items = prev.items.filter((item) => {
        return !items_to_remove.includes(item);
      });

      return {
        state: Flip.getState(q(".box")),
        items: non_removed_items,
      };
    }});
  }, [q]);

  // --------------------------------------------

  const timeline_ref = useRef(null);

  // --------------------------------------------

  useLayoutEffect(() => {
    if (!layout.state) return;


    const duration = 0.5;

    // get the items that are exiting in this batch
    // const moved = layout.items.filter(item => item.location === "cart");
    const moved = layout.items.filter(item => item.status === "exiting");

    ctx.add(() => {
      
      // Flip.from returns a timeline
      // const timeline = Flip.from(layout.state, {
      timeline_ref.current = Flip.from(layout.state, {
        absolute: true, 
        ease: "power1.inOut",
        targets: q(".box"),
        scale: true,
        // simple: true,
        onEnter: elements => {
          return gsap.fromTo(elements, { 
            opacity: 0,
            scale: 0,
          }, { 
            opacity: 1,
            scale: 1,
            delay: 0.2,
            duration
          });
        },
        // absoluteOnLeave: true,
        onLeave: elements => {
          return gsap.to(elements, { 
            opacity: 0, 
            scale: 0,
            duration,
            onComplete: () => {
              lg('onLeave() - onComplete()');
            },
          });
        },
        duration,
      });

      timeline_ref.current.add(() => removeItems(moved));
    });

  }, [ctx, layout, q]);

  // --------------------------------------------

  const getProducts = async ({ filter, page_num, sort_type }) => {
    // const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products`;
    const url = `${API_URL_LARAVEL}/api/filter-products`;
    const sort_col = {'Name':  'title', 'Price': 'price'}[sort_type ? sort_type.title : 'Name'];
    const body = {
      categories: set2arr(filter?.category), 
      genders: set2arr(filter?.gender),
      page_num,
      sort_direction: sort_type ? sort_type.direction : 'DESC',
      sort_col,
    };
  
    const [data, error] = await fetchPOST2({ url, body });
    if (error) {
      debugger;
      alert(error);
    } else {

      const { products, num_products } = data;
      return { products, num_products };
    }
  };

  // --------------------------------------------

  // const sizes = ['sm', 'lg'];
  // const [selected_sizes, setSelectedSizes] = useState(new Set());
  const categories = ['shoes', 'clothes', 'accessories'];
  const genders = ['men', 'women', 'unisex'];
  const prices = ['25-50', '50-100', '100-150', '150-200', '200+'];

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

  // --------------------------------------------

  const applyFilter = async ({ type, option }) => {

    // -type: 'category' | 'gender' | 'price'
    // -option: 'shoes' (type: 'category')

    // -Keep height of grid constant through FLIP animation:
    const grid_items = document.querySelector('#grid-items');
    console.log('grid items: ', grid_items);
    const grid_height = grid_items.offsetHeight;
    grid_items.style.height = `${grid_height}px`;

    // - - - - - - - - - - - - - - - - - - - - - 

    let new_filter;
    if (filter.in_init_state[type]) {
      // -uncheck all and only check first selection:
      new_filter = { 
        ...filter, 
        [type]: new Set([option]), 
        in_init_state: { ...filter.in_init_state, [type]: false },
      };

    } else { // general (not first check and not uncheck all in group)
      let set = structuredClone(filter[type]);
      if ( set.has(option))
        set.delete(option);
      else 
        set.add(option);

      // all unchecked in group => check all in group!
      // -there is no instance where you would want to unselect all (e.g. shoes from no-genders)
      if( set.size === 0 ) {
        if (type === 'category') {
          set = new Set(categories);
        } else if (type === 'gender') {
          set = new Set(genders); 
        } else if (type === 'price') {
          set = new Set(prices); 
        }
      }

      new_filter = { ...filter, [type]: set };
    }

    // - - - - - - - - - - - - - - - - - - - - - 

    const prev_items = layout.items;
    
    // -step 4:
    const status_updated_items = prev_items.map(prev_item => {

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

    // - - - - - - - - - - - - - - - - - - - - - 

    console.clear();
    const { products: filtered_items_from_backend, num_products } = await getProducts({ filter: new_filter, page_num, sort_type });
    setNumProducts(num_products);
       
    // - - - - - - - - - - - - - - - - - - - - - 

    //  -Take the non_removed_items and compare it agains the items returned from the backend endpoint.
    //  -Take the union of the two arrays by appending onto the end of the array.
    //    --The reason we need to do this is because for the new items that are retrieved from 
    //      the backend there may be some that are already on the screen.

    // -O(n^2) comparison, but these two arrays will always be small (~10 elements in each array  =>  ~100 itterations)
    let filtered_items_from_backend_not_currently_in_UI = [];
    filtered_items_from_backend.forEach((item_from_backend) => {

      let is_item_in_UI = false;
      status_updated_items.forEach((status_updated_item) => {
        if ( status_updated_item.product.id === item_from_backend.product.id )
          is_item_in_UI = true;
      });

      if (!is_item_in_UI) {
        filtered_items_from_backend_not_currently_in_UI.push(item_from_backend);
      }
    });

    // console.log('filtered items (from backend): ', filtered_items_from_backend);
    // console.log('status_updated_items: ', status_updated_items);
    // console.log('filtered_items_from_backend_not_currently_in_UI: ', filtered_items_from_backend_not_currently_in_UI);

    const new_items_from_backend = filtered_items_from_backend_not_currently_in_UI.map(({product, variants}) => product2layoutItem({ product, variants }));
    console.log('new_items_from_backend: ', new_items_from_backend);
    
    // - - - - - - - - - - - - - - - - - - - - - 

    // -We only want 6 items per page
    const num_empty_cells = 6 - status_updated_items.filter(({status}) => status !== 'exiting').length;

    // - - - - - - - - - - - - - - - - - - - - - 

    const new_layout = {
      items: [ ...status_updated_items, ...new_items_from_backend.slice(0, num_empty_cells)], // items with status property updated
      state: Flip.getState(q('.box')),
    };
    setLayout(new_layout);
    
    // - - - - - - - - - - - - - - - - - - - - - 

    setFilter(new_filter);

    // - - - - - - - - - - - - - - - - - - - - - 

  };
  
  // --------------------------------------------
  
  const [show_filters, setShowFilters] = useState(true);
  const filters_container_ref = useRef(null);
  const grid_container_ref = useRef(null);
  
  // --------------------------------------------

  const [sort_type, setSortType] = useState(); // e.g. { title: 'Price',  sub_title: 'High-Low', type: 'DESC'  }
  // const [sort_type, setSortType] = useState({ 
  //   title: 'Name',  
  //   sub_title: 'A-Z', 
  //   direction: 'DESC', 
  // }); // e.g. { title: 'Price',  sub_title: 'High-Low', type: 'DESC'  }

  // --------------------------------------------

  const applySort = async ({ title, sub_title, direction  }) => {
    //
    // { title: string, sub_title: string, direction: string }
    //    -title:       'Price' | 'Name'
    //    -sub_title:   'low-high' | 'high-low' | 'A-Z' | 'Z-A'
    //    -dierction:   'ASC' | 'DESC'

    // - - - - - - - - - - - - - - - - - - - - - 
    
    lg('applySort()');

    // - - - - - - - - - - - - - - - - - - - - - 

    // -Keep height of grid constant through FLIP animation:
    const grid_items = document.querySelector('#grid-items');
    console.log('grid items: ', grid_items);
    const grid_height = grid_items.offsetHeight;
    grid_items.style.height = `${grid_height}px`;

    // - - - - - - - - - - - - - - - - - - - - - 

    const new_sort_type = { title, sub_title, direction };

    // - - - - - - - - - - - - - - - - - - - - - 

    const { products: filtered_items_from_backend, num_products } = await getProducts({ filter, page_num, sort_type: new_sort_type });
    setNumProducts(num_products);

    // - - - - - - - - - - - - - - - - - - - - - 

    const new_items_from_backend = filtered_items_from_backend.map(({product, variants}) => product2layoutItem({ product, variants }));

    // - - - - - - - - - - - - - - - - - - - - - 

    const new_layout = {
      items: new_items_from_backend,
      state: Flip.getState(q('.box')),
    };
    setLayout(new_layout);

    // - - - - - - - - - - - - - - - - - - - - - 
    
    setSortType(new_sort_type);

    // - - - - - - - - - - - - - - - - - - - - - 

  };

  // --------------------------------------------

  const [page_num, setPageNum] = useState(0); // 0 ... N-1
  const [num_products, setNumProducts] = useState(num_products_SSR);
  
  const updatePageNum = async (new_page_num) => {

    // - - - - - - - - - - - - - - - - - - - - - 

    // -Keep height of grid constant through FLIP animation:
    const grid_items = document.querySelector('#grid-items');
    console.log('grid items: ', grid_items);
    const grid_height = grid_items.offsetHeight;
    grid_items.style.height = `${grid_height}px`;

    // const boxes = grid_items.querySelectorAll('.box');
    // const box_height = `${boxes[0].offsetHeight}px`;
    // boxes.forEach((box) => {
    //   box.style.height = box_height;
    // });


    // - - - - - - - - - - - - - - - - - - - - - 

    const { products: filtered_items_from_backend, num_products } = await getProducts({ filter, page_num: new_page_num, sort_type });

    // - - - - - - - - - - - - - - - - - - - - - 

    const new_items_from_backend = filtered_items_from_backend.map(({product, variants}) => product2layoutItem({ product, variants }));

    // - - - - - - - - - - - - - - - - - - - - - 

    const new_layout = {
      items: new_items_from_backend,
      state: Flip.getState(q('.box')),
    };
    setLayout(new_layout);

    // - - - - - - - - - - - - - - - - - - - - - 

    setPageNum(new_page_num);
    setNumProducts(num_products);

    // - - - - - - - - - - - - - - - - - - - - - 

  };

  // --------------------------------------------

  return (
    <div id="grid-container" ref={container_ref} >

      <div id="grid-left" ref={filters_container_ref}>
        <Filters { ...{ filter,  categories, genders, prices, applyFilter } } />
      </div>

      <div id="grid-right" ref={grid_container_ref}>
        <Grid { ...{ 
          refs, 
          layout, 
          addToCartAnim, 
          setShowFilters, 
          filters_container_ref, grid_container_ref, container_ref,
          sort_type, applySort,
          page_num, updatePageNum, 
          num_products
        } } />
      </div>

    </div>
  );

  // --------------------------------------------
}

// ==============================================