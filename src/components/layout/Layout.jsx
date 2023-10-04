import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
