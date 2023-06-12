import React from "react";
import { Outlet } from "react-router-dom";
import ThemeToggle from "../../Components/ThemeToogle/ThemeToogle";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";

const HomeLayout = () => {
  return (
    <div className="max-w-7xl mx-auto py-3 min-h-screen dark:bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Nav />
      <Outlet />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default HomeLayout;
