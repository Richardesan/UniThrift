import React from 'react'
import ReactDOM from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Login from "./Pages/Login/Login.jsx";
import Register from './Pages/Register/Register.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.jsx';
import ResetPassword from './Pages/ResetPassword/ResetPassword.jsx';
import Settings from './Pages/Settings/Settings.jsx';
import Performace from './Pages/Perfomance/Performace.jsx';
import Feedback from './Pages/Feedback/Feedback.jsx';
import MyProduct from "./Pages/myProduct/MyProduct.jsx"
import Message from "./Pages/Messages/Messages.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/profile",
    element: <Profile />
  }
  ,
  {
    path: "/forgot-pw",
    element: <ForgotPassword />
  },
  {
    path: "/reset-pw",
    element: <ResetPassword />
  }
  ,
  {
    path: "/settings",
    element: <Settings />
  }
  ,
  {
    path: "/perfomance",
    element: <Performace />
  }
  ,
  {
    path: "/feedback",
    element: <Feedback/>
  },
  {
    path: "/my-product",
    element: <MyProduct />
  }
  ,
  {
    path: "/messages",
    element: <Message />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
);


