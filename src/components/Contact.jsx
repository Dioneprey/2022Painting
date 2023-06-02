import { styles } from "../styles";
import { Controller, useForm } from "react-hook-form";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from "react";
import dayjs from "dayjs";
import Maps from "./Maps";

export default function Contact() {
  const [originalReleaseDate, setOriginalReleaseDate] = useState(null);
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    data.date = dayjs(originalReleaseDate).format('YYYY-MM-DD hh:mm a')
    console.log(data)
  }

  return (
    <div className={`relative`}>
      <div className={`${styles.paddingX} `}>
        <h2 className="text-[48px] font-bold uppercase text-center">Request a quote</h2>
      </div>
      <div className={`flex sm:flex-row flex-col-reverse sm:mt-16 text-white `}>
        <div className={`flex ${styles.paddingX} sm:w-[50%] w-full sm:py-0 py-10 bg-black justify-center flex-col item`}>
          <h2 className="ms:text-[48px] xs:text-[35px] text-[28px]  font-bold">Or get in touch <br /> directly through <br /> WhatsApp.</h2>
          <a className={`${styles.hoverOrangeText} text-white`} href="https://api.whatsapp.com/send?phone=15083717829" target="_blank"><i className="fa-brands fa-whatsapp xs:text-7xl text-5xl" /></a>
        </div>
        <form className="sm:mt-16 mt-5 mb-16 h-full sm:w-[50%] w-full px-[5%] text-white flex flex-col gap-5 justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full flex-col">
              <div className="group w-full relative h-[58px]">
                <input
                  type="text"
                  w-full placeholder="Address"
                  {...register("address")}
                  className="mt-2 w-full placeholder:text-zinc-800 relative z-[10] h-full px-4 rounded-md border border-black bg-transparent hover:outline-black drop-shadow-2xl focus:outline-blue-800"
                />
                <div className={`absolute border-2 z-[9]  border-transparent focus:outline-blue-800 ${focus ? 'group-hover:border-black' : ''} rounded-md mt-2 w-full h-full top-0`} />
              </div>
            </div>
            <div className="w-full">
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                      <DateTimePicker
                        onChange={(newValue) => {
                          setOriginalReleaseDate(newValue);
                        }} />
                    </DemoContainer>
                  </LocalizationProvider>
                )}
              />
            </div>
            <div className="group w-full relative h-[58px]">
              <input
                type="text"
                w-full placeholder="Name"
                {...register("name")}
                className="mt-2 w-full placeholder:text-zinc-800 relative z-[10] h-full px-4 rounded-md border border-black bg-transparent hover:outline-black drop-shadow-2xl focus:outline-blue-800"
              />
              <div className="absolute border-2 z-[9] border-transparent group-hover:border-black rounded-md mt-2 w-full h-full top-0" />
            </div>
            <div className="group w-full relative h-[58px]">
              <input
                type="text"
                w-full placeholder="Phone"
                {...register("phone")}
                className="mt-2 w-full placeholder:text-zinc-800 relative z-[10] h-full px-4 rounded-md border border-black bg-transparent hover:outline-black drop-shadow-2xl focus:outline-blue-800"
              />
              <div className="absolute border-2 z-[9]  border-transparent group-hover:border-black rounded-md mt-2 w-full h-full top-0" />
            </div>
            <button className="p-4 mt-2 border w-full cursor-pointer bg-[black] hover:bg-primaryOrange text-white transition-colors duration-300">Submit</button>
        </form>
      </div>
      <Maps />
    </div>
  )
}