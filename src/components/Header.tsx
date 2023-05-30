import { styles } from "../styles"
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className={`h-full bg-white drop-shadow-lg`}>
      <div className={`${styles.paddingHeaderX} flex items-center justify-between border-b border-b-zinc-200 py-2`}>
        <div className="flex gap-2">
          <a className={`${styles.hoverOrangeText} text-zinc-700`} href="https://www.instagram.com/2022painting" target="_blank"><i className="fa-brands fa-instagram text-xl"/></a>
          <a className={`${styles.hoverOrangeText} text-zinc-700`} href="https://www.facebook.com/022painting" target="_blank"><i className="fa-brands fa-facebook-f text-xl"/></a>
        </div>
        <div className="flex gap-5">
          <a className={`${styles.hoverOrangeText} text-zinc-700`} href="mailto:2022painting@gmail.com"><i className="fa-solid fa-envelope mr-2" />2022painting<span className="font-sans">@</span>gmail.com</a>
          <a className={`${styles.hoverOrangeText} text-zinc-700`} href="tel:15083717829"><i className="fa-solid fa-phone" /> +1 (508) 371-7829</a>
        </div>
      </div>
      <nav className={`${styles.paddingX} flex justify-between items-center`}>
        <div>
          <a href=""><img src={logo} alt="Logo 2022Painting" className="h-28" /></a>
        </div>
        <ul className="flex gap-5 text-zinc-700">
          <li className={`${styles.hoverOrangeText}`}><a href="#">Home</a></li>
          <li className={`${styles.hoverOrangeText}`}><a href="#">About</a></li>
          <li className={`${styles.hoverOrangeText}`}><a href="#">Contact</a></li>
          <li><a className="p-3 bg-[black] hover:bg-primaryOrange text-white transition-colors duration-300" href="">Request a quote</a></li>
        </ul>
      </nav>
    </header>
  )
}
