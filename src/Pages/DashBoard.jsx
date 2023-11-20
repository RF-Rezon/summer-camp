import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import Spninner from "../Utils/Spninner";

const DashBoard = () => {
 
  const [is_Admin, is_Admin_Loading] = useAdmin();
  const [is_Instructor, is_Instructor_Loading] = useInstructor();

  if (is_Admin_Loading) return <Spninner/>
  if (is_Instructor_Loading) return <Spninner/>

  return (
    <>
      <div className="md:mt-24 mt-52">
        <div className="drawer lg:drawer-open min-h-screen my-24">
          <input id="my-drawer-2 " type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet />
          </div>
          <div className="drawer-side ">
            <ul className="menu p-4 w-60 h-full  text-base-content">
              {is_Admin ? (
                <div>
                  <li>
                    <Link className="text-gray-800 font-medium bg-teal-400 hover:bg-teal-600 hover:text-teal-100 my-3" to="manageClassesByAdmin">Manage Classes</Link>
                  </li>
                  <li>
                    <Link className="text-gray-800 font-medium bg-teal-400 hover:bg-teal-600 hover:text-teal-100 my-3" to="manageUsersByAdmin">Manage Users</Link>
                  </li>
                </div>
              ) : is_Instructor ? (
                <div>
                  <li>
                    <Link className="text-gray-800 font-medium bg-teal-400 hover:bg-teal-600 hover:text-teal-100 my-3" to="add_a_class">Add A Class</Link>
                  </li>
                  <li>
                    <Link className="text-gray-800 font-medium bg-teal-400 hover:bg-teal-600 hover:text-teal-100 my-3" to="my_classes">My Classes</Link>
                  </li>
                </div>
              ) : (
                <div>
                  <li>
                    <Link className="text-gray-800 font-medium bg-teal-400 hover:bg-teal-600 hover:text-teal-100 my-3" to="userSelecetedClass">My selected Classes</Link>
                  </li>
                  <li>
                    <Link className="text-gray-800 font-medium bg-teal-400 hover:bg-teal-600 hover:text-teal-100 my-3" to="enrolledClasses">My Enrolled Classes</Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;