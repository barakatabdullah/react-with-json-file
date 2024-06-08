import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Boxes, Car } from "../../../global-env";
import { toggleBookmark, useUserStore } from "../../../stores/user";

// @ts-expect-error: fix later
export function ItemTemplate(car) {
  const navigate = useNavigate();
  const userStore = useUserStore();
  const { toast } = useOutletContext<Boxes>();

  const cardHeader = (car: Car) => (
    <div className="overflow-hidden rounded-2 top-0 flex flex-col relative h-60">
      <Button
        className="absolute top-3 right-3 z-10"
pt={{
  icon:{className:'text-5'}
}}
        size="small"
        icon={`${
          userStore.bookmarks.find((c: Car) => c.id == Number(car.id))
            ? "i-tabler-bookmark-filled"
            : "i-tabler-bookmark"
        }`}
        onClick={() => {
          toggleBookmark(car);
          toast({
            detail: "Action done successfully.",
            severity: "success",
          });
        }}
      />
      <img className="w-full h-full block object-cover	" src={car.thumbnail} />
    </div>
  );
  function cardFooter(car:Car) {
    return (
      <div className="flex items-center justify-between ">
        <span className="font-bold text-6">${car.price}</span>

        <Button
          text
          label="More details"
          onClick={() => navigate("/cars/" + car.id)}
          icon="i-tabler-arrow-right"
          iconPos="right"
        />
      </div>
    );
  }
  return (
    <Card
      header={cardHeader(car)}
      title={car.title}
      subTitle={
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <i className="i-tabler-building block"></i>
            <span className="text-4 font-bold">{car.company}</span>
          </div>
        </div>
      }
      footer={cardFooter(car)}
      key={car.id}
      className="rounded-2 "
      pt={{
        root: { className: "shadow-none! border" },
        title: { className: "h-20  break-words" },
        content: { className: "p1!" },
      }}
    ></Card>
  );
}
