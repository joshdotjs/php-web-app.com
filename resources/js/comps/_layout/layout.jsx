import React from "react";
import { AuthContextProvider } from "../../context/auth-ctx";
import { CartContextProvider } from "../../context/cart-ctx";

import Header from "../header/_header";
import Cart from "../cart/_cart";

// ==============================================

export default function Layout({ children }) {

  return (

    <AuthContextProvider>
      <CartContextProvider>

      <Header />

      <Cart />

      <main id="page">
        {children}
      </main> 
      
      </CartContextProvider>
    </AuthContextProvider>
  );

}