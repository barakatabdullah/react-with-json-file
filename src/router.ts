import {

    createBrowserRouter,

  } from "react-router-dom";
import Layout from "./pages/Layout";
import login from "./pages/root/auth/login";
import Home from "./pages/root";
import Product from "./pages/root/product";
import Cart from "./pages/root/cart";
import AddProduct from "./pages/root/product/add/index";
import Checkout from "./pages/root/checkout";



const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
        //   loader: homeLoader,
          Component: Home,
        },
        {
            path:"product",

            children:[
              {
                path:":id",
                Component: Product,
              },
              {
                path:"add",
                Component: AddProduct,
              },
            ]
          },
          {
            path:"cart",
            Component: Cart,
          },
          {
            path:"checkout",
            Component: Checkout,
          },
     
      ],
    },
    {
        path: "/auth",
        children: [
              {
                path:"login",
                Component: login,
              },
        ]
    }
  ]);

  export default router
  