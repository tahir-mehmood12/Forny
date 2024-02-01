import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Root from "./Pages/Root";
import PageNotFound from "./Pages/PageNotFound";
import Contact from "./Pages/Contact";
import Signup from "./Pages/signup/Signup";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
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
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
