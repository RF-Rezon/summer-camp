import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Add_A_Class from "../Components/SideNavs/Instructor/Add_A_Class";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import DashBoard from "../Pages/DashBoard";
import ErrorPage from "../Pages/ErrorPage";
import Instructors from "../Pages/Instructors";
import My_Classes from "../Components/SideNavs/Instructor/My_Classes";
import Classes from "../Pages/Classes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
        children:[
          {
            path:"add_a_class",
            element: <Add_A_Class />
          },
          {
            path:"my_classes",
            element: <My_Classes />
          },
          {
            path:"*",
            element: <ErrorPage />
          }
        ]
      },
    ],
  },
]);

export default Router;
