import NotFound from "../components/HeaderFooter/ErrorPage/NotFound";
import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main.jsx';
import About from "../pages/about/About.jsx";
import Shop from "../pages/shop/Shop.jsx";
import Blogs from "../pages/blogs/Blogs.jsx";
import Contact from "../pages/contact/Contact.jsx";
import OrderTrack from "../pages/orderTrack/OrderTrack.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about-us',
        element: <About />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path:'/contact-us',
        element:<Contact/>
    },
    {
      path: '/order-track',
      element: <OrderTrack/>
    }
    ]
  },
]);
export default router