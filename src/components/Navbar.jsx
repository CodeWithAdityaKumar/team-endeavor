/*
  Navbar component reproducing the navbar from public/index3.html using Tailwind classes.
  Assumes assets are located under /public/assests/ (note the original path uses 'assests').
*/

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Navbar() {
  const navRef = useRef(null)
  const navRefimg = useRef(null)

  useEffect(() => {
    if (!navRef.current) return
    // From script.js: gsap.from(".navabar", { y: "-200%", duration: 1.5 })
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { x: '200%', duration: 1.5, immediateRender: false })
      gsap.from(navRefimg.current, { x: '-200%', duration: 1.5, immediateRender: false })
    }, navRef)
    return () => ctx.revert()
  }, [])

  return (
  <div className="navabar w-full h-[80px] md:h-[120px] bg-transparent absolute top-0 left-0 flex items-center justify-between px-4 md:px-[70px] z-[200]">
      <div id="logo">
        {/* Using public asset path */}
        <img src="/assests/logo.png" alt="logo" className="w-[45%] md:w-2/5" ref={navRefimg} />
      </div>
      <div className="listing hidden md:block" ref={navRef}>
        <ul className="list-none">
          <li className="inline-block mx-2 md:mx-[18px]">
            <a href="#" className="no-underline text-white transition duration-500 font-semibold hover:text-[#cb1234]">Home</a>
          </li>
          <li className="inline-block mx-2 md:mx-[18px]">
            <a href="#" className="no-underline text-white transition duration-500 font-semibold hover:text-[#cb1234]">Menu</a>
          </li>
          <li className="inline-block mx-2 md:mx-[18px]">
            <a href="#" className="no-underline text-white transition duration-500 font-semibold hover:text-[#cb1234]">O nass</a>
          </li>

          {/* Price item with special before/after lines */}
          <li className="inline-block mx-2 md:mx-[18px] relative before:content-[''] before:w-[44px] before:h-[1px] before:bg-[#cb1234] before:absolute before:bottom-[-10%] before:left-[45%] after:content-[''] after:w-[1px] after:h-[45px] after:bg-[#cb1234] after:absolute after:bottom-[-100%] after:left-[135%]">
            <a href="#" className="no-underline text-[#cb1234] font-semibold relative pb-[5px]"><i className="fa-solid fa-cart-shopping mr-[5px]"></i> 35.00</a>
            <p className="text-[12px] text-[#b6b6b6] absolute top-[130%] left-[35%] w-full">| product</p>
          </li>

          {/* Hours item with after line */}
          <li className="inline-block mx-2 md:mx-[18px] relative after:content-[''] after:w-[1px] after:h-[45px] after:bg-[#cb1234] after:absolute after:bottom-[-100%] after:left-[110%]">
            <a href="#" className="no-underline text-white font-semibold"><i className="fa-solid fa-cart-shopping text-[#cb1234] mr-[5px]"></i> Poniedzlatek- platek</a>
            <p className="text-[12px] text-[#b6b6b6] absolute top-[130%] left-[18%] w-full">ad 12:00 to 23.00</p>
          </li>

          {/* Phone item */}
          <li className="inline-block mx-2 md:mx-[18px] relative">
            <a href="#" className="no-underline text-white font-semibold"><i className="fa-solid fa-phone text-[#cb1234] mr-[5px]"></i> +48 123 456 789</a>
            <p className="text-[12px] text-[#cb1234] absolute top-[130%] left-[22%] w-full">Dial up</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
