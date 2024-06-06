import { CartItem } from "../../../../typs";
import { ItemTemplate } from "./ItemTemplate";

export default function CartList(items: CartItem[]) {
    const ListTemplate = ({ items }: { items: CartItem[]; }) => {

        if (!items || items.length === 0) return null;

        const list = items.map((product: CartItem, index: number) => {
            return <div key={index}>{ItemTemplate(product, index)}</div>;
        });

        return <div className="grid grid-nogutter">{list}</div>;
    };

    return <ListTemplate items={items} />;
}