v1: base port
v2: constant height & gap
v3: actual product data in each card  (note that the text content inside the card limits the amount of shinking - this was solved in my toy version)
v4: send in variants to each card
v5: choose the variant
  --Radio buttons wired up but the variant data is not used besides to highlight the radio button selected.
v6: scale item correctly
v7: size of card takes up entire size of grid card (works in flip-toy-6--cart-5)
v8: adding item data to cart - synchronized via local storage (see notes below)
v9: handling duplicate cart items => increase quantity
v10: checkout button
v11: variant images
v12: fixed styling (height of grid and dynamicly selected height of grid item to ensure scaling during add-to-cart FLIP animation does not distort grid-item)
v13: filter on categories
v14: card styling



Scrapped:
v8: move layout from <Cart /> into cart-ctx

NOTES:
  -DO NOT SPEND ANY MORE TIME DEBUGGING - JUST USE THE LOCAL STORAGE SOLUTION
  -The moment I try to use cartContext in App.jsx there is a glitch 
    directly between onStart() and onComplete() of the onEnter() callback
    in useLayoutEffect() for <Cart />.
 -I am trying to update cart context to store the newly added product to cart state
    where I am trying to retreive it in the actual cart in order to get the cart data into the cart drawer.
 -Proposed solution:
  --Don't use cartContext to store state.
  --Instead add to cart local storage locally inline-line and then trigger an event
    and handle the event in place.


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

// ==============================================

// -Goal of Nike grid:
//  --Two columnns
//  --width of each column takes up either 1/2 or 1/3
//    ---Mobile:   1/2
//    ---Desktop:  1/3
//  --The filter column on left just display none's on mobile and the option to show the filter drawer is shown on mobile.
//  --There is a button to hide the filter column on desktop, which just slides in or out the filter & changes the width of the grid container accordingly.
//  --In each card there will be a smaller set of images with the images of the variants when you hover on the item.
//  --You select the variant and then select add-to-cart button.
//    ---If you click on the picture then it takes you to the product details page.
//    ---Hover is disabled on mobile, and therefore you need to click to the product detail page to add to the card on mobile.
//    ---Therefore, the add to cart animation is simply disabled on mobile => MUCH simpler.
//    ---Employers will be using desktop, so we optimize for that. 

// -Solutions to Nike grid:
//  --1. flex on container with min-height: 100vh and flex-wrap: wrap, while flex-items (cards) have width: 33.33% or 50% based on desktop or mobile.
//    .container {
//      display: flex;
//      border: 10px solid misyrose;
//      min-height: 100vh;
//      flex-wrap: wrap;
//      align-content: flex-start; // don't stretch flex-items
//      .item {
//        @media (max-width: $desktop) { width: 33.33% }
//        @media (min-width: $desktop) { width: 50%; }
//      }
//    }
//    ---Cons of this method: Perentage  Need to do width: calc( 50% - 2 * margin )
//        ----Could do flex: 1, but then the number of columns is not specified.
//        ----Could do flex-grow: 1 with flex-basis: 300px (some ideal size), but then we are hard coding with the flex-basis value.
//
//  --2. grid
