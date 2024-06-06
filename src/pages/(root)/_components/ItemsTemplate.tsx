import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";

// @ts-expect-error: fix later
export function ItemTemplate(car) {
  const navigate = useNavigate();
  // @ts-expect-error: fix later
  const cardHeader = (car) => (
    <div className="overflow-hidden rounded-2xl top-0 flex flex-col relative h-60">
      <img
        className="max-h-full h-auto w-auto block object-contain	"
        src={car.image}
      />
    </div>
  );
  // @ts-expect-error: fix later
  function cardFooter(car) {
    return (
      <div className="flex items-center justify-between ">
        <span className="font-bold text-6">${car.price}</span>

        <Button
          text
          label="More details"
          onClick={() => navigate("/car/" + car.id)}
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
      className="rounded-2xl "
      pt={{
        root: { className: "shadow-none! border" },
        title: { className: "h-20 truncate" },
        content: { className: "p1!" },
      }}
    ></Card>
  );
}
