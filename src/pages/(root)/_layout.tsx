import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Toast, ToastMessage } from "primereact/toast";
import { useRef } from "react";

export default function Layout() {
  const toast = useRef<Toast>(null)
  return (
    <>
      <div className="absolute h-68 w-screen top-0  bg-#18125c -z-2" />
      <Toast ref={toast} position="bottom-right" />
      <div className=" min-h-screen flex max-lg:flex-col ">
        <div>
          <NavBar />
          <SideBar />
        </div>
        <div className="w-full min-h-full flex flex-col">
          <Outlet context={{ toast:(toastData: ToastMessage | ToastMessage[]) =>
                  toast.current?.show(toastData), }} />
          <Footer />
        </div>
      </div>
    </>
  );
}
