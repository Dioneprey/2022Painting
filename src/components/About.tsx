import painters from '../assets/twopainters.png'
import orangeHandDrawer from '../assets/orange-handdrawer.png'

function About() {
  return (
    <div className={`gradient__white h-[300px] flex`}>
        <div className="relative flex-1 h-full flex justify-center items-center">
            <img src={orangeHandDrawer} className='absolute -top-20 left-0 h-[700px]' />
            <h2 className="text-[42px]">Why 2022PAINTING?</h2>
        </div>
        <div className="flex-1 h-full">
            <img src={painters} alt="" />
        </div>
    </div>
  )
}

export default About