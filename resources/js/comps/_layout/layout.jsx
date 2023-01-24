import React from "react";
import { AuthContextProvider } from "@/context/auth-ctx";
import { CartContextProvider } from "@/context/cart-ctx";

import Header from "./header/_header";
import Cart from "./cart/_cart";

// ==============================================

export default function Layout({ children, name, restrict }) {

  return (

    <AuthContextProvider { ...{ restrict } }>
      <CartContextProvider>

      <Header />

      <Cart />

      <main id="page" className={name}>
        {children}
      </main> 
      
      </CartContextProvider>
    </AuthContextProvider>
  );

}