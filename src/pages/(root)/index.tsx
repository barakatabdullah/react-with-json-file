import { DataView } from "primereact/dataview";
import { getCars } from "./_utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ItemTemplate } from "./_components/ItemsTemplate";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    placeholderData: keepPreviousData,
    queryKey: ["cars"],
    queryFn: getCars,
    select: (data) => data?.cars,
  });

  console.log(data);

  return (
    <div className=" flex flex-col gap-4 p-6">
      <div className="rounded-3 overflow-hidden relative">
        <img src="/photos/hero.png" alt="hero" />
        <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-2 items-center">
          <div className="flex flex-col gap-2 text-white text-14 font-bold p-8">
            <h1>Welcome to Json Store</h1>
            <h2>Find your next favorite Car</h2>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="my-8 text-5 font-bold">Cars</h2>
        <Button
          label="Add Car"
          onClick={() => {
            navigate("/car/add");
          }}
          icon="i-tabler-plus"
        />
      </div>

      <div>
        <DataView
          value={data}
          loading={isLoading}
          layout="grid"
          pt={{
            root: { className: "rounded-6 overflow-hidden" },
            content: { className: "p2 bg-transparent" },
            grid: { className: "grid grid-cols-4 gap-4" },
          }}
          itemTemplate={ItemTemplate}
          paginator
          rows={10}
        />
      </div>
    </div>
  );
}
