import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Rating } from "primereact/rating";
import { Product } from "../../../typs";
import { Tag } from "primereact/tag";
import { useNavigate } from "react-router-dom";

export function ItemTemplate(product:Product) {
    const navigate = useNavigate();
    const cardHeader = (product:Product) => (
        <div className="overflow-hidden rounded-2xl top-0 flex flex-col relative h-60">
            <img
                className="max-h-full h-auto w-auto block object-contain	"
                src={product.images?.find(() => true)} />
            <Rating
                className="absolute flex justify-center bottom-0 w-full"
                value={product.rating}
                readOnly
                cancel={false}
            ></Rating>
        </div>
    );

    function cardFooter(product:Product) {
       
        return (
            <div className="flex items-center justify-between ">
                <span className="font-bold text-6">${product.price}</span>

                <Button
                    text
                    label="More details"
                    onClick={()=>navigate('/product/' + product.id)}
                    icon="i-tabler-arrow-right"
                    iconPos="right" />
            </div>
        );
    }
    return (
        <Card
            header={cardHeader(product)}
            title={product.title}
            subTitle={(
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                    <i className="i-tabler-tag block"></i>
                    <span className="text-4 font-bold">{product.category}</span>
                    </div>
                    <Tag value={product.stock > 0 ? "In stock" : "Out of stock"} severity={product.stock === 0 ? 'danger':product.stock >10? 'success':'warning'} ></Tag>
                </div>

            )}
            footer={cardFooter(product)}
            key={product.id}
            className="rounded-2xl "
            pt={{
                root:{className:'shadow-none! border'},
                title: { className: "h-20 truncate" },
                content: { className: "p1!" },
            }}
        ></Card>
    );
}