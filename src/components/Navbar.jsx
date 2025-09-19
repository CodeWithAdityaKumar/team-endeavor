/*
  Navbar component reproducing the navbar from public/index3.html using Tailwind classes.
  Assumes assets are located under /public/assests/ (note the original path uses 'assests').
*/

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Navbar() {
  const navRef = useRef(null)
  const MobnavRef = useRef(null)
  const navRefimg = useRef(null)
  const drawerRef = useRef(null)
  const overlayRef = useRef(null)
  const [open, setOpen] = useState(false)
  const drawerTl = useRef(null)

  useEffect(() => {
    if (!navRef.current) return
    // From script.js: gsap.from(".navabar", { y: "-200%", duration: 1.5 })
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { x: '200%', duration: 1.5, immediateRender: false })
      gsap.from(MobnavRef.current, { x: '150%', duration: 1, immediateRender: false })
      gsap.from(navRefimg.current, { x: '-200%', duration: 1.5, immediateRender: false })
    }, navRef)
    return () => ctx.revert()
  }, [])

  // Build the drawer timeline once
  useEffect(() => {
    if (!drawerRef.current || !overlayRef.current) return

    // kill existing
    if (drawerTl.current) {
      drawerTl.current.kill()
      drawerTl.current = null
    }

    const tl = gsap.timeline({ paused: true })
      .set(overlayRef.current, { autoAlpha: 0, pointerEvents: 'none' })
      .set(drawerRef.current, { xPercent: 100, visibility: 'visible' })
      .to(overlayRef.current, { autoAlpha: 1, duration: 0.25, onStart: () => gsap.set(overlayRef.current, { pointerEvents: 'auto' }) }, 0)
      .to(drawerRef.current, { xPercent: 0, duration: 0.35, ease: 'power3.out' }, 0)

    drawerTl.current = tl

    return () => {
      tl.kill()
      drawerTl.current = null
    }
  }, [])

  // Control open/close via timeline
  useEffect(() => {
    const tl = drawerTl.current
    if (!tl) return
    if (open) {
      tl.play()
    } else {
      tl.eventCallback('onReverseComplete', () => {
        if (overlayRef.current) gsap.set(overlayRef.current, { pointerEvents: 'none' })
      })
      tl.reverse()
    }
  }, [open])

  return (
  <div className="navabar w-full h-[80px] md:h-[120px] bg-transparent absolute top-0 left-0 flex items-center justify-between px-4 md:px-[70px] z-[200]">
      <div id="logo">
        {/* Using public asset path */}
        <img src="/assests/logo.png" alt="logo" className="w-[45%] md:w-2/5" ref={navRefimg} />
      </div>
      {/* Desktop nav */}
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

      {/* Mobile hamburger */}
      <button
      ref={MobnavRef}
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="md:hidden text-white text-3xl p-2"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={() => setOpen(false)}
        className="fixed inset-0 bg-black/50 opacity-0 md:hidden z-[190]"
        style={{ visibility: 'hidden' }}
      />

      {/* Right drawer */}
      <aside
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-72 max-w-[80%] bg-[#16171a] md:hidden z-[200] shadow-icon border-l border-[#292a2f]"
        style={{ visibility: 'hidden' }}
      >
        <div className="flex items-center justify-between h-[80px] px-5 border-b border-[#292a2f]">
          <img src="/assests/logo.png" alt="logo" className="h-20" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-white text-2xl p-2 z-50"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <nav className="px-5 py-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="block text-white font-semibold hover:text-[#cb1234]">Home</a>
            </li>
            <li>
              <a href="#" className="block text-white font-semibold hover:text-[#cb1234]">Menu</a>
            </li>
            <li>
              <a href="#" className="block text-white font-semibold hover:text-[#cb1234]">O nass</a>
            </li>
            <li className="pt-2 border-t border-[#292a2f]">
              <a href="#" className="block text-[#cb1234] font-semibold"><i className="fa-solid fa-cart-shopping mr-2"></i>35.00</a>
              <p className="text-[12px] text-[#b6b6b6] mt-1">| product</p>
            </li>
            <li>
              <a href="#" className="block text-white font-semibold"><i className="fa-solid fa-clock text-[#cb1234] mr-2"></i>Poniedzlatek- platek</a>
              <p className="text-[12px] text-[#b6b6b6]">ad 12:00 to 23.00</p>
            </li>
            <li>
              <a href="#" className="block text-white font-semibold"><i className="fa-solid fa-phone text-[#cb1234] mr-2"></i>+48 123 456 789</a>
              <p className="text-[12px] text-[#cb1234]">Dial up</p>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}
