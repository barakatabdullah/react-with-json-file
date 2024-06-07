/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputText";
import {
  FileUpload,
  FileUploadHeaderTemplateOptions,
} from "primereact/fileupload";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { classNames } from "primereact/utils";
import { InputNumber } from "primereact/inputnumber";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Header from "../../../../components/Header";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getCompanies } from "../../_utils";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Boxes } from "../../../../global-env";

const chooseOptions = {
  icon: "i-tabler-plus",
  iconOnly: true,
  className: "custom-choose-btn p-button-outlined",
};
const uploadOptions = {
  icon: "i-tabler-upload",
  iconOnly: true,
  className: "custom-upload-btn p-button-success  p-button-outlined",
};
const cancelOptions = {
  icon: "i-tabler-x",
  iconOnly: true,
  className: "custom-cancel-btn p-button-danger p-button-outlined",
};

function UploadHeaderTemplate(props: FileUploadHeaderTemplateOptions) {
  return (
    <div className="flex items-center gap-4 p2 border rounded-t-4">
      {props.chooseButton}
    </div>
  );
}
export default function AddCar() {
  const { toast } = useOutletContext<Boxes>();
  const navigate = useNavigate();
  const [price, setPrice] = useState<number>(0);

  const {handleSubmit, control} = useForm({
    values: {
      title: "",
      price: 0,
      company: "",
      thumbnail: "",
      description: "",
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
  function onSubmit  (data)  {
    console.log('first')
    console.log(data);
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
        className="grid grid-cols-8 gap-8"
      >
        {/* <Card className="aspect-square border shadow-none col-span-3">
          <div className="flex flex-col gap-2 h-full">
            <label className="font-bold" htmlFor="thumbnail">
              Thumbnail
            </label>
            <Controller
              control={.control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <FileUpload
                  pt={{
                    input: { className: "w-full h-full" },
                  }}
                  {...field}
                  id="thumbnail"
                  accept="image/*"
                  maxFileSize={4000000}
                  headerTemplate={UploadHeaderTemplate}
                  chooseOptions={chooseOptions}
                  uploadOptions={uploadOptions}
                  cancelOptions={cancelOptions}
                  contentStyle={{ minHeight: "100%" }}
                  emptyTemplate={
                    <div className="h-full flex flex-col justify-center items-center gap-6">
                      <i className="i-tabler-cloud-upload text-25"></i>
                      <p className="m-0">
                        Drag and drop file to here to upload.
                      </p>
                      <p className="m-0">
                        You can only upload one image as the Thumbnail.
                      </p>
                    </div>
                  }
                />
              )}
              name="thumbnail"
            />
          </div>
        </Card> */}

        <div className="col-span-5 flex flex-col gap-6">
          <Card className="w-full shadow-none border">
            <div className="grid grid-cols-2 gap-8">
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
              {/* <div className="flex flex-col gap-2 ">
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
              </div> */}
              {/* <div className="flex flex-col gap-2 ">
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
                  render={({ fieldState,field }) => (
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
              </div> */}
            </div>
          </Card>
          {/* <Card className="w-full shadow-none border">
            <div className="flex flex-col gap-2 mt-6">
              <label className="font-bold" htmlFor="images">
                Other Images
              </label>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <FileUpload
                    {...field}
                    id="mainImage"
                    multiple
                    accept="image/*"
                    maxFileSize={1000000}
                    emptyTemplate={
                      <p className="m-0">
                        Drag and drop files to here to upload.
                      </p>
                    }
                  />
                )}
                name="images"
              />
            </div>
          </Card> */}


        </div>
      </form>
      <div className="flex gap-4 justify-end items-center">
            <Button
              className="mt-6"
              label="Cancel"
              onClick={() => navigate(-1)}
            />
            <Button className="mt-6" label="Submit" onClick={()=>{onSubmit("hello")}} />
          </div>
    </div>
  );
}
