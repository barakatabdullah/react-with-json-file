import { useOutletContext, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "primereact/skeleton";
import { Card } from "primereact/card";
import { getCars } from "../_utils";
import { Boxes, Car as CarType } from "../../../global-env";
import Header from "../../../components/Header";
import { Image } from "primereact/image";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { toggleBookmark, useUserStore } from "../../../stores/user";
import Chat from "../../../components/Chat";
import { useState } from "react";


export default function Car() {
  const { id } = useParams();
  const { toast } = useOutletContext<Boxes>()
  const userStore = useUserStore();
  const [visible , setVisible]=useState(false);
  
  const { isPending, data } = useQuery({
    queryKey: ["car", id],

    queryFn: () => getCars(),
    select: (data) => data?.cars?.find((car: CarType) => car.id == Number(id)),
  });

  if (isPending)
    return (
      <div className="p5">
        <Skeleton className="w-full p5" />
      </div>
    );

  return (
    <div className="p12">
      <Chat visible={visible} setVisible={setVisible}/>
      <Header title="Car Details" />
      <div className="grid grid-cols-8 max-xl:grid-cols-6 gap-8 max-lg:grid-cols-4 max-sm:grid-cols-1">
        <div className="col-span-5 flex flex-col gap-6 max-xl:col-span-4 max-lg:col-span-2 max-sm:col-span-1">
          <div className="rounded-2 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={data?.thumbnail}
              alt={data?.title}
            />
          </div>
          <div className="grid grid-cols-3 gap2 max-sm:grid-cols-5">
            {data.images?.map((image: string, index: number) => (
              <div key={index} className="rounded-2 overflow-hidden">
                <Image
                  preview
                  className="w-full h-full "
                  imageStyle={{
                    aspectRatio: "1/1",
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 flex flex-col gap-6 max-xl:col-span-2 max-lg:col-span-2 max-sm:col-span-1">
          <Card title={data?.title} className=" shadow-none border">
            <div className="flex flex-col gap-6">
              <Rating readOnly cancel={false} value={data?.rating} />
              <div className="flex flex-col gap-2">
                <p className="text-4 text-gray">Description:</p>
                <p className="text-5">{data?.description}</p>
              </div>
            </div>
          </Card>
          <div className="grid grid-cols-3 gap-4">
            <Card className="flex flex-col gap-4 shadow-none border col-span-1">
              <p className="text-4 text-gray">Price:</p>
              <div className="flex">
                <span className="text-gray-6 mt1 font-semibold ">$</span>
                <p className="text-7 font-bold text-#4338ca">{data?.price}</p>
              </div>
            </Card>
            <Card className="flex flex-col gap-4 shadow-none border col-span-2">
              <p className="text-4 text-gray">Company:</p>
              <div className="flex">
                <p className="text-7 font-bold">{data?.company}</p>
              </div>
            </Card>
          </div>
          <div className="flex flex-col gap-4">
            <Button label="Book Now"
            onClick={()=>setVisible(true)}
            />

            <div className="flex justify-center gap-4">
            <Button
              outlined={userStore.bookmarks.find((car: CarType) => car.id == Number(id)) ? false: true}
              severity="secondary"
              icon={`${userStore.bookmarks.find((car: CarType) => car.id == Number(id)) ? "i-tabler-bookmark-filled" : "i-tabler-bookmark"}`}
              onClick={()=>{
                toggleBookmark(data)
                toast({
                  detail: 'Action done successfully.',
                  severity: 'success',
                });}
              }
            />
              <Button
                outlined
                severity="secondary"
                icon="i-tabler-share"
              />
              <Button
              className="border-green text-green"
              outlined
              icon="i-tabler-brand-whatsapp"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
