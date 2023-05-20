import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SingUp/SignUp";
import AllToys from "../pages/allToys/allToys";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import AddToys from "../pages/AddToys/AddToys";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'blogs',
            element: <Blogs></Blogs>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
            path: 'allToys',
            element: <AllToys></AllToys>
        },
        {
            path: 'view/:id',
            element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
            path: 'addToys',
            element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
            path: 'myToys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        }
      ]
    },
  ]);


  export default router;