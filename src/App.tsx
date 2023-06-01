/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react"
import About from "./components/About"
import Cards from "./components/Cards"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Maps from "./components/Maps"
import Services from "./components/Services"
import { styles } from "./styles"
// import { styles } from "./styles"

function App() {

  useEffect(() => {
    const handleIntersection = (entries: any[]) => {
      entries.forEach((entry: { isIntersecting: any; target: { classList: { add: (arg0: string) => void } } }) => {
        if (entry.isIntersecting) {          
            entry.target.classList.add('animate');
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

    const divContent = document.querySelectorAll('.divAnimate');

    divContent.forEach(elemento => {
      observer.observe(elemento);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="overflow-x-hidden h-screen font-raleway pb-[200px] bg-[#f7f7f7]">
      <Header />
      <div className={`mt-[160px] relative bg-cover bg-[#f7f7f7] bg-center bg-no-repeat bg-[url('./assets/heroimg.jpg')] rounded-b-[60px] ${styles.paddingX}`}>
        <div className="absolute w-full h-full bg-black/60 left-0 rounded-b-[60px]"/>
        <div id="home" className="relative"><Hero /> </div>      
      </div>
      <div className={`flex-col`}>
        <div>
          <About />
        </div>
        <div className="divAnimate">
          <Cards />
        </div>
        <div id="services" className="divAnimate">
          <Services />
        </div>
        <div id="contact" className="divAnimate">
          <Contact />
        </div>        
         <Maps />
      </div>
      
    </div>
  )
}

export default App
