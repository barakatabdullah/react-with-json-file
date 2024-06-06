import { InputText } from "primereact/inputText";
import { InputMask } from "primereact/inputMask";
import { useForm, Controller } from "react-hook-form";
import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";
import { useUserStore } from "@/stores/user";
import { Button } from "primereact/button";
import CartList from "../cart/_components/ListTemplate";
import { classNames } from "primereact/utils";
import { InputNumber } from "primereact/inputnumber";




export default function Checkout() {
  const userStore = useUserStore();



  const onSubmit = (data: any) => {
    console.log(data)
  };

  const methods = useForm(
    {
      mode:'all'
    }
  );
  return (

    <div className="grid grid-cols-3 gap-4 p-6" >
      <div className="col-span-2">
        <Card
        className="p-4 shadow-none! border h-full"
          header={
            (
              <h3 className=" mb-8 font-bold text-6">Current Cart</h3>
            )
          }
          footer={
            (
              <div className="flex justify-between items-center">
                <span>Total:</span>
                <span className="text-5 font-bold">${userStore?.cart.reduce((a, b) => a + b.price*b.quantity, 0)}</span>
              </div>
            )
          }
        >

          <div className="container mx-auto flex flex-col gap-4">
            <DataView
              value={userStore?.cart}
              listTemplate={CartList}
            />
          </div>
        </Card>
      </div>
      <Card className="col-span-1 shadow-none! border">
        <h3 className=" mb-8 font-bold text-6">Order Info</h3>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 ">
            <label className="font-bold" htmlFor="address">
              Address
            </label>
            <Controller
              control={methods.control}
              rules={{
                required: "this field is required",
                pattern: {
                  value: /^[a-zA-Z0-9 ]{3,}$/,
                  message: "Address format is invalid"
                },
              }}
              render={({ field,fieldState }) => (
              <>
              <InputText  className={classNames({ 'p-invalid': fieldState.error })} {...field} id="address" />
              
              <span className="text-red">{fieldState.error?.message}</span>
              </>
              )}

              name="address"
            />
          </div>
          <h4 className=" mt-6 font-bold text-5">Payment Info</h4>
          <div className="flex flex-col gap-2 ">
            <label className="font-bold" htmlFor="name">
              Name On Card
            </label>
            <Controller
              control={methods.control}
              rules={{
                required: "this field is required",
                minLength:3
              }}
              render={({ field,fieldState }) => (
                <>
                <InputText  className={classNames({ 'p-invalid': fieldState.error })} {...field} id="address" />
                
                <span className="text-red">{fieldState.error?.message}</span>
                </>
                )}
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="font-bold" htmlFor="card">
              Card Number
            </label>
            <Controller
              control={methods.control}
              rules={{
                required: "this field is required",
                pattern: {
                  value: /^[0-9]{13,19}$/,
                  message: "Please enter a valid credit card number"
                },
              }}
              render={({ field,fieldState }) => (
                <>
                
                <InputMask className={classNames({ 'p-invalid': fieldState.error })} mask="9999 9999 9999 9999" {...field} id="name" />
                <span className="text-red">{fieldState.error?.message}</span>
                </>
            )}
              name="card"
            />
            
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="font-bold" htmlFor="date">
              Expiration Date
            </label>
            <Controller
              control={methods.control}
              rules={{
                required: "this field is required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/(19|20)\d\d$/,
                  message: "Please enter a valid date format (MM/YYYY)"
                },
              }}
              render={({ field,fieldState }) => (
              <>
              <InputText className={classNames({ 'p-invalid': fieldState.error })} {...field} id="date" />
              <span className="text-red">{fieldState.error?.message}</span>
              </>
            )}
              name="date"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="font-bold" htmlFor="cvv">
              CVV
            </label>
            <Controller
              control={methods.control}
              rules={{
                required: "this field is required",
                pattern: {
                  value: /^\d{3}$/,
                  message: "Please enter a valid CVV (3 digits)"
                },
              }}
              render={({ field,fieldState }) => (
                <>
                <InputMask  className={classNames({ 'p-invalid': fieldState.error })} mask="999" {...field} id="address" />
                
                <span className="text-red">{fieldState.error?.message}</span>
                </>
                )}
              name="cvv"
            />
          </div>
          <Button
            label="Checkout"
          />
        </form>
      </Card>

    </div>
  )
}