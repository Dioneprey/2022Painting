export default function Hero() {
  return (
    <main className='flex flex-col justify-center text-white items-center xl:h-[70vh] pb-36'>
      <h1 className='xl:text-[5vw]  sm:text-[98px] ss:text-[72px] xs:text-[50px] text-[40px] mt-14 font-bold text-primaryOrange'>
        <span className='font-sans'>2022</span>PAINTING
      </h1>
      <p className='xL:text-[60px] xl:text-[2vw] sm:text-[38px] xs:text-[25px] text-[18px] font-[500]'>Exterior and interior Painting</p>
      <p className='xL:max-w-[55vw] xl:max-w-[42vw] max-w-[750px] font-[500] mt-10 xL:text-[35px] xl:text-[20px] sm:text-xl xs:text-lg text-md xL:leading-[40px] xl:leading-[35px] xs:leading-8 leading-normal text-center'>
        At 2022painting, we understand that your home is more than just a living space; it's a 
        reflection of your style and personality. That's why we are dedicated to providing exceptional 
        painting services that breathe new life into your cherished spaces. With a commitment to 
        quality, professionalism, and customer satisfaction, we are your go-to house painting company 
        for all your residential painting needs.
      </p>
      <div className='flex xs:flex-row flex-col ss:gap-10 gap-5 mt-10'>
        <a className='py-3 px-8 transition-colors duration-300 ss:text-2xl text-xl text-white bg-primaryOrange hover:bg-orange-600' href="">Learn more</a>
        <a className='py-3 px-8 transition-colors duration-300 ss:text-2xl text-xl text-white bg-transparent border border-white hover:bg-primaryOrange hover:border-transparent hover:text-white' href="">Contact us</a>
      </div>
    </main>
  )
}
