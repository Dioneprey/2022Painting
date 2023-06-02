/* eslint-disable @typescript-eslint/no-explicit-any */
import { styles } from "../styles"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import service_1 from '../assets/services_1.webp'
import service_2 from '../assets/services_2.webp'
import service_3 from '../assets/services_3.webp'
import service_4 from '../assets/services_4.webp'
import service_5 from '../assets/services_5.webp'
import service_6 from '../assets/services_6.jpg'

function Services() {
    const ImageComponent = (props) => {
        return (
          <div className="bg-black w-full max-w-[360px] max-h-[250px] cursor-pointer relative drop-shadow-xl hover:scale-105 hover:rotate-[0.5deg] transition-all duration-300 ">
            <PhotoProvider>
              <PhotoView src={props.img}>
                <img className="p-1 w-full max-h-[250px] h-full" src={props.img} alt="Service photo one" />
              </PhotoView>
            </PhotoProvider>
          </div>
        )
      }
      
  return (
    <div className={`relative`}>
        <div className="xs:mt-10 flex sM:flex-row flex-col justify-between xs:p-10 p-5">
            <div className="lG:px-36 md:px-16 pr-5 flex flex-col flex-1 text-white">
                <h2 className="text-[48px] text-black mt-16 text-left font-bold relative uppercase">Some of our <br /> services</h2>
                <p className="my-5 text-left text-black text-lg relative">More in our<a className={`${styles.hoverOrangeText} ml-1`} href="https://www.instagram.com/2022painting" target="_blank">Instagram<i className="ml-1 fa-brands fa-instagram text-2xl"/></a></p>
            </div>
            <div className="w-full">
                <div className="flex ss:flex-row flex-col items-center ss:gap-5 gap-5 w-full">
                    <ImageComponent img={service_1}/>
                    <ImageComponent img={service_2}/>
                    <ImageComponent img={service_3}/>
                </div>
                <div className="flex gap-5 mt-8 w-full">
                    <ImageComponent img={service_4}/>
                    <ImageComponent img={service_5}/>
                    <ImageComponent img={service_6}/>
                </div>
            </div>            
        </div>

    </div>
  )
}

export default Services