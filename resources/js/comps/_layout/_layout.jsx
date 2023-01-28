import React from "react";
import { AuthContextProvider } from "@/context/auth-ctx";
import { CartContextProvider } from "@/context/cart-ctx";

import Header from './Header';
import Cart from './Cart';
import Notifications from './notify/notify';

// ==============================================

export default function Layout({ children, name, restrict }) {

  return (

    <AuthContextProvider { ...{ restrict } }>
      <CartContextProvider>

        <Header />

        <Cart />

        <Notifications />

        <main id="page" className={name}>
          {children}
        </main> 
      
      </CartContextProvider>
    </AuthContextProvider>
  );

}