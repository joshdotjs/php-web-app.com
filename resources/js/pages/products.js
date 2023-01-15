import { 
  listen, listenAll,
  qs, qsAll,
  createElement, resetElement,
} from '../util/dom';
import { fetchGET } from '../util/fetch';
import { fireEvent } from '../util/custom-event';
import { getCartLS, setCartLS } from '../util/local-storage';
import { lo, lg, lr, lb, ly } from '../util/log';

// ==============================================

lg('VITE: resources/js/pages/products.js');

// ==============================================

let cart = []; // { id, title, body, qty }
const setCart = (new_cart) => cart = new_cart;
const cart_elem = qs('#cart');

// ==============================================

// -On page load read the cart from local storage
//  and set into local state.
addEventListener('DOMContentLoaded', () => {

  // -The 'load' event is fired when the whole page 
  //  has loaded, including all dependent resources 
  //  such as stylesheets, scripts, iframes, and images. 
  // -This is in contrast to 'DOMContentLoaded', 
  //  which is fired as soon as the page DOM has
  //  been loaded, without waiting for resources 
  //  to finish loading.

  // Page load:
  //  -Initial load of cart from LS to set local 'cart' state in this component.
  //  -Set event listeners for cart events (fired from anywhere) to update 'cart' state in this component.
  // useEffect(() => {

    // console.log('loading cart');

    // Check local storage for cart:
    const updateLocalCartState = () => {

      const ls_cart = getCartLS(); // returns null if the key in local-storage does not exist
      if (ls_cart === null) {
        // console.log('cart does not exist in local storage');
        
        // -Create local storage key 'cart' with empty (stringified) array
        setCartLS([]);

      } else {
        // console.log('grabbing cart from local storage...');
        setCart(ls_cart);
      }
    };
    updateLocalCartState();
    updateCartUI();

    // const handleEventCartAdd = () => {
    //   lp("item added to cart (event listening in Header component in /src/comps/header/header.js [rendered in theme's header.php file])");
    //   updateLocalCartState();
    //   openDrawerCart();
    // };

    // const handleEventCartRemove = () => {
    //   lc("item removed to cart (event listening in Header component in /src/comps/header/header.js [rendered in theme's header.php file])");
    //   updateLocalCartState();
    // };
    
    // window.addEventListener('cart-add', handleEventCartAdd);
    // window.addEventListener('cart-remove', handleEventCartRemove);


    // return () => {
    //   window.removeEventListener('cart-add', handleEventCartAdd);
    //   window.removeEventListener('cart-remove', handleEventCartRemove);
    // };
  // }, []);


});

// ==============================================

const addToCart = (product) => {

  const { id } = product;

  console.clear();
  console.log('cart: ', cart, '\nid: ', id);

  const idx = cart.findIndex(x => id === x.id);

  if (idx < 0) {
    lo('addToCart() - new line item');
    const new_cart = [...cart, { ...product, qty: 1 }]; // clone local cart state and add a new product item to the array with the cloned cart.
    setCartLS(new_cart);
    setCart(new_cart);
  } else {
    ly('addToCart() - updating quantity');
    const new_cart = [...cart]; // clone local cart state via deep copy.
    new_cart[idx] = {...cart[idx], qty: cart[idx].qty + 1}; // update specific item's quantity in the cloned cart array.
    setCartLS(new_cart);
    setCart(new_cart);
  }

  // - - - - - - - - - - - - - - - - - - - - - 

  updateCartUI();

  fireEvent('cart-add');

  // - - - - - - - - - - - - - - - - - - - - - 
};

// ==============================================

const removeFromCart = (id) => {
  lg('removeFromCart()');
  const new_cart = cart.filter(item => item.id !== id);
  console.log('new_cart: ', new_cart);

  setCartLS(new_cart);
  setCart(new_cart);
  fireEvent('cart-remove');
  updateCartUI();

  // if (new_cart.length < 1) {
  //   closeCart();
  // }
}

// ==============================================

const updateCartUI = () => {

  resetElement(cart_elem);

  cart.forEach(({ id, title, body, qty }) => {

    const div    = createElement('div');
    const h2     = createElement('h2');
    const p1     = createElement('p');
    const p2     = createElement('p');
    
    
    // -Remove from cart button:
    const button = createElement('z-button');
    button.setAttribute('title', 'Remove');
    listen({
      elem: button, 
      event: 'click', 
      callback: () => removeFromCart(id),
    });

    h2.textContent = title;
    p1.textContent = body;
    p2.textContent = `qty: ${qty}`;

    div.append(title);
    div.append(p1);
    div.append(p2);
    div.append(button);

    div.classList.add('bg-orange-200');
    div.classList.add('mt-4');

    cart_elem.append(div) 
  });

};

// ==============================================

listen({
  selector: '#get-products-btn', 
  event: 'click', 
  callback: async () => {
    const data = await fetchGET('/get-products');
    console.log('data: ', data);
  },
});

// ==============================================

listenAll({
  selector: '.add-to-cart-btn',
  event: 'click',
  callback: async (e) => {

    // -Event.currentTarget always refers to the element 
    //  to which the event handler has been attached, 
    // -Event.target identifies the element on which 
    //  the event occurred and which may be its descendant.
    const elem = e.currentTarget;

    const { id } = elem.dataset;

    // GET PRODUCT BY ID HERE!!!
    // GET PRODUCT BY ID HERE!!!
    // GET PRODUCT BY ID HERE!!!
    // GET PRODUCT BY ID HERE!!!
    // GET PRODUCT BY ID HERE!!!
    // GET PRODUCT BY ID HERE!!!
    console.log('adding to cart, id: ', id);

    const product = await fetchGET(`/get-product/${id}`);
    console.log('data: ', product);

    addToCart(product);

    console.log('cart: ', cart);

  },
});

// ==============================================

listen({
  selector: '#send-to-checkout-btn', 
  event: 'click', 
  callback: async () => {


   // --------------------------------------------

   const submitOrderToNode = async () => {

    // fetch(`http://localhost:4242/create-checkout-session`, {
    // fetch(`http://localhost:9000/api/checkout/stripe-checkout`, {
    fetch(`https://ecommerce-nodejs.herokuapp.com/api/checkout/stripe-checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ cart }),
    })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({ url }) => {
        window.location = url
      })
      .catch(e => {
        console.error(e.error)
      });

  };

  // --------------------------------------------

  await submitOrderToNode();


  },
});

// ==============================================