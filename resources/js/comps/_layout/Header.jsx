import React, { useContext } from 'react';

import Notifications from './notify/notify';
import ButtonDrawer from './button-drawer';
import BagSVG from './bag-svg';

import AuthContext from '@/context/auth-ctx';
import CartContext from '@/context/cart-ctx';

import Cart, { openCart } from './Cart';
import Drawer, { openDrawer } from '@/comps/_layout/drawer-nav';

import './_header.scss';

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

  return (
    <>
      <Cart />

      <Drawer title="Nav Drawer" position="left" classes="w-[200px]" portal_id='#portal-nav-drawer'>
        <div style={{ padding: '0 1rem', marginTop: '0.5rem'}}>
          
        </div>
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

              <ButtonDrawer onClick={openDrawer}/>

            </div>

          </div>
        </nav>

        {/* ----------------------------------- */}

      </header>
    </>
  );
}

// ==============================================