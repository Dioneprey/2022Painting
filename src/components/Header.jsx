/* eslint-disable @typescript-eslint/no-unused-vars */
import { styles } from "../styles"
import { Link } from 'react-scroll';
import logo from '../assets/logo.png'
import React, { useEffect, useState } from "react";

const Header = () => {
  const [navPyBg, setNavPyBg] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const changenavPyBg = () => {
    window.scrollY >= 10 ? setNavPyBg(true) : setNavPyBg(false);
    // window.scrollY >= 300 ? setFloatButton(true) : setFloatButton(false);
}

  useEffect(() => {
      window.addEventListener('scroll', changenavPyBg);
      return () => {
          window.removeEventListener('scroll', changenavPyBg);
      }
  }, [])



  return (
    <header onClick={changenavPyBg} className={`select-none top-0 h-[160px] fixed z-50 w-full bg-white drop-shadow-lg`}>
      <div className={`${styles.paddingHeaderX} flex items-center justify-between border-b border-b-zinc-200 py-2`}>
        <div className="flex gap-2">
          <a className={`${styles.hoverOrangeText} text-zinc-700`} href="https://www.instagram.com/2022painting" target="_blank"><i className="fa-brands fa-instagram text-xl" /></a>
          <a className={`${styles.hoverOrangeText} text-zinc-700`} href="https://www.facebook.com/022painting" target="_blank"><i className="fa-brands fa-facebook-f text-xl" /></a>
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
        <ul className="flex gap-5 text-zinc-700 items-center">
          <li
            className={`${styles.hoverOrangeText} cursor-pointer`}>            
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-200}
              ignoreCancelEvents={true}
            > 
              Home
            </Link> 
          </li>
          <li 
            className={`${styles.hoverOrangeText} cursor-pointer`}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-160}
              ignoreCancelEvents={true}
            >
              About
            </Link>            
          </li>
          <li className={`${styles.hoverOrangeText} cursor-pointer`}>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-160}
              ignoreCancelEvents={true}
            >
              Services
            </Link>
          </li>
          <li className={`${styles.hoverOrangeText} cursor-pointer`}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-235}
              ignoreCancelEvents={true}
            >
              Contact           
            </Link>
          </li>
          <li className="p-3 cursor-pointer bg-[black] hover:bg-primaryOrange text-white transition-colors duration-300">
          <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-235}
              ignoreCancelEvents={true}
            >
              Request a quote           
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;