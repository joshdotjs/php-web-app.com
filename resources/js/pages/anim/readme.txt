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
v11: ...styling...


Scrapped:
v8: move layout from <Cart /> into cart-ctx






TODO: 
v?: ...cartCtx.addToCart() places the item into cart context using logic from currently broken v8
v?: ...place item data in the cart (select variant and click 'add-to-cart')...



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