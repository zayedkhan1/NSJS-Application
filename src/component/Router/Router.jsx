import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AboutOurs from "../RoutingPages/AboutOurs";
import Contact from "../RoutingPages/Contact";
import OurProject from "../Pages/OurProject";
import RecentNews from "../Pages/RecentNews";
import BecomeMember from "../RoutingPages/BecomeMember";

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
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/project',
          element:<OurProject></OurProject>
        },
        {
          path:'/news',
          element:<RecentNews></RecentNews>
        },
        {
          path:'/member',
          element:<BecomeMember></BecomeMember>
        }
    ]
  },
]);
export default router;