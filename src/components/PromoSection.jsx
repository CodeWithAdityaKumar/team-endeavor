/*
  PromoSection component replicating Section 2 from public/index3.html.
  Background uses the same main image with overlaying content, headings, buttons, and decorative images.
*/

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PromoSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.onion_with_chilli img', {
        scale: 0,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.onion_with_chilli img',
          start: 'top 100%',
          scrub: 0.1,
        },
      })

      gsap.from('.fry_pan img', {
        x: '-50%',
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.fry_pan img',
          start: 'top 90%',
          toggleActions: 'play stop reverse reset',
        },
      })

      gsap.from('.heading_text h1', {
        x: '-10%',
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.heading_text h1',
          start: 'top 90%',
          toggleActions: 'play stop reverse reset',
        },
      })

      gsap.from('.heading_text h2', {
        x: '-20%',
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.heading_text h2',
          start: 'top 90%',
          toggleActions: 'play stop reverse reset',
        },
      })

      gsap.from('.motion_green_chilli img', {
        y: '10%',
        duration: 1,
        opacity: 0.5,
        scrollTrigger: {
          trigger: '.motion_green_chilli img',
          start: 'top 90%',
          scrub: 0.1,
        },
      })

      gsap.from('.button_section .btn_1', {
        y: '22%',
        duration: 1,
        opacity: 0.5,
        scrollTrigger: {
          trigger: '.button_section .btn_1',
          start: 'top 90%',
          toggleActions: 'play stop reverse reset',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="section2 w-full md:min-h-[100vh] bg-[#16171a] relative overflow-visible md:overflow-hidden">
      <div
        className="footer_primary w-full h-auto md:h-[65%] bg-cover relative md:absolute md:top-1/2 md:-translate-y-1/2 py-12 md:py-0"
        style={{ backgroundImage: "url('/assests/main%20image.jpg')" }}
      >
        <div className="heading_text">
          <h2 className="text-white text-[8vw] md:text-[35px] font-normal relative md:absolute md:left-[10%] md:top-[15%] pl-[6%] pt-[6%] md:pl-0 md:pt-0">
            Try our
          </h2>
          <h1 className="text-white text-[10vw] md:text-[66px] w-[80%] md:w-[20%] leading-[1.1] md:leading-[70px] relative md:absolute md:left-[10%] md:top-[25%] pl-[6%] mt-2 md:pl-0">
            Ultimate salads
          </h1>
        </div>

        <div className="button_section w-[88%] md:w-[30%] h-auto md:h-[20%] relative md:absolute md:top-[60%] md:left-[10%] flex flex-col md:flex-row gap-4 md:gap-4 items-stretch md:items-center justify-between mt-6 md:mt-0 pl-[6%] md:pl-0">
          <div className="btn_1 w-full md:w-[48%] min-h-[90px] md:h-full flex flex-col md:flex-row items-start md:items-center gap-2 relative">
            <i className="fa-solid fa-fish-fins text-white text-[32px] w-[70px] h-[70px] rounded-[50px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_-34%,rgba(255,0,47,1)_0%,rgba(198,0,36,1)_100%)] shadow-icon flex items-center justify-center" style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}></i>
            <h2 className="text-white text-[16px] md:text-[18px] mt-2 md:mt-0 md:absolute md:left-[40%] md:top-[22%] w-[90%]">180g of meat</h2>
            <p className="text-gray-400 w-[95%] text-[12px] md:text-[12px] md:absolute md:left-[40%] md:bottom-[12%]">Juicy, seared to perfection for a rich, smoky flavor in every bite.</p>
          </div>
          <div className="btn_1 w-full md:w-[48%] min-h-[90px] md:h-full flex flex-col md:flex-row items-start md:items-center gap-2 relative">
            <i className="fa-solid fa-carrot text-white text-[32px] w-[70px] h-[70px] rounded-[50px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_-34%,rgba(255,0,47,1)_0%,rgba(198,0,36,1)_100%)] shadow-icon flex items-center justify-center" style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}></i>
            <h2 className="text-white text-[16px] md:text-[18px] mt-2 md:mt-0 md:absolute md:left-[40%] md:top-[22%] w-[90%]">Fresh ingredients</h2>
            <p className="text-gray-400 w-[95%] text-[12px] md:text-[12px] md:absolute md:left-[40%] md:bottom-[12%]">Crisp veggies sourced daily for peak freshness and vibrant taste.</p>
          </div>
        </div>

        <div className="fry_pan hidden md:block">
          <img src="/assests/section%202%20footer%20image.png" alt="fry pan" className="w-[35%] absolute right-0 rotate-100 top-[28%]" style={{}} />
        </div>
        <div className="motion_green_chilli hidden md:block">
          <img src="/assests/green%20chilli.png" alt="green chilli" className="w-[12%] rotate-45 absolute top-[80%] left-[10%]" />
        </div>
        <div className="onion_with_chilli hidden md:block">
          <img src="/assests/onion%20and%20chilli.png" alt="onion and chilli" className="w-[20%] absolute right-[19%] top-[-20%] -rotate-[20deg]" />
        </div>
      </div>

      <div className="fire_particles_section2 hidden md:block">
        <img src="/assests/Fire%20Particles.png" alt="fire particles" className="z-[50] absolute right-[-25%] top-[30%] w-[32%]" />
      </div>
    </div>
  )
}
