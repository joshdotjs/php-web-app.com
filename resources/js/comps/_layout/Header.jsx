import React, { useState, useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';

import Notifications from './notify/notify';
import ButtonDrawer from './button-drawer';
import BagSVG from './bag-svg';

import AuthContext from '@/context/auth-ctx';
import CartContext from '@/context/cart-ctx';

import Cart, { openCart } from './Cart';
import Drawer, { openDrawer, closeDrawer } from './drawer-nav';

import { transitionTextColor } from '@/util/transition';

import './_header.scss';

// ==============================================

const Item = ({ title, department, img, close }) => {
  return (
    <div className="group relative">
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
        <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." className="object-cover object-center" />
      </div>
      <a 
        // href={`${PHP.site_url}/store`}
        onClick={() => {
          // setFiltersLS({ 
          //   department: department.toLowerCase(), 
          //   tag: null,
          //   category: title.toLowerCase(),
          // });
        }}

        className="mt-6 block text-sm font-medium text-gray-900"
      >
        <span className="absolute inset-0 z-10" aria-hidden="true"></span>
        { title }
      </a>
      <p aria-hidden="true" className="mt-1 text-sm text-gray-500">Shop now</p>
    </div>
  );
};

// ==============================================

const Panel = ({ refs, department, close, idx }) => {

  // --------------------------------------------

  return (
    <div // Tab panel, show/hide based on tab state.
      ref={el => refs.current[idx] = el}
      className="space-y-12 px-4 py-6" 
      aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex="0"
      style={{
        position: 'absolute',
        width: '100%',
        opacity: 1,
        height: 'fit-content'
      }}
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-10">

        <Item title='Shoes'  { ...{ department, close } } />
        <Item title='Shirts' { ...{ department, close } } />
        <Item title='Pants'  { ...{ department, close } } />
        <Item title='Hats'   { ...{ department, close } } />

      </div>
    </div>
  );
};

// ==============================================

const NavDrawerContents = () => {

  // --------------------------------------------

  const { logged_in, user, logOut } = useContext(AuthContext);

  // --------------------------------------------

  const [active_panel, setActivePanel] = useState(0);

  const panel_refs = useRef([]);
  const panels_ref = useRef();
  const tabs_ref = useRef();

  // -Add height on the panel dynamically to simulate 
  //  document flow of absolutely postiioned panels:
  useEffect(() => {
    const panels = panel_refs.current; // absolute
    const panel = panels_ref.current;  // relative (container)
    const tabs = tabs_ref.current;     // tabs above panel

    const { height: height1 } = panels[0].getBoundingClientRect();
    const { height: height2 } = tabs.getBoundingClientRect();

    panel.style.minHeight = `${height1 + height2}px`;
  }, []);

  // --------------------------------------------

  const clickHandler = (idx) => {

    setActivePanel(idx);

    panel_refs.current.forEach((ref, i) => {
      if (i !== idx) {
        gsap.to(ref, { 
          opacity: 0, 
          onComplete: () => ref.style.display = 'none',
        });
      }
    });

    const ref = panel_refs.current[idx];
    gsap.to(ref, {
      opacity: 1,
      onStart: () => ref.style.display = 'block',
    });

  };

  // --------------------------------------------

  return (
    <div 
      onClick={(e) => e.stopPropagation()} // close if click outside of drawer only.  Don't close if click inside of opened drawer.
      // className="fixed overflow-hidden"
      style={{ 
        minHeight: '100vh',
        background: 'hotpink',
        width: '100%',
      }}
    >
    

    <div className={
      // relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl
      ` 
        bg-white w-full max-w-xs flex flex-col
         overflow-y-scroll
      `
      }
    >

      {/* =============================== */}

      {/* <!-- Panels --> */}
      <div 
        ref={panels_ref} 
        className="mt-2" 
        style={{ 
          position: 'relative', 
          // height is added dynamically
        }}
      >

        {/* --------------------------------------- */}
        
        <div // Tab buttons (Men / Women) 
          ref={tabs_ref}
          className="border-b border-gray-200">
          <div className="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                            
            { [{ department: 'Men' }, { department: 'Women' }].map(({ department }, idx) => (
              <button 
                key={`tab-button-${idx}`}
                onClick={() => clickHandler(idx)}
                className={
                  `
                    ${transitionTextColor(active_panel === idx, 'text-indigo-600 border-indigo-600', 'text-gray-900 border-transparent')}
                    border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium
                  `
                }
                // style={
                //   active_panel === idx ? {
                //   textDecoration: 'underline',
                //   textUnderlineOffset: '0.45rem'
                // } : {}}
                aria-controls="tabs-1-panel-1" role="tab" type="button"
              >
                { department }
              </button>
            )) }

          </div>
        </div>

        {/* --------------------------------------- */}

        <Panel refs={panel_refs} idx={0} department="Men" close={closeDrawer} />

        {/* --------------------------------------- */}
        
        <Panel refs={panel_refs} idx={1} department="Women" close={closeDrawer} />

        {/* --------------------------------------- */}
      </div>

      {/* =============================== */}

      <div // Navlinks (About / Contact)
        className="space-y-6 border-t border-gray-200 py-6 px-4">
        <div className="flow-root">
          <a 
            // href={site_urls.about} 
            // href={`${PHP.site_url}/about`}
            className="-m-2 block p-2 font-medium text-gray-900">About</a>
        </div>

        <div className="flow-root">
          <a 
            // href={site_urls.contact} 
            // href={`${PHP.site_url}/contact`}
            className="-m-2 block p-2 font-medium text-gray-900">Contact</a>
        </div>
      </div>

      {/* =============================== */}

      <div  // Navlinks (Login / Register)
        className="space-y-6 border-t border-gray-200 py-6 px-4">



          { logged_in && 
              <>
                <div className="flow-root">              


                  {/* { user.admin === false && <a href={`${PHP.site_url}/orders`} className="-m-2 block p-2 font-medium text-gray-900">{user?.username}</a> } */}
                  {/* { user.admin === true  && <a href={`${PHP.site_URL}/admin-dashboard`} className="-m-2 block p-2 font-medium text-gray-900">{user?.username}</a> } */}

                </div>
                <div className="flow-root">
                  <button
                    // onClick={async () => {
                    //   // console.log('signing out...');
                    //   // const data = await fetchGET('http://jadefse.local/wp-json/josh/v1/signout');
                    //   const data = await fetchGET(`${PHP.rest_url}/signout`);
                    //   // console.log('resonse: ', data);
                    //   // window.location.pathname = '/';
                    //   window.location.pathname = `${PHP.site_url}/`;
                    // }}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Sign out
                  </button>
                </div>
              </>
            }
            { !logged_in && 
            <>
              <div className="flow-root">              
                <a 
                  // href={`${PHP.site_url}/auth-register`}
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <a 
                  // href={`${PHP.site_url}/auth-login`} 
                  onClick={() => closeDrawer()} 
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
            </>
          }

      </div>

      {/* =============================== */}
    
    </div>

  </div>
  );
};

// ==============================================

export default function Header({ header_ref }) {

  // --------------------------------------------

  const { logged_in, user, logOut } = useContext(AuthContext);

  // --------------------------------------------

  const {
    cart_btn_ref,
    cart_icon_target_ref,
    cart_count_ref,
  } = useContext(CartContext);
  
  // --------------------------------------------
  
  const Card = ({ title }) => (
    <div className="bg-green-500">
      <img src="/img/products/clothes/women/Dri-FIT-One-blue.webp" className="rounded-md overflow-hidden mb-2" />
      <h5 className="mb-0">{title}</h5>
      <p>Shop now</p>
    </div>
  );

  // --------------------------------------------
  
  return (
    <>
      <Cart />

      <Drawer title="" position="left" classes="w-[300px]" portal_id='#portal-nav-drawer'>
      </Drawer>

      <header 
        id="navbar" 
        ref={header_ref}
        style={{ position: 'fixed' }}
      >

        {/* ----------------------------------- */}

        <nav id="top">
          <div className="gutter">
            <div>
              <a href="/">Store Name</a>
            </div>


            <ul id="nav-links">

              <li className="nav-link">
                <a href="/store">Store</a>
              </li>

              {
                logged_in 
                ? 
                (
                  <>
                    <li className="nav-link" onClick={logOut}>
                      Log out
                    </li>

                    <li className="nav-link">
                      <a href="/admin-dashboard">{user?.email}</a>
                    </li>
                  </>
                )
                : 
                (
                  <>
                    <li className="nav-link">
                      <a href="/auth/register">Register</a>
                    </li>

                    <li className="nav-link">
                      <a href="/auth/login">Log in</a>
                    </li>
                  </>
                )
              }

            </ul>
          </div>
        </nav>

        {/* ----------------------------------- */}

        <nav id="bottom">
          <div className="gutter">

            <h2 id="logo">Logo</h2>


            <div // buttons container
              className="flex  justify-between  w-[100px]  md:w-fit"
            >

              <div 
                id="cart-btn"
                ref={cart_btn_ref}
                onClick={() => {
                  console.log('clicked cart button');
                  openCart({});
                }}
              >

                <div ref={cart_icon_target_ref} id="hidden-target"></div>

                <BagSVG />

                <div ref={cart_count_ref} id="cart-count" style={{ opacity: 0 }}>
                  <span style={{ color: 'white' }} ></span>
                </div>
                
              </div>

              <ButtonDrawer onClick={() => openDrawer()}/>

            </div>

          </div>
        </nav>

        {/* ----------------------------------- */}

      </header>
    </>
  );
}

// ==============================================