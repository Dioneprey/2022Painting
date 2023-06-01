import painters from '../assets/twopainters.png'
import orangeHandDrawer from '../assets/orange-handdrawer.png'
import { styles } from '../styles'

function About() {
  return (
    <div className={`relative ${styles.paddingX} h-[480px] flex mb-20`}>
            <img src={orangeHandDrawer} className='absolute top-0 left-0 h-[450px]' />
        <div className="relative w-[40%] h-full flex flex-col ">
            <h2 className="relative text-[48px] mt-16 mb-5 font-bold uppercase">Why 2022PAINTING?</h2>
            <p className='max-w-[540px] text-xl relative'>Are you looking to enhance the appearance and protection of your 
              home or business? Look no further than 2022Painting! As a leading company 
              specializing in exterior and interior painting, gutter cleaning, and power washing, 
              we offer exceptional services that will transform your property and leave it looking s
              tunning.
            </p>
            <div className='w-full mt-10 relative'>
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