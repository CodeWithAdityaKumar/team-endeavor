/*
  MenuSectionPage: Dedicated Menu page section without the "Watch More" button.
  Matches desktop layout/theme of MenuSection and stays responsive on mobile/tablet.
*/

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MenuCard from './MenuCard'

gsap.registerPlugin(ScrollTrigger)

export default function MenuSectionPage() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.section1 h1', {
        y: 50,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.section1 h1',
          start: '0% 80%',
          scrub: 0.5,
        },
      })

      gsap.from('.section1 .menu_btn', {
        y: 50,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.section1 .menu_btn',
          start: '0% 80%',
          scrub: 1,
        },
      })

      gsap.from('.section1 .leaves img', {
        y: '50%',
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: '.section1 .leaves img',
          scrub: 1,
        },
      })

      gsap.from('.section1 .row_1 .col_1:nth-child(1)', {
        y: '20%',
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: '.section1 .row_1 .col_1:nth-child(1)',
          toggleActions: 'play stop  reset',
        },
      })
      gsap.from('.section1 .row_1 .col_1:nth-child(2)', {
        y: '50%',
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: '.section1 .row_1 .col_1:nth-child(2)',
          toggleActions: 'play stop  reset',
        },
      })
      gsap.from('.section1 .row_1 .col_1:nth-child(3)', {
        y: '65%',
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: '.section1 .row_1 .col_1:nth-child(3)',
          toggleActions: 'play stop  reset',
        },
      })
      gsap.from('.section1 .row_1 .col_1:nth-child(4)', {
        y: '30%',
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: '.section1 .row_1 .col_1:nth-child(4)',
          toggleActions: 'play stop  reset',
        },
      })

      gsap.from('.section1 .mochilli img', {
        x: '-50%',
        duration: 1.5,
        opacity: 0,
        scrollTrigger: {
          trigger: '.section1 .mochilli img',
          scrub: 0.5,
        },
      })

      gsap.from('.section1 .motomato img', {
        x: '50%',
        duration: 1.5,
        opacity: 0,
        scrollTrigger: {
          trigger: '.section1 .motomato img',
          scrub: 0.5,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const bg = "/assests/main%20image.jpg"
  const item = "/assests/menu%20item.png"

  return (
    <div ref={sectionRef} className="section1 w-full min-h-[100svh] md:h-[180vh] bg-[#16171a] px-4 md:px-[100px] relative pt-16 sm:pt-20 md:pt-0">
      <h1 className="text-white text-[9vw] md:text-[3vw] md:absolute md:top-[8%]">MENU</h1>

      {/* Category buttons */}
  <div className="menu_btn w-full md:w-[55%] h-auto md:h-[80px] relative md:absolute md:top-[13%] mt-4 md:mt-0 flex flex-wrap gap-3 md:gap-2 md:flex-nowrap items-center justify-start md:justify-between z-10">
        {['Startery','Burgery','Satoshi','Ziberia','Poutine'].map((label, idx) => (
          <a
            key={label}
            href="#"
            className={`${idx===1 ? 'text-white bg-[linear-gradient(90deg,rgba(0,0,0,0)_-34%,rgba(203,18,52,1)_0%,rgba(134,8,31,1)_100%)]' : 'text-[#828282] bg-[#343434]'} w-[46%] sm:w-[160px] h-[46px] md:h-[50px] rounded-[50px] text-center flex items-center justify-center overflow-hidden no-underline`}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Leaves decoration */}
      <div className="leaves hidden md:block">
        <img src="/assests/leaves.png" alt="leaves" className="w-[16%] absolute right-[1%] top-[15%] rotate-[30deg]" />
      </div>

      {/* Gallery */}
  <div className="gallery w-full md:w-[85%] md:h-[70%] md:absolute md:top-[22%] flex flex-col gap-6 md:gap-0 justify-between z-0 md:z-[52] mt-8 sm:mt-10 md:mt-0">
        {/* Row 1 */}
        <div className="row_1 w-full h-auto md:h-[48%] grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:flex md:justify-between">
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-right" />
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-right" />
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-right" />
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-left" />
        </div>
        {/* Row 2 */}
        <div className="row_1 w-full h-auto md:h-[48%] grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:flex md:justify-between">
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-right" />
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-right" />
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-right" />
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-left" />
        </div>
      </div>

      {/* Page component: no Watch More button here */}

      <div className="mochilli hidden md:block"><img src="/assests/motion%20blur%20red%20chilli.png" alt="motion chilli" className="w-[20%] absolute bottom-[5%] left-[-8%] -rotate-90" /></div>
      <div className="motomato hidden md:block"><img src="/assests/motion%20tomato.png" alt="motion tomato" className="w-[22%] absolute right-[-5%] bottom-[-10%] z-[50]" /></div>
      <div className="fire_particles hidden md:block"><img src="/assests/Fire%20Particles.png" alt="fire particles" className="w-1/2 absolute bottom-[-27%] left-[-30%] z-[50]" /></div>
    </div>
  )
}
