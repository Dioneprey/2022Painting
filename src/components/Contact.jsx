import { styles } from "../styles";
import { Controller, useForm } from "react-hook-form";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import emailjs from 'emailjs-com';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from "react";
import dayjs from "dayjs";
import Maps from "./Maps";

export default function Contact() {
  emailjs.init(import.meta.env.VITE_EMAIL_KEY)


  const [originalReleaseDate, setOriginalReleaseDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalOk, setModalOk] = useState(false);
  const [modalError, setModalError] = useState(false)

  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    data.date = dayjs(originalReleaseDate).format('YYYY-MM-DD hh:mm a')
    
    try {
      setModalOk(false)
      setModalError(false)
      setLoading(true)

      const response = await emailjs.send("service_6jxkjec","template_j5q6e15",{
        from_name: data.name,
        to_name: '2022Painting',
        to_email: 'dionatan.1751@gmail.com',
        subject: 'Budget scheduling',
        message: `
        
        Address: ${data.address}<br/>
        Date: ${data.date}<br/>
        Name: ${data.name} <br/>
        Phone: ${data.phone}<br/>
        `,
      })
      
      if(response.status === 200) {
        setLoading(false)
        setModalOk(true)
    } else {
        setLoading(false)
        setModalError(true)
    }
  } catch (err) {
    console.log(err)
    setLoading(false)
    setModalError(!modalError)
}
    
  }

  return (
    <div className={`relative`}>
      <div className={`${styles.paddingX} `}>
        <h2 className="text-[48px] font-bold uppercase text-center">Request a quote</h2>
      </div>
      <div className={`flex sm:flex-row flex-col-reverse sm:mt-16 text-white `}>
        <div className={`flex ${styles.paddingX} sm:w-[50%] w-full sm:py-0 py-10 bg-[#161616] justify-center flex-col item`}>
          <h2 className="ms:text-[48px] xs:text-[35px] text-[28px]  font-bold">Or get in touch <br /> directly through <br /> WhatsApp.</h2>
          <a className={`${styles.hoverOrangeText} text-white`} href="https://api.whatsapp.com/send?phone=15083717829" target="_blank"><i className="fa-brands fa-whatsapp xs:text-7xl text-5xl" /></a>
        </div>
        <form className="relative sm:mt-16 mt-5 mb-16 h-full sm:w-[50%] w-full px-[5%] text-black flex flex-col gap-5 justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full flex-col">
              <div className="group w-full relative h-[58px]">
                <input
                  type="text"
                  w-full placeholder="Address"
                  {...register("address", { required: 'This field is required.' })}
                  className="mt-2 w-full placeholder:text-zinc-400 relative z-[10] h-full px-4 rounded-md border border-black bg-transparent hover:outline-black drop-shadow-2xl focus:outline-blue-800"
                />
                {errors.address && <span className="text-red-500 text-sm">This field is required.</span>}
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
                      {...field}
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
                {...register("name", { required: 'This field is required.' })}
                className="mt-2 w-full placeholder:text-zinc-400 relative z-[10] h-full px-4 rounded-md border border-black bg-transparent hover:outline-black drop-shadow-2xl focus:outline-blue-800"
              />
              {errors.name && <span className="text-red-500 text-sm">This field is required.</span>}
              <div className="absolute border-2 z-[9] border-transparent group-hover:border-black rounded-md mt-2 w-full h-full top-0" />
            </div>
            <div className="group w-full relative h-[58px]">
              <input
                type="text"
                w-full placeholder="Phone"
                {...register("phone", { required: 'This field is required.' })}
                className="mt-2 w-full placeholder:text-zinc-400 relative z-[10] h-full px-4 rounded-md border border-black bg-transparent hover:outline-black drop-shadow-2xl focus:outline-blue-800"
              />
              {errors.phone && <span className="text-red-500 text-sm">This field is required.</span>}
              <div className="absolute border-2 z-[9]  border-transparent group-hover:border-black rounded-md mt-2 w-full h-full top-0" />
            </div>
            <button className="p-4 mt-2 border w-full cursor-pointer bg-[black] hover:bg-primaryOrange text-white transition-colors duration-300">
              {!loading ? <p className="text-xl">Submit</p> : <i className="animate-spin fa fa-circle-notch fa-spin text-xl"></i>}
            </button>
            {
              modalOk && <div role="alert" className="absolute z-[16] -bottom-3 rounded-xl border border-gray-900 bg-white text-green-500 p-4 drop-shadow-xl mt-10">
              <div className="flex items-start gap-4">
                  <span className="text-greenCl">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                      </svg>
                  </span>

                  <div className="flex-1">
                      <strong className="block font-medium text-black">E-mail send!</strong>

                      <p className="mt-1 text-sm text-black">
                      We will be in touch soon
                      </p>
                  </div>

                  <div onClick={() => setModalOk(false)}>
                      <button
                          className="text-gray-400 transition hover:text-greenCl"
                      >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                              />
                          </svg>
                      </button>
                  </div>
              </div>
              </div>
            }
            {
              modalError && <div role="alert" className="absolute z-[16] -bottom-3 rounded-xl border border-gray-900 bg-white text-red-500 p-4 drop-shadow-xl mt-10">
              <div className="flex items-start gap-4">
                  <span className="text-greenCl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                        fillRule="evenodd"
                        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                    />
                </svg>
                  </span>

                  <div className="flex-1">
                      <strong className="block font-medium text-black">Error while sending the email </strong>

                      <p className="mt-1 text-sm text-black">
                        Please, try again!
                      </p>
                  </div>

                  <div onClick={() => setModalOk(false)}>
                      <button
                          className="text-gray-400 transition hover:text-greenCl"
                      >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                              />
                          </svg>
                      </button>
                  </div>
              </div>
              </div>
            }
        </form>
      </div>
      <Maps />
    </div>
  )
}