import { Button } from "primereact/button";
import { CartItem } from "../../../../typs";
import { removeFromCart } from "../../../../stores/user";
import { useQuery } from "@tanstack/react-query";
import { Card } from "primereact/card";
import { getProduct } from "../../product/_utils";
import { queryClient } from "../../../../config/queryClient";

export function ItemTemplate(item: CartItem,index:number) {
    const {data } = useQuery({
        queryKey: ["product",index],
        queryFn: ()=> getProduct(item.id),
      });

    return <Card className="shadow-none! border">
        <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-4 items-center">
                <div className="h-full rounded-2 border aspect-square">
                    <img className="h-20 object-contain" src={data?.images?.find(() => true)} />
                </div>
                <div className="flex flex-col" >
                    <span className="text-xl font-bold">
                        {data?.title}
                    </span>
                    <span>
                        ${data?.price}
                    </span>
                </div>
            </div>

            <div className="flex gap-4 items-center">
            <div>
            quantity:{item.quantity}
                </div>
                <div>
                    total:${data?.price * item.quantity}
                </div>
                <Button
                icon="i-tabler-edit"
                link
                />
            <Button
                icon="i-tabler-trash"
                link
                onClick={async ()=>{
                    await removeFromCart(item)
                    queryClient.invalidateQueries({ queryKey: ['product'] })
                }}
                />
            </div>
        </div>
    </Card>;
}