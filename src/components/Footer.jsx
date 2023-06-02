import { styles } from "../styles"

const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <div className={`flex ss:flex-row flex-col justify-between ${styles.paddingX} py-5`}>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <a className={`${styles.hoverOrangeText} text-white`} href="https://www.instagram.com/2022painting" target="_blank"><i className="fa-brands fa-instagram text-xl" /></a>
            <a className={`${styles.hoverOrangeText} text-white`} href="https://www.facebook.com/022painting" target="_blank"><i className="fa-brands fa-facebook-f text-xl" /></a>
          </div>
          <p>
            <span className="font-bold">2022PAINTING</span> <br />
            <a target="_blank" className={`${styles.hoverOrangeText}`} href="https://www.google.com/maps/place/33+Hastings+St,+Framingham,+MA+01701,+EUA/@42.3023726,-71.4136862,17z/data=!3m1!4b1!4m5!3m4!1s0x89e388f473690409:0xd38692d2a1b3cba3!8m2!3d42.3023687!4d-71.4111113?entry=ttu">33 Hastings St, Framingham, MA 01701, EUA</a>
          </p>
        </div>
          <div className="flex ss:mt-0 mt-8 sM:flex-row flex-col sM:items-center justify-center gap-2">
            <a className={`${styles.hoverOrangeText}`} href="mailto:2022painting@gmail.com"><i className="fa-solid fa-envelope mr-2" />2022painting<span className="font-sans">@</span>gmail.com</a>
            <a className={`${styles.hoverOrangeText}`} href="tel:15083717829"><i className="fa-solid fa-phone" /> +1 (508) 371-7829</a>
          </div>
      </div>
    </div>
  )
}

export default Footer