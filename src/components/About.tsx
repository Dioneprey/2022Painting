import painters from '../assets/twopainters.png'
import orangeHandDrawer from '../assets/orange-handdrawer.png'

function About() {
  return (
    <div className={`gradient__white h-[480px] flex`}>
        <div className="relative w-[40%] h-full items-center flex flex-col ">
            <img src={orangeHandDrawer} className='absolute top-10 left-0 h-[450px]' />
            <h2 className="ml-5 relative text-[48px] mt-16 mb-5 font-bold">Why 2022PAINTING?</h2>
            <p className='ml-24 max-w-[540px] text-xl relative'>Are you looking to enhance the appearance and protection of your 
              home or business? Look no further than 2022Painting! As a leading company 
              specializing in exterior and interior painting, gutter cleaning, and power washing, 
              we offer exceptional services that will transform your property and leave it looking s
              tunning.
            </p>
            <div className='w-full ml-[320px] mt-10 relative'>
              <a href="" className='group py-3 px-5 border border-b-black text-xl hover:border-black transition-all duration-300'>
                Request a quote <i className="group-hover:opacity-100 group-hover:translate-y-1  opacity-0 transition-all duration-300 fa-solid fa-arrow-down"></i>
              </a>
            </div>
        </div>
        <div className="relative flex-1 h-full">
            <img src={painters} alt="twoPainters" className='absolute -bottom-10 right-0 h-[550px]' />
        </div>
    </div>
  )
}

export default About