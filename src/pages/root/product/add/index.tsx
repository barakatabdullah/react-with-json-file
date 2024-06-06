import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputText";
import { FileUpload } from "primereact/fileupload";
import { useForm, Controller } from "react-hook-form";
import { getCategories } from "./_utils";
import { useQuery } from "@tanstack/react-query";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { classNames } from "primereact/utils";
import { InputNumber } from "primereact/inputnumber";


export default function AddProduct() {
  const toast = useRef(null);

  const {data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast.current?.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
  };
  const [price, setPrice] = useState(0);

    const methods = useForm(
      {

        mode:'all'
      }
    );
    return(
        
    <div className="w-full p-6 flex gap-4 items-center justify-center">
      <Toast ref={toast}/>
    <Card className="w-full">
      <h3 className=" mb-8 font-bold text-6">Add Product</h3>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className=" w-full flex flex-col gap-4"
      >
        <div className="grid grid-cols-2 gap-8">

        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="title">
            Title
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: "Title is required",
            }}
            render={({ field,fieldState }) => (
              <>
              <InputText  className={classNames({ 'p-invalid': fieldState.error })} {...field} id="title" />
              
              <span className="text-red">{fieldState.error?.message}</span>
              </>
              )}
            name="title"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="description">
          Description
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: "Description is required",
            }}
            render={({ field,fieldState }) => (
              <>
              <InputText  className={classNames({ 'p-invalid': fieldState.error })} {...field} id="description" />
              
              <span className="text-red">{fieldState.error?.message}</span>
              </>
              )}
            name="description"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="category">
            Category
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: "Category is required",
            }}
            render={({ field,fieldState }) =>(
              <>
              <Dropdown options={data}  {...field} id="category" />
              <span className="text-red">{fieldState.error?.message}</span>

              </>
            )}
            name="category"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="price">
            Price
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: "Price is required",
              min: 1,
              max: 10000,
            }}
            render={({ field,fieldState }) => (
              <>
              <InputNumber value={price} onValueChange={(e) => setPrice(e.value)} className={classNames({ 'p-invalid': fieldState.error })} id="price" />
              <span className="text-red">{fieldState.error?.message}</span>

              </>
            )}
            name="price"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="brand">
            Brand
          </label>
          <Controller
            control={methods.control}

            render={({ field }) => <InputText {...field} id="brand" />}
            name="brand"
          />
        </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="images[]">
          Main Image
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <FileUpload {...field} id="mainImage"   accept="image/*" maxFileSize={1000000} emptyTemplate={<div>
              <p className="m-0">Drag and drop file to here to upload.</p>
              <p className="m-0">You can only upload one image as the main image.</p>
            </div>} />}
            name="mainImage"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-bold" htmlFor="images">
          Other Images
          </label>
          <Controller
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field }) => <FileUpload {...field} id="mainImage"   multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />}
            name="images"
          />
        </div>


        <Button label="Submit" type="submit" />
      </form>
    </Card>
  </div>
    )
}