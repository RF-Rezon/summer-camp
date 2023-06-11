import { Link, Outlet } from "react-router-dom";
import UseAuth from "../Hooks/useAuth";

const DashBoard = () => {
  const { user, loading } = UseAuth();

  // const [is_Admin, is_Admin_Loading] = useAdmin();
  // const [is_Instructor, is_Instructor_Loading] = useInstructor();

  const is_Admin = true;
  const is_Instructor = true;

  // if (is_Admin_Loading) return <Spninner/>
  // if (is_Instructor_Loading) return <Spninner/>

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2 " type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
        </div>
        <div className="drawer-side ">
          <ul className="menu p-4 w-60 h-full   text-base-content">
            {/* {is_Admin ? (
              <div>
                <li>
                  <Link to="manageClassesByAdmin">Manage Classes</Link>
                </li>
                <li>
                  <Link to="manageUsersByAdmin">Manage Users</Link>
                </li>
              </div>
            ) : is_Instructor ? (
              <div>
                <li>
                  <Link to="add_a_class">Add A Class</Link>
                </li>
                <li>
                  <Link to="my_classes">My Classes</Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="userSelecetedClass">My selected Classes</Link>
                </li>
                <li>
                  <Link to="enrolledClasses">My Enrolled Classes</Link>
                </li>
              </div>
            )} */}

            <div>
              <li>
                <Link to="manageClassesByAdmin">Manage Classes</Link>
              </li>
              <li>
                <Link to="manageUsersByAdmin">Manage Users</Link>
              </li>
            </div>

            <div>
              <li>
                <Link to="add_a_class">Add A Class</Link>
              </li>
              <li>
                <Link to="my_classes">My Classes</Link>
              </li>
            </div>

            <div>
              <li>
                <Link to="userSelecetedClass">My selected Classes</Link>
              </li>
              <li>
                <Link to="enrolledClasses">My Enrolled Classes</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
