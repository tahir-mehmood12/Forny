import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Root from "./Pages/Root";
import PageNotFound from "./Pages/PageNotFound";
import Contact from "./Pages/Contact";
import Signup from "./Pages/signup/Signup";

import About from "./Pages/About";
import Cart from "./Pages/cart/Cart.jsx";
import Wishlist from "./Pages/Wishlist";

import Login from "./Pages/login/Login.jsx";
import Products from "./Pages/Products";
import WomenCollection from "./Pages/CatagoriesPages/WomenCollection";
import MenCollection from "./Pages/CatagoriesPages/MenCollection";
import KidsCollection from "./Pages/CatagoriesPages/KidsCollection";
import Heels from "./Pages/CatagoriesPages/Heels";
import Loafers from "./Pages/CatagoriesPages/Loafers";
import Sandals from "./Pages/CatagoriesPages/Sandals";
import Casual from "./Pages/CatagoriesPages/Casual";
import Football from "./Pages/CatagoriesPages/Football";
import Formal from "./Pages/CatagoriesPages/Formal";
import Running from "./Pages/CatagoriesPages/Running";
import Checkout from "./Pages/checkout/Checkout.jsx";
import Product from "./Components/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",

        children: [
          {
            index: true,
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
        ],
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: "women",
            element: <WomenCollection />,
          },
          {
            path: "men",
            element: <MenCollection />,
          },
          {
            path: "kids",
            element: <KidsCollection />,
          },
          {
            path: "heels",
            element: <Heels />,
          },
          {
            path: "loafers",
            element: <Loafers />,
          },
          {
            path: "sandals",
            element: <Sandals />,
          },
          {
            path: "casual",
            element: <Casual />,
          },
          {
            path: "football",
            element: <Football />,
          },
          {
            path: "formal",
            element: <Formal />,
          },
          {
            path: "running",
            element: <Running />,
          },
          {
            path: ":productSlug",
            element: <Product />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
