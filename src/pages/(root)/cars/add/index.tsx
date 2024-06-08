
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputText";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { InputNumber } from "primereact/inputnumber";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Header from "../../../../components/Header";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getCompanies } from "../../_utils";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Boxes } from "../../../../global-env";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../config/firebase";

export default function AddCar() {
  const { toast } = useOutletContext<Boxes>();
  const navigate = useNavigate();

  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      thumbnail: null,
      company: null,
      title: "",
      price: 0,
      description: "",
      images: null
    },
    mode: "all",
  });

  const { data } = useQuery({
    placeholderData: keepPreviousData,
    queryKey: ["companies"],
    queryFn: getCompanies,
    select: (data) => data?.companies,
  });

  // @ts-expect-error: fix later
  async function onSubmit(data) {
    const thumbnailRef = ref(storage, `cars/${data.thumbnail[0].name}`);

    await uploadBytes(thumbnailRef, data.thumbnail[0]);
    // const thumbnailUrl = await getDownloadURL(thumbnailRef);
    
    const images = []
    if (data.images?.length > 0) {
      if (data.images?.length > 5) {
        toast({
          severity: "warn",
          summary: "Warning",
          detail: "The maximum number of images is 5",
          life: 3000,
        });
        return
      }

      

    for (let i = 0; i < data.images.length; i++) {
      const imageRef = ref(storage, `cars/images/${data.images[i].name}`);
      await uploadBytes(imageRef, data.images[i]);
      const imageUrl = await getDownloadURL(imageRef);

      images.push(imageUrl);
    }

    }

    toast({
      severity: "success",
      summary: "Success",
      detail: "Car added successfully",
      life: 3000,
    });
  }


  return (
    <div className="p12">
      <Header title="Add Car" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-8 gap-8 max-lg:grid-cols-1"
      >
        <Card className="aspect-square border shadow-none col-span-2 max-lg:col-span-1 relative">
          <div className="flex flex-col  w-full gap-2 h-full absolute top-0 left-0 p-4">
            <label className="flex flex-col text-center gap-4 text-#4338ca  cursor-pointer items-center justify-center w-full h-full  border rounded-2" htmlFor="thumbnail">
              <i className="i-tabler-cloud-upload text-10"></i>
              <p className="font-bold text-6">Upload Thumbnail</p>
            </label>
            <input
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              type="file"
              id="thumbnail"
              accept="image/png, image/jpeg"
              {...register("thumbnail")}
            />
          </div>
        </Card>

        <div className="col-span-6 flex flex-col gap-6 max-lg:col-span-1">
          <Card className="w-full shadow-none border">
            <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
              <div className="flex flex-col gap-2 ">
                <label className="font-bold" htmlFor="title">
                  Title
                </label>
                <Controller
                  control={control}
                  rules={{
                    required: "Title is required",
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <InputText
                        className={classNames({
                          "p-invalid": fieldState.error,
                        })}
                        {...field}
                        id="title"
                      />

                      <span className="text-red">
                        {fieldState.error?.message}
                      </span>
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
                  control={control}
                  rules={{
                    required: "Description is required",
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <InputText
                        className={classNames({
                          "p-invalid": fieldState.error,
                        })}
                        {...field}
                        id="description"
                      />

                      <span className="text-red">
                        {fieldState.error?.message}
                      </span>
                    </>
                  )}
                  name="description"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="font-bold" htmlFor="category">
                  Company
                </label>
                <Controller
                  control={control}
                  rules={{
                    required: "Company is required",
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <Dropdown
                        options={data}
                        optionLabel="name"
                        optionValue="name"
                        {...field}
                        id="company"
                      />
                      <span className="text-red">
                        {fieldState.error?.message}
                      </span>
                    </>
                  )}
                  name="company"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="font-bold" htmlFor="price">
                  Price
                </label>
                <Controller
                  control={control}
                  rules={{
                    required: "Price is required",
                    min: 1,
                    max: 10000,
                  }}
                  render={({ fieldState, field }) => (
                    <>
                      <InputNumber
                        ref={field.ref} value={field.value} onBlur={field.onBlur} onValueChange={(e) => field.onChange(e)}
                        className={classNames({
                          "p-invalid": fieldState.error,
                        })}
                        id="price"
                      />
                      <span className="text-red">
                        {fieldState.error?.message}
                      </span>
                    </>
                  )}
                  name="price"
                />
              </div>
            </div>
          </Card>
          <Card className="w-full shadow-none borde relative h-full min-h-80">
            <div className="flex flex-col gap-2 absolute top-0 left-0 p-4 h-full w-full">
            <label className="flex flex-col gap-4 p-6 text-#4338ca  cursor-pointer items-center justify-center w-full h-full  border rounded-2" htmlFor="thumbnail">
              <i className="i-tabler-cloud-upload text-10"></i>
             <div className="flex flex-col gap-1 justify-center text-center">
             <p className="font-bold text-6">Upload More Images</p>
             <p className="text-gray">Maximum of 5 Images</p>
             </div>
            </label>

              <input
                {...register("images")}
                multiple
                type="file"
                accept="image/*"
                id="images"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"

              />

            </div>
          </Card>
          <div className="flex gap-4 justify-end items-center max-lg:flex-col-reverse max-lg:gap-2 w-full">
          
            <Button
             className="max-lg:w-full"
            outlined
              label="Cancel"
              onClick={() => navigate(-1)}
            />
            <Button className="max-lg:w-full" label="Submit" type="submit" />
            
          </div>

        </div>

      </form>

    </div>
  );
}

