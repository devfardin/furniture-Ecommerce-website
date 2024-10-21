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
import Products from "../dashboard/admin/pages/Products.jsx";
import AddProduct from "../dashboard/admin/pages/AddProduct.jsx";
import ProductCategories from "../dashboard/admin/pages/ProductCategories.jsx";
import Orders from "../dashboard/admin/pages/Orders.jsx";
import InventoryManage from "../dashboard/admin/pages/InventoryManage.jsx";
import AdminDashboard from "../dashboard/admin/pages/AdminDashboard.jsx";
import DiscountsCoupons from "../dashboard/admin/pages/DiscountsCoupons.jsx";
import ReviewsFeedback from "../dashboard/admin/pages/ReviewsFeedback.jsx";
import Support from "../dashboard/admin/pages/Support.jsx";
import UserManage from "../dashboard/admin/pages/UserManage.jsx";
import Posts from "../dashboard/admin/pages/Posts.jsx";
import PostCategories from "../dashboard/admin/pages/PostCategories.jsx";
import Notification from "../dashboard/admin/pages/Notification.jsx";

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
        path:'/dashboard',
        element: <AdminDashboard/>
      },
      {
        path:'profile',
        element: <Profile/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'add-product',
        element: <AddProduct/>
      },
      {
        path: 'product-categories',
        element: <ProductCategories/>
      },
      {
        path: 'orders',
        element: <Orders/>
      },
      {
        path: 'inventory-management',
        element: <InventoryManage/>
      },
      {
        path: 'discounts-coupons',
        element: <DiscountsCoupons/>
      },
      {
        path: 'reviews-feedback',
        element: <ReviewsFeedback/>
      },
      {
        path: 'support',
        element: <Support/>
      },
      {
        path: 'users',
        element: <UserManage/>
      },
      {
        path: 'posts',
        element: <Posts/>
      },
      {
        path: 'posts-categories',
        element: <PostCategories/>
      },
      {
        path: 'notification',
        element: <Notification/>
      },
    ]
  }
]);
export default router