import HomePage from '../pages/HomePage.jsx';
import Books from '../components/books/books.jsx';
import BookDetails from '../components/books/BookDetails.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';
import FAQs from '../components/faq/FAQs.jsx';
import DevelopmentInProgress from '../pages/DevelopmentInProgress.jsx';
import { ROUTES } from './index.js';

import {
    createBrowserRouter,
    useParams,
} from "react-router-dom";
import MainLayout from '../layouts/MainLayout.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import url from './sites.js';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import Products from '../components/product-management/Products.jsx';
import Categories from '../components/product-management/Categories.jsx';
import Users from '../components/user-management/Users.jsx';
import NewProduct from '../components/product-management/NewProduct.jsx';
import Profile from '../components/profile/Profile.jsx';
import MyOrders from '../components/order-management/my-orders/MyOrders.jsx';

const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: ROUTES.HOME,
          element: <HomePage></HomePage>
        },
        {
          path: ROUTES.ABOUT,
          element: <DevelopmentInProgress pageName='About'></DevelopmentInProgress>
        },
        {
          path: ROUTES.BLOG,
          element: <DevelopmentInProgress pageName='Blog'></DevelopmentInProgress>
        },
        {
          path: ROUTES.FAQ,
          element: <FAQs></FAQs>,
          loader: ()=>fetch(`${url}/faq`)
        },
        {
          path: ROUTES.LOGIN,
          element: <Login></Login>
        },
        {
          path: ROUTES.REGISTER,
          element: <Register></Register>
        },
        {
          path: `${ROUTES.BOOKS}/:category?`,
          element: <Books></Books>,
          loader: ({params})=>fetch(`${url}/products/${params.category ? params.category : ''}`)
        },
        {
          path: `${ROUTES.BOOK_DETAIL}/:id`,
          element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
          loader: ({params})=>fetch(`${url}/product/${params.id}`)
        },
        {
          path: '*',
          element: <PageNotFound></PageNotFound>
        }
      ]
    },
    {
      path: ROUTES.DASHBOARD,
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
        {
          path: ROUTES.PROFILE,
          element: <Profile></Profile>
        },
        {
          path: ROUTES.WISHLIST,
          element: <div>Wishlist Page</div>
        },
        {
          path: ROUTES.ORDERS,
          element: <MyOrders></MyOrders>
        },
        {
          path: ROUTES.USERS,
          element: <Users></Users>,
          loader: ()=>fetch(`${url}/users`)
        },
        {
          path: ROUTES.ALL_PRODUCTS,
          element: <Products></Products>,
          loader: ()=>fetch(`${url}/products`)
        },
        {
          path: ROUTES.NEW_BOOK,
          element: <NewProduct></NewProduct>
        },
        {
          path: ROUTES.PRODUCT_CATEGORY,
          element: <Categories></Categories>,
          loader: ()=>fetch(`${url}/categories`)
        }
      ]
    }
]);

export default router

