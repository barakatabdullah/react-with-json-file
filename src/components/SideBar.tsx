import { Menu } from "primereact/menu";
import NavItemTemplate from "./NavItemTemplate";

const items = [
  {
    label: "Dummy Json",
    items: [
      {
        label: "Home",
        icon: "i-tabler-home",
        template: NavItemTemplate,
        page: "/",
      },

      {
        label: "Add Car",
        icon: "i-tabler-plus",
        template: NavItemTemplate,
        page: "/car/add",
      },
    ],
  },
];
export default function SideBar() {
  return (
    <div className="h-screen w-15rem">
      <div className="flex justify-center h-screen fixed">
        <div className="relative card  h-full">
          <Menu
            pt={{
              root: { className: "rounded-l-0! h-full" },
            }}
            model={items}
            className=" w-15rem"
          />

          <div
            className="absolute bottom-0 w-[90%] flex items-center cursor-pointer hover:bg-indigo-50 p-3 m-2 rounded-2 parent:mt-auto"
            onClick={() => {}}
          >
            <i className="i-tabler-logout" />
            <span className="ml-2">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
