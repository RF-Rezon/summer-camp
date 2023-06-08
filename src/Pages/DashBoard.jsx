import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  const isAdmin = true;
  //   2 const [isAdmin] = useAdmin();
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2 " type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
        </div>
        <div className="drawer-side ">
          <ul className="menu p-4 w-80 h-full   text-base-content">
            <li>
              <Link to="adminhome">My selected Classes</Link>
            </li>
            <li>
              <Link to="additem">My Enrolled Classes</Link>
            </li>
            <li>
              <Link to="add_a_class">Add A Class</Link>
            </li>
            <li>
              <Link to="my_classes">My Classes</Link>
            </li>
            <li>
              <Link to="allusers">Manage Classes</Link>
            </li>

            <li>
              <Link to="userhome">Manage Users</Link>
            </li>

            {/* <li>
              <Link to="../">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <FaHamburger /> Menu
              </Link>
            </li>
            <li>
              <Link to="shop">
                <FaShoppingBag /> Shop
              </Link>
            </li>
            <li>
              <Link to="contact">
                <FaVoicemail /> Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
