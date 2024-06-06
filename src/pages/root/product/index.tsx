import { useLocation, useParams } from "react-router-dom"
import { getProduct } from "./_utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Button } from "primereact/button";
import { addToCart, useUserStore } from "../../../stores/user";
import { Skeleton } from "primereact/skeleton";
import { Rating } from "primereact/rating";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";


export default function Product(){
    const userStore = useUserStore()
    let { id } = useParams();
    const [quantity,setQuentity] = useState(1)
    const { isPending, data } = useQuery({
        queryKey: ["product"],
        queryFn: ()=> getProduct(id),
      });

      console.log(userStore.cart)
      if (isPending) return <div className="p5"><Skeleton className="w-full p5"/></div>

    return (
        <Card className="flex flex-col gap-4 shadow-none border ">
            
            <div className="grid grid-cols-2 gap-4">
                
                <img className="object-contain" src={data?.images.find(() => true)} alt={data?.title} />
                <div className="flex flex-col gap-4">
                <h2 className="my-8 text-12 font-bold">{data?.title}</h2>
                    <p className="text-6 font-bold">Price: ${data?.price}</p>
                    <p className="text-5">{data?.description}</p>
                    <p>Category: {data?.category}</p>
                    <Rating value={data?.rating} readOnly cancel={false}/>
                <div className="flex gap-4">
                <InputNumber value={quantity} onChange={(e) => setQuentity(e.value)} showButtons />
                <Button label="Add to cart" onClick={() => {addToCart({id:data?.id,price:data?.price,quantity:quantity})}} />
                </div>
                </div>
            </div>
        </Card>
    )
}