import { getCars } from "./_utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ItemTemplate } from "./_components/ItemsTemplate";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import SocialWedgits from "./_components/SocialWedgits";
import { DataView } from "primereact/dataview";
import Header from "../../components/Header";

export default function Home() {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    placeholderData: keepPreviousData,
    queryKey: ["cars"],
    queryFn: getCars,
    select: (data) => data?.cars?.slice(0, 4),
  });

  return (
    <div className=" flex flex-col gap-8 p-12">
      <Header title="Welcome to Acara Store" />

      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-4">
        <div className="col-span-1">
          <Card className="shadow-none border m0">
            <div className="flex flex-col gap-6 items-center justify-center">
              <h4 className="text-6 text-center  z-2 font-bold">
                Ready to hit the road <br />
                <span className="text-#4338ca">in something new?</span>
              </h4>
              <div className="py-10">
                <img src="/photos/messenger.svg" alt="" />
              </div>

              <div className="flex gap-4">
                <Button
                  text
                  label="Browse cars"
                  onClick={() => navigate("/cars")}
                />
                <Button label="Contact us" />
              </div>
            </div>
          </Card>
        </div>

        <div className="col-span-2 flex flex-col gap-4">
          <div className="col-span-4 flex items-center h-full w-full h-60 bg-#4338ca rounded-2 p-6 relative">
            <h4 className="text-8 text-start text-white font-bold max-sm:text-6">
              Your journey
              <br />
              starts here.
            </h4>
            <div className="absolute rhight-0 ms-auto w-full">
              <img
                className="w-7/10 ms-auto"
                src="/photos/MC20.png"
                alt="hero"
              />
            </div>
          </div>
          <SocialWedgits />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-7 font-bold">Cars</h2>
          <Button
            text
            label="Browse cars"
            onClick={() => navigate("/cars")}
            icon="i-tabler-arrow-right"
            iconPos="right"
          />
        </div>

        <DataView
          value={data}
          loading={isLoading}
          layout="grid"
          pt={{
            root: { className: "rounded-3  " },
            content: { className: " bg-transparent" },
            grid: {
              className:
                "grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1",
            },
          }}
          itemTemplate={ItemTemplate}
          rows={4}
        />
      </div>
    </div>
  );
}
