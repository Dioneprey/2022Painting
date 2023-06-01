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
    const ImageComponent = (props: any) => {
        return (
          <div className="bg-black cursor-pointer relative rounded-lg drop-shadow-xl hover:scale-105 hover:rotate-[0.5deg] transition-all duration-300 ">
            <PhotoProvider>
              <PhotoView src={props.img}>
                <img className="p-1 w-[330px] h-[300px] rounded-xl" src={props.img} alt="Service photo one" />
              </PhotoView>
            </PhotoProvider>
          </div>
        )
      }
      
  return (
    <div className={`px-32 mt-[0.5deg] relative`}>
        <div className="mt-10 flex justify-between p-10">
            <div className="flex flex-col flex-1 text-white">
                <h2 className="text-[48px] text-black mt-16 text-left font-bold relative uppercase">Some of our services</h2>
                <p className="mt-5 text-left text-black text-lg relative">More in our<a className={`${styles.hoverOrangeText} ml-1`} href="https://www.instagram.com/2022painting" target="_blank">Instagram<i className="ml-1 fa-brands fa-instagram text-2xl"/></a></p>
            </div>
            <div>
                <div className="flex gap-8">
                    <ImageComponent img={service_1}/>
                    <ImageComponent img={service_2}/>
                    <ImageComponent img={service_3}/>
                </div>
                <div className="flex gap-8 mt-8">
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