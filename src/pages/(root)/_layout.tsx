import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Layout() {
  return (
    <>
      <div className="absolute h-68 w-screen top-0  bg-#18125c -z-2" />
      <div className=" min-h-screen flex max-lg:flex-col ">
        <div>
          <NavBar />
          <SideBar />
        </div>
        <div className="w-full min-h-full flex flex-col">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
