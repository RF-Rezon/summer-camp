import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Add_A_Class from "../DashBoardPages/Add_A_Class";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import DashBoard from "../Pages/DashBoard";
import ErrorPage from "../Pages/ErrorPage";

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
        path: "/dashboard",
        element: <DashBoard />,
        children:[
          {
            path:"add_a_class",
            element: <Add_A_Class />
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
