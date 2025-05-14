import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";

const HomeLayout = () => {
  return (
    <div className="max-w-full mx-auto min-h-screen bg-white">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
