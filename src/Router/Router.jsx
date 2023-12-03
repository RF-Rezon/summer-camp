import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ManageClassesByAdmin from "../Components/SideNavs/Admin/ManageClassesByAdmin";
import Add_A_Class from "../Components/SideNavs/Instructor/Add_A_Class";
import My_Classes from "../Components/SideNavs/Instructor/My_Classes";
import Cancel from "../Components/SideNavs/Student/Cancel";
import Payment from "../Components/SideNavs/Student/Payment";
import Success from "../Components/SideNavs/Student/Success";
import User_Enrolled_Classes from "../Components/SideNavs/Student/User_Enrolled_Classes";
import User_Selected_Class from "../Components/SideNavs/Student/User_Selected_Class";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import Classes from "../Pages/Classes";
import DashBoard from "../Pages/DashBoard";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Instructors from "../Pages/Instructors";
import ManageUsersByAdmin from "./../Components/SideNavs/Admin/ManageUsersByAdmin";
import AdminPrivate from "./Private/AdminPrivate";
import BasicCheck from "./Private/BasicCheck";
import InstructorPrivate from "./Private/InstructorPrivate";
import StudentPrivate from "./Private/StudentPrivate";

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
        element: <div  className="container mx-auto"><Instructors /></div>,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "payment",
        element: <StudentPrivate><Payment /></StudentPrivate> ,
      },
      {
        path: "success",
        element: <StudentPrivate><Success /></StudentPrivate> ,
      },
      {
        path: "cancel",
        element: <StudentPrivate><Cancel /></StudentPrivate> ,
      },
      {
        path: "/dashboard",
        element: <BasicCheck> <DashBoard /> </BasicCheck>,
        children: [
          {
            path: "add_a_class",
            element: <InstructorPrivate><Add_A_Class /></InstructorPrivate> ,
          },
          {
            path: "my_classes",
            element: <InstructorPrivate><My_Classes /></InstructorPrivate> ,
          },
          {
            path: "manageClassesByAdmin",
            element: (
              <AdminPrivate>
                <ManageClassesByAdmin />
              </AdminPrivate>
            ),
          },
          {
            path: "manageUsersByAdmin",
            element: (
              <AdminPrivate>
                <ManageUsersByAdmin />
              </AdminPrivate>
            ),
          },
          {
            path: "userSelecetedClass",
            element: <StudentPrivate><User_Selected_Class /></StudentPrivate> ,
          },
          {
            path: "enrolledClasses",
            element: <StudentPrivate><User_Enrolled_Classes /></StudentPrivate> ,
          },
        ],
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);

export default Router;
