import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main.jsx';
import About from "../pages/about/About.jsx";
import Shop from "../pages/shop/Shop.jsx";
import Blogs from "../pages/blogs/Blogs.jsx";
import Contact from "../pages/contact/Contact.jsx";
import OrderTrack from "../pages/orderTrack/OrderTrack.jsx";
import Login from "../pages/authentication/Login.jsx";
import Register from "../pages/authentication/Register.jsx";
import ForgotPassword from "../pages/authentication/ForgotPassword.jsx";
import ShopSingle from "../pages/SinglePage/ShopSingle.jsx";
import CompareProduct from "../pages/compareProduct";
import WishList from "../pages/wishlist";
import NotFound from "../pages/notFound/NotFound";
import Dashboard from "../layouts/dashboard/Dashboard.jsx";
import Profile from "../dashboard/pages/Profile.jsx";
import Products from "../dashboard/pages/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword/>
    },
    {
      path: '/product/:id',
      element: <ShopSingle/>
    },
    {
      path: '/compare',
      element: <CompareProduct/>
    },
    {
      path: '/wishlist',
      element: <WishList/>
    },
    {
      path: '*',
      element: <NotFound/>
    },
    ]
  },
  {
    path:'/dashboard',
    element: <Dashboard/>,
    children: [
      {
        path:'profile',
        element: <Profile/>
      },
      {
        path: 'products',
        element: <Products/>
      },
    ]
  }
]);
export default router