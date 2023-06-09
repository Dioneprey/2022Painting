import paintVector from '../assets/brush-vector.png'
import contactVector from '../assets/contact-vector.png'
import houseVector from '../assets/house-vector.png'

export default function Cards() {
  return (
    <div className='flex sM:flex-row flex-col sM:h-[500px] gap-10'>
        <div className='flex-1 h-full'>
          <div className='hover:scale-105 xs:mx-0 mx-5 transition-all duration-300 flex flex-col h-full justify-center gap-5 items-center text-center'>
            <img src={paintVector} alt="paintVector" className='h-[120px]'/>
            <h2 className='text-3xl font-bold'>Unmatched Expertise</h2>
            <p className='max-w-[450px]'>
              With years of industry experience, our team of skilled professionals possesses the knowledge 
              and expertise to handle projects of any size or complexity. We stay up-to-date with the latest trends and techniques, 
              ensuring that we bring innovative solutions to every project, transforming your spaces into stunning masterpieces.
            </p>
          </div>
        </div>
        <div className='flex-1 text-black h-full  '>
          <div className='hover:scale-105 xs:mx-0 mx-5 transition-all duration-300 flex flex-col justify-center gap-5 items-center text-center h-full'>
          <img src={contactVector} alt="contactVector" className='h-[120px]'/>
            <h2 className='text-3xl font-bold'>Customized Solutions</h2>
            <p className='max-w-[450px]'>
              We understand that every home is unique, and our approach reflects that. We take the time to listen to your vision, preferences, 
              and requirements. Our experts collaborate closely with you to create a customized painting plan that aligns with your style and enhances 
              the beauty of your home. From color selection to finishes, we provide guidance and expertise to make your vision a reality.
            </p>
          </div>
        </div>
        <div className='flex-1 h-full'>
          <div className='flex flex-col justify-center gap-5 items-center text-center h-full hover:scale-105 xs:mx-0 mx-5 transition-all duration-300'>
          <img src={houseVector} alt="contactVector" className='h-[125px]'/>
            <h2 className='text-3xl font-bold'>Transform Your Home <br />with  2022painting</h2>
            <p className='max-w-[450px]'>
              Ready to transform your home into a stunning masterpiece? Contact 2022painting today to schedule a consultation. 
              Trust us to bring your vision to life and make your home the envy of the neighborhood. Experience the difference of 
              working with a dedicated and passionate team. Choose 2022painting for all your house painting needs.
            </p>
          </div>
        </div>
    </div>
  )
}