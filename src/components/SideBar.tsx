
import { Menu } from "primereact/menu";

import NavItemTemplate from "./NavItemTemplate";
import { useNavigate } from "react-router-dom";



const items = [
    {
        label: 'Dummy Json',
        items: [
            {
                label: 'Home',
                icon: 'i-tabler-home',
                template: NavItemTemplate,
                page: '/',

            },

            {
                label: 'Cart',
                icon: 'i-tabler-shopping-cart',
                template: NavItemTemplate,
                page: '/cart',

            },
            {
                label: 'Checkout',
                icon: 'i-tabler-check',
                template: NavItemTemplate,
                page: '/checkout',

            },
            {
                label: 'Add Product',
                icon: 'i-tabler-plus',
                template: NavItemTemplate,
                page: '/product/add',

            },
        ]
    },



];
export default function SideBar() {
    const navigate = useNavigate();
    return (
        <div className="h-screen w-15rem">

            <div className="flex justify-center h-screen fixed">
                <div className="relative card  h-full">
                    <Menu pt={{
                        root: { className: 'rounded-l-0! h-full' },
                    }} model={items} className=" w-15rem" />

                    <div
                        className="absolute bottom-0 w-[90%] flex items-center cursor-pointer hover:bg-indigo-50 p-3 m-2 rounded-2 parent:mt-auto"
                        onClick={() => { 
                            localStorage.removeItem('token');
                            localStorage.removeItem('name');                            
                            navigate('/auth/login') }}
                    >
                        <i className="i-tabler-logout" />
                        <span className="ml-2">Logout</span>
                    </div>

                </div>
            </div>
        </div>
    )
}