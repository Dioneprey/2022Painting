import painters from '../assets/twopainters.png'
import orangeHandDrawer from '../assets/orange-handdrawer.png'
import { styles } from '../styles'
import { Link } from 'react-scroll'

function About() {
  return (
    <div id="about"  className={`relative ss:h-[480px] h-full flex ss:mb-20 mb-44`}>
      <img src={orangeHandDrawer} className='md:block hidden absolute top-0 left-0 h-[450px]' />
      <div className={`${styles.paddingX} break-words md:ml-0 sm:ml-[5%] ml-0 relative h-full flex flex-col `}>
        <h2 className="relative z-[11] xs:text-[48px] text-[35px] mt-16 mb-5 font-bold uppercase">Why 2022PAINTING?</h2>
        <p className='max-w-[540px] text-xl relative z-[11]'>Are you looking to enhance the appearance and protection of your
          home or business? Look no further than 2022Painting! As a leading company
          specializing in exterior and interior painting, gutter cleaning, and power washing,
          we offer exceptional services that will transform your property and leave it looking s
          tunning.
        </p>
        <div className='w-full mt-10 relative'>
          <Link
            className='cursor-pointer group py-3 max-w-[540px] px-5 w-full border border-b-black text-xl hover:border-black transition-all duration-300'
              to="contact"
              smooth={true}
              duration={500}
              offset={-235}
              ignoreCancelEvents={true}
            >
               Request a quote <i className="group-hover:opacity-100 group-hover:translate-y-1  opacity-0 transition-all duration-300 fa-solid fa-arrow-down"></i>           
            </Link>
        </div>
      </div>
      <div className="relative flex-1 h-full md:block hidden ">
        <img src={painters} alt="twoPainters" className='absolute -bottom-10 z-[10] -right-10 h-[550px] min-w-[700px]' />
      </div>
    </div>
  )
}

export default About