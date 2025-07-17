import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AboutOurs from "../RoutingPages/AboutOurs";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout> ,
    errorElement: <h2 className="text-3xl font-bold text-red-500 text-center">Error!!</h2>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/aboutOurs',
          element:<AboutOurs></AboutOurs>
        }
    ]
  },
]);
export default router;