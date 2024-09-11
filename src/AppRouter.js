import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './Components/Login';
import AboutUs from './Pages/AboutUs/AboutUs';
import EmmaTech from './Pages/EmmaTech/EmmaTech';
import ProductDetail from './Components/ProductDetails';
import Signup from './Components/Signup';
import Mattresses from './Pages/Products/Mattresses';
import Cart from './Pages/Products/Cart';
import Pillows from './Pages/Products/Pillows';
import Home from './Pages/Home/Home';
import Checkout from './Components/Checkout';
import PaymentPage from './Components/PaymentPage';
import AddressForm from './Components/AddressForm';
import Invoice from './Components/Invoice';
import ProfileEdit from './Components/ProfileEdit';
// import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import YourOrders from './Components/YourOrders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/pillows', element: <Pillows /> },
      { path: '/login', element: <Login /> },
      { path: '/mattresses', element: <Mattresses /> },
      { path: '/aboutus', element: <AboutUs /> },
      { path: '/EmmaTechnology', element: <EmmaTech /> },
      { path: '/product/:id', element: <ProductDetail /> },
      { path: '/cart', element: <Cart /> },
      { path: '/Signup', element: <Signup /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/payment', element: <PaymentPage /> },
      { path: '/address-form', element: <AddressForm /> },
      { path: '/orderdetails/:orderId', element: <Invoice /> },
      { path: '/reset-password', element: <ResetPassword /> },
      { path: '/your-orders', element: <YourOrders /> },
      { path: '/profile-edit', element: <ProfileEdit /> },
    ]
  }
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
