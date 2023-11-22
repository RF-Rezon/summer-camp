import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/useAuth";
import { LuMusic } from "react-icons/lu";
import useSound from "use-sound";
import { useState } from "react";
import ClickSoundWrapper from "../../Sound/ClickSoundWrapper";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
  const soundUrl = "/public/music.mp3";
  const [isClicked, setIsClicked] = useState(false);

  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });

 if (isClicked == true) {
  play();
 }else{
  stop();
 }
 

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
          .catch((error) => {});
      }
    });
  };
  return (
    <div>
      <header className="fixed top-0 w-full z-50 bg-custom bg-opacity-90 border-white py-10 pb-28 border-b-[3px] md:pb-3 md:py-3 border-b-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex md:flex-row flex-col h-16 items-center justify-between gap-4">
            <motion.div whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }} className="md:flex md:items-center md:gap-12">
            <ClickSoundWrapper>
              <Link className="block text-teal-600" to="/">
                <span className="sr-only">Home</span>
                <p className="text-2xl font-semibold">SOUNDSCAPE</p>
                <span className="hidden h-1 w-10 rounded bg-black lg:block"></span>
              </Link>
              </ClickSoundWrapper>
            </motion.div>

            <div>  
              <nav aria-label="Global">
                <ul className="flex items-center md:gap-8 gap-4 text-sm">
                  <motion.li 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  >
                  <ClickSoundWrapper>
                    <NavLink
                      className="text-lg font-medium hover:font-semibold transition-all 0.3 sec ease-in-out"
                      exact activeClassName="active"
                      to="/"
                    >
                      Home
                    </NavLink>
                    </ClickSoundWrapper>
                  </motion.li>

                  <motion.li whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                  <ClickSoundWrapper>
                    <NavLink
                      className="text-lg font-medium hover:font-semibold transition-all 0.3 sec ease-in-out"
                      to="/instructors"
                      activeClassName="active"
                    >
                      Instructors
                    </NavLink>
                    </ClickSoundWrapper>
                  </motion.li>

                  <motion.li whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                  <ClickSoundWrapper>
                    <NavLink
                      className="text-lg font-medium hover:font-semibold transition-all 0.3 sec ease-in-out"
                      to="/classes"
                      activeClassName="active"
                    >
                      Classes
                    </NavLink>
                    </ClickSoundWrapper>
                  </motion.li>

                  <motion.li whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                  <ClickSoundWrapper>
                    <NavLink
                      className="text-lg font-medium hover:font-semibold transition-all 0.3 sec ease-in-out text-red"
                      to="/dashboard"
                      activeClassName="active"
                    >
                      Dashboard
                    </NavLink>
                    </ClickSoundWrapper>
                  </motion.li>
                  {user && (
                    <>
                      <motion.li whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                        <Link className="avatar" to="/">
                          {user?.photoURL && (
                            <motion.div whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-full">
                              <img src={user.photoURL} />
                            </motion.div>
                          )}
                        </Link>
                      </motion.li>
                    </>
                  )}
                </ul>
              </nav>
            </div>

            <div className="flex items-center mt-4 md:mt-0">
              {!user ? (
                <motion.div whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                  <ClickSoundWrapper>
                  <Link
                    className=" bg-teal-700 px-5 py-2.5 text-base font-medium shadow cursor-pointer"
                    to="/login"
                  >
                    Sign In
                  </Link>
                  </ClickSoundWrapper>
                </motion.div>
              ) : (
                <motion.div whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                  <ClickSoundWrapper>
                  <Link
                    className=" bg-teal-700 px-5 py-2.5 text-base font-medium shadow cursor-pointer"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </Link>
                  </ClickSoundWrapper>
                </motion.div>
              )}

              <div className="ml-5">
                <div className="h-10 w-10 bg-gray-800 cursor-pointer flex items-center justify-center rounded-full">
                  <div onClick={() => setIsClicked(!isClicked)}>
                    <LuMusic />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
