import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from '@/comps/_layout/_layout';

import MainApp from './app-main/App';
import CartApp from './app-cart/App';

import './.scss';

// ==============================================

const main_root = document.querySelector('#root-main');
if(main_root){

  window.API_URL         = main_root.dataset.apiUrl;
  window.API_URL_LARAVEL = main_root.dataset.apiUrlLaravel;
  const products_SSR  = JSON.parse(main_root.dataset.products); // encodes variants

  createRoot(main_root).render(
    <Layout>
      <MainApp products={products_SSR} />
    </Layout>
  );
}

// ==============================================

const cart_root = document.querySelector('#root-header'); // TODO: Change to #root-cart
if(cart_root){
  createRoot(cart_root).render(<CartApp />);
}

// ==============================================

// -Different animations in cart flow:
//
//  ****** <App /> *********************
//
//  * * * Sequence 1: Add To Cart * * * 
//
//  1. addToCart() - FLIP - move .box-child into #hidden-target via appendChild()
//      -onStart:
//        --disableClick()
//      -onComplete:
//        --cartBtnAnimation()  -- bounce icon
//        --remove(idx)         -- collapse grid
//  2. cartBtnAnimation() - Bounce Icon
//      -in-place (non FLIP) animation of cart icon (bounce / wiggle)
//      -onStart:
//        --fireEvent('cart-add')   =>  sequence 3: <Cart />
//      -onComplete:
//        --enableClick()
//  3. remove(idx) - FLIP - Collapse Grid
//      -step 1: update these (cloned):
//        --layout.items[n].status = 'entered' / 'exiting'
//        --layout.items[n].location = 'grid' / 'cart'
//      -step 2: Grab state with Flip.getState('.box')
//      -step 3: setLayout({ items: clone, state: Flip.getState('.box') })
//      -step 4: useLayoutEffect()
//      -step 5: const moved = layout.items.filter(item => item.location === "cart");
//      -step 6: const timeline = Flip.from(layout.state, {
//                                  targets: q(".box"),
//                                  onEnter / onLeave: [scale & opacity] - grid collapse
//      -step 7: timeline.add(() => removeItems(moved));
//      -step 8: removeItems(moved_items)
//           const removeItems = useCallback((moved_items) => {
//               
//            setLayout((prev) => {{
//
//              const non_moved_items = prev.items.filter((item) => {
//                return !moved_items.includes(item);
//              });
//          
//              return {
//                state: Flip.getState(q(".box")),
//                items: non_moved_items,
//              };
//            }});
//          }, [q]);
//
//
//
//  * * * Sequence 2: Filter * * *
//
//  1. applyFilter(color)
//      -step 1: add / remove color from filters Set()
//      -step 2: apply status: 'entered' / 'exiting' based on if filters.has( layout.items[n].color )
//      -step 3: setLayout( items: new_items,  state: Flip.getState(q(.box)) )
//      -step 4: useLayoutEffect() onEnter / onLeave


//  ****** <Cart /> *********************
//
//  * * * Sequence 3: 1D Cart Insert * * * 
//  



//
//  * * * Sequence 4: 1D Cart Remove * * * 
//

// -Two things that link the animations together:
//  1.  .box
//  2.  .exiting