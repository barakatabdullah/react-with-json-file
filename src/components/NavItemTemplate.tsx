import { useNavigate } from "react-router-dom";


export default function NavItemTemplate(item: any) {
    const navigate = useNavigate();

    return (
        <div
            className="flex align-center cursor-pointer hover:bg-indigo-50 p-3 m-2 rounded-2"
            onClick={() => navigate(item.page)}
        >
            <i className={item.icon} />
            <span className="ml-2">{item.label}</span>
        </div>
    );
}