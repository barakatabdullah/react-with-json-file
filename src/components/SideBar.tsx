import { Link} from "react-router-dom";
import { Avatar } from "primereact/avatar";
import NavMenu from "./NavMenu";

export default function SideBar() {

  return (
    <div className="h-screen w-40 max-lg:hidden">
      <div className=" bg-white z-100 flex flex-col items-center justify-center h-screen fixed left-0 top-0 bottom-0 border">
        <div className="pt-10 w-16">
          <Link to="/">
            <img src="/logo.svg" alt="Acara" />
          </Link>
        </div>
        <NavMenu/>
        <div className="pb-10 w-14">
          <Link to="/">
            <Avatar className="w-full h-full aspect-square object-contain rounded-2 overflow-hidden" image="/photos/profile.png"  />
          </Link>
        </div>
      </div>
    </div>
  );
}
