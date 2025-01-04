import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import CheckOut from "../components/CheckOut/CheckOut";
import Bookings from "../components/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import UpdateBookings from "../components/UpdateBookings/UpdateBookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/singUp",
          element:<SignUp></SignUp>
        },
        {
          path:"/checkOut/:id",
          element:<CheckOut></CheckOut>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"/bookings",
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path:"/update/:id",
          element:<UpdateBookings></UpdateBookings>
        }
      ]
    },
  ]);

  export default router;