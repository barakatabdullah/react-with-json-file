
import { DataView } from "primereact/dataview";
import { useUserStore } from "../../../stores/user";
import CartList from "./_components/ListTemplate";


export default function Cart() {
    const userStore = useUserStore();

    return (
        <div className="container mx-auto flex flex-col gap-4">
            <h2 className="my-8 text-5 font-bold">Cart</h2>
            <DataView
                value={userStore?.cart}
                listTemplate={CartList}
            />
        </div>
    );
}

