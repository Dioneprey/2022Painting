export default function Hero() {
  return (
    <main className='flex flex-col justify-center text-white items-center pb-36'>
      <h1 className='text-[98px] mt-14 font-bold text-primaryOrange'>
        <span className='font-sans'>2022</span>PAINTING
      </h1>
      <p className='text-[38px] font-[500]'>Exterior and interior Painting</p>
      <p className='max-w-[750px] font-[500] mt-10 leading-8 text-xl text-center'>
        At 2022painting, we understand that your home is more than just a living space; it's a 
        reflection of your style and personality. That's why we are dedicated to providing exceptional 
        painting services that breathe new life into your cherished spaces. With a commitment to 
        quality, professionalism, and customer satisfaction, we are your go-to house painting company 
        for all your residential painting needs.
      </p>
      <div className='flex gap-10 mt-10'>
        <a className='py-3 px-8 transition-colors duration-300 text-2xl text-white bg-primaryOrange hover:bg-orange-600' href="">Learn more</a>
        <a className='py-3 px-8 transition-colors duration-300 text-2xl text-white bg-transparent border border-white hover:bg-primaryOrange hover:border-transparent hover:text-white' href="">Contact us</a>
      </div>
    </main>
  )
}
