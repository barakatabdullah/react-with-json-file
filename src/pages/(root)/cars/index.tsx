
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { getCars } from "../_utils";
import { useNavigate } from "react-router-dom";
import { ItemTemplate } from "../_components/ItemsTemplate";



export default function Cars() {

  const navigate = useNavigate()

  const { data, isLoading } = useQuery({
    placeholderData: keepPreviousData,
    queryKey: ["cars"],
    queryFn: getCars,
    select: (data) => data?.cars,
  });




  return (
<div className="p-8">

<div className="flex justify-between w-full items-center h-40">
        <h2 className="text-7 text-white font-bold">
        Cars
        </h2>
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
            grid: { className: "grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1" },
          }}
          itemTemplate={ItemTemplate}
          paginator
          rows={8}
        />
      </div>
    </div>

  );
}
