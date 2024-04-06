import { ProductProvider } from "../../context/productsContext";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="h-screen">
        <div className="h-fit">
          <Navbar />
        </div>
        <div className="h-[90%]">
          <ProductProvider>
            <Outlet />
          </ProductProvider>
        </div>
      </div>
    </>
  );
};

export default Layout;
