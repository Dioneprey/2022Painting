import About from "./components/About"
import Cards from "./components/Cards"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { styles } from "./styles"
// import { styles } from "./styles"

function App() {

  return (
    <div className="overflow-x-hidden h-screen font-raleway pb-[200px]">
      <div className={`h-[160px]`}>
        <Header />
      </div>
      <div className={`relative bg-cover bg-center bg-no-repeat bg-[url('./assets/heroimg.jpg')] ${styles.paddingX}`}>
        <div className="absolute w-full h-full bg-black/60 left-0"/>
        <div className="relative"><Hero /> </div>      
      </div>
      <div className={`flex-col`}>
        <Cards />
        <About />
      </div>
      
    </div>
  )
}

export default App