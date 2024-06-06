import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";

export default function Layout() {
  return (
    <div className=" min-h-screen flex max-lg:flex-col ">
      <div>
      <NavBar />
        <SideBar />
      </div>
      <div className="p-6 w-full">
        <Outlet />
      </div>
    </div>
  );
}
