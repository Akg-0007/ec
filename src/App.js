import React from 'react';

import './App.css';
import ProductList from './features/product-list/productList';
import Cart from './features/cart/Cart';
import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "login",
    element: <Loginpage></Loginpage>
  },
  {
    path: "signup",
    element: <Signuppage></Signuppage>
  },
  {
    path: "cart",
    element: <Cart></Cart>
  },
  {
    path: "checkout",
    element: <Checkout></Checkout>
  },
]);


function App() {
  return (
    <div className="App">
     {/* <ProductList/> */}
     {/* <Home/> */}
     {/* <Loginpage></Loginpage> */}
     {/* <Signuppage></Signuppage>
      */}
        <RouterProvider router={router} />

    </div>
  );
}

export default App;
