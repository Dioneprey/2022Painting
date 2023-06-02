import { useEffect } from "react"
import About from "./components/About"
import Cards from "./components/Cards"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Maps from "./components/Maps"
import Services from "./components/Services"
import { styles } from "./styles"
import Footer from "./components/Footer"

const App = () => {

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
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
    <div className="w-full h-full overflow-x-hidden font-raleway bg-[#f7f7f7]">
      <div className="w-full overflow-y-hidden">
      <Header />
      <div className={`mt-[160px] relative bg-cover bg-[#f7f7f7] bg-center bg-no-repeat bg-[url('./assets/heroimg.jpg')] rounded-b-[60px] ${styles.paddingX}`}>
        <div id="home" className="absolute w-full h-full bg-black/60 left-0 rounded-b-[60px]"/>
        <div className="relative">
          <Hero/>
        </div>      
      </div>
        <div >
          <About />
        </div>
        <div id="cards" className="divAnimate">
          <Cards />
        </div>
        <div id="services" className="divAnimate">
          <Services />
        </div>
        <div id="contact" className="divAnimate">
          <Contact />
          <Footer />
        </div>        
      </div> 
    </div>
  )
}

export default App
