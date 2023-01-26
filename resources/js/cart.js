import { fireEvent } from '@/util/custom-event';
import { 
  getLS, setLS, removeLS,
  getCartLS, setCartLS, 
  updateCartLS
  // getFiltersLS, setFiltersLS
 } from '@/util/local-storage';


// ==============================================

 const addToCartLS = ({ product, variant }) => {

  console.log('cart.js -- addToCart() -- product: ', product, '\nvariant: ', variant);

  const { id: variant_id } = variant;

  // -Step 1: get cart from LS:
  // -Step 2: add item to local cart
  //  --2.1: If item is in already in cart then increment count.
  // -Step 3: update cart LS
  // -Step 4: fire event
  // -Step 5: listen for event and handle in <Cart />


  // Step 1:
  const prev_cart = getCartLS();
  // -if cart-ls not set then prev_cart === null  =>  idx===undefined

  // Step 2:
  const idx = prev_cart?.findIndex(line => line?.variant.id === variant_id);
  
  let new_cart;

  if (idx === undefined) {
    new_cart = [{ product, variant, qty: 1 }];
  } else if (idx < 0) {
    // lo('addToCart() - new line item');
    new_cart = [...prev_cart, { product, variant, qty: 1 }]; 
  } else {
    // ly('addToCart() - updating quantity');
    new_cart = [...prev_cart]; // clone local cart state via deep copy.
    new_cart[idx] = {...prev_cart[idx], qty: prev_cart[idx].qty + 1}; // update specific item's quantity in the cloned cart array.        
  }

  // Step 3:
  setCartLS(new_cart);

  // Step 4:
  fireEvent('cart-add');
};

// ==============================================

export { addToCartLS };