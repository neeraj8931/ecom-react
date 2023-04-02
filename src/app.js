import { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Category from "./components/Category";
import Homepage from "./components/Homepage";
import Header from "./components/Header";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";

export const CartDrawer = createContext(null);
export const CartProducts = createContext(null);

const AppLayout = () => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  console.log(cart);
  const toggleCart = () => {
    setShowCart((currentStatus) => (currentStatus ? false : true));
  };

  return (
    <>
      <CartDrawer.Provider value={{ toggleCart, showCart }}>
        <CartProducts.Provider value={{ cart, setCart }}>
          <Header />
          <Cart />
        </CartProducts.Provider>
      </CartDrawer.Provider>

      <div className="w-4/5 mx-auto max-w-screen-2xl">
        <CartProducts.Provider value={{ cart, setCart }}>
          <Outlet />
        </CartProducts.Provider>
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/collections/:id",
        element: <Category />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
  {
    path:"/cart",
    element:<Cart />
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
