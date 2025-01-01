import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

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
        }
      ]
    },
  ]);

  export default router;