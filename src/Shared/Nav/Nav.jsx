import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/useAuth";

const Nav = () => {
  const { user, LogOut } = UseAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to log out surely??`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        LogOut()
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: `Logged Out Sucessfully`,
            }),
              navigate("/");
          })
          .catch((error) => {
            console.log("logged out problem", error);
          });
      }
    });
  };
  return (
    <div>
      <header className="bg-zinc-900 border-white border-2 py-16 md:py-10 my-4 md:mb-10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex md:flex-row flex-col h-16 items-center justify-between gap-4">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" to="/">
                <span className="sr-only">Home</span>
                <p className="text-2xl font-semibold text-teal-600">SOUNDSCAPE</p>
                <span className="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>
              </Link>
            </div>

            <div>
              <nav aria-label="Global">
                <ul className="flex items-center gap-8 text-sm">
                  <li>
                    <Link className="text-gray-500 transition hover:text-gray-300" to="/">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link className="text-gray-500 transition hover:text-gray-300" to="/instructors">
                      Instructors
                    </Link>
                  </li>

                  <li>
                    <Link className="text-gray-500 transition hover:text-gray-300" to="/classes">
                      Classes
                    </Link>
                  </li>

                  {user && (
                    <>
                      <li>
                        <Link className="text-gray-500 transition hover:text-gray-300 text-red" to="/dashboard">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link className="avatar" to="/">
                          {user?.photoURL && (
                            <div className="w-12 rounded-full">
                              <img src={user.photoURL} />
                            </div>
                          )}
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>

            <div className="flex items-center">
              {!user ? (
                <div>
                  <Link
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow cursor-pointer"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow cursor-pointer"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
