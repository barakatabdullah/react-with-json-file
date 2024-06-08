import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { DataView } from "primereact/dataview";
import { getCars } from "../_utils";
import { ItemTemplate } from "../_components/ItemsTemplate";
import CarTableHeder from "./_components/CarTableHeder";
import Header from "../../../components/Header";
import { useState } from "react";
import { Car } from "../../../global-env";

export default function Cars() {
  const [filter,setFilter]=useState('')

  const { data, isLoading } = useQuery({
    placeholderData: keepPreviousData,
    queryKey: ["cars"],
    queryFn: getCars,
    select: (data) => data?.cars.filter((car:Car)=>Object.values(car)
    .join('')
    .toLowerCase()
    .includes(filter.toLowerCase())),
  });

  return (
    <div className="p-8">
      <Header title="Cars" />
      <div>
        <DataView
          header={<CarTableHeder filter={filter} setFilter={setFilter} />}
          value={data}
          loading={isLoading}
          layout="grid"
          pt={{
            root: { className: "rounded-2 overflow-hidden border" },
            content: { className: "p4" },
            grid: {
              className:
                "grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1",
            },
          }}
          itemTemplate={ItemTemplate}
          paginator
          rows={8}
        />
      </div>
    </div>
  );
}
