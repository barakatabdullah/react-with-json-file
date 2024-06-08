import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-screen h-20 lg:hidden">
      <div className="bg-white h-20 z-100 flex items-center justify-between w-screen fixed left-0 top-0 rhight-0 border">
        <div className="container mx-auto flex items-center justify-between max-sm:px-6">
          <div className="w-12">
            <Link to="/">
              <img src="/logo.svg" alt="Acara" />
            </Link>
          </div>
          <div className="h-12 flex gap-4">
            <div className="flex items-center">
              <Sidebar
                className="w-40"
                visible={visible}
                onHide={() => setVisible(false)}
              >
                <div className=" flex flex-col items-center justify-center h-full ">
                  <div className="pt-10 w-16">
                    <Link to="/">
                      <img src="/logo.svg" alt="Acara" />
                    </Link>
                  </div>
                  <NavMenu />

                </div>
              </Sidebar>
              <Button
                outlined
                icon="i-tabler-menu-2"
                onClick={() => setVisible(true)}
              />
            </div>
            <Link to="/">
              <Avatar
                className="w-full h-full aspect-square object-contain rounded-2 overflow-hidden"
                image="/photos/profile.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
