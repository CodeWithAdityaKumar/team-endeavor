/*
  Hero component replicating the hero section from public/index3.html.
  Uses public assets under /assests/ and Tailwind classes identical to the original.
*/

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      // Tomato image
      gsap.from('.tomato img', {
        scale: 0,
        delay: 1.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.tomato img',
          toggleActions: 'play reverse restart reset',
        },
      })

      // Headline and paragraph
      gsap.from('.herobox h1', {
        x: '-80%',
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.tomato img',
          toggleActions: 'play reverse restart reset',
        },
      })
      gsap.from('.herobox p', {
        y: '150%',
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.herobox p',
          toggleActions: 'play reverse restart reset',
        },
      })

      // CTA buttons
      gsap.from('.herobox a.first', {
        scale: 0,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.herobox a.first',
          toggleActions: 'play reverse restart reset',
        },
      })
      gsap.from('.herobox a.second', {
        scale: 0,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.herobox a.second',
          toggleActions: 'play reverse restart reset',
        },
      })

      // Product image and chilli
      gsap.from('.product_image img', {
        x: '100%',
        delay: 1.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.product_image img',
          toggleActions: 'play reverse restart reset',
        },
      })
      gsap.from('.chilli img', {
        x: '100%',
        delay: 1.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.chilli img',
          toggleActions: 'play reverse restart reset',
        },
      })

      // Price pill
      gsap.from('.herobox a.third', {
        x: '200%',
        delay: 1.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.herobox a.third',
          toggleActions: 'play reverse restart reset',
        },
      })

      // Motion elements
      gsap.from('.motionChilli img', {
        y: '20%',
        delay: 1.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.motionChilli img',
          toggleActions: 'play reverse restart reset',
        },
      })
      gsap.from('.motionTomato img', {
        x: '-100%',
        delay: 1.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.motionTomato img',
          toggleActions: 'play reverse restart reset',
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={heroRef}
      className="herobox w-full min-h-[100svh] md:h-[110vh] bg-cover relative overflow-hidden md:pt-0 pt-24 sm:pt-28"
      style={{ backgroundImage: "url('/assests/main%20image.jpg')" }}
    >
      {/* overlay equivalent of ::before */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_-34%,rgba(0,0,0,0.2105)_0%,rgba(0,0,0,0.63069)_100%)]"></div>

      <div className="fire_overlay absolute inset-0">
        <img src="/assests/Fire%20Particles.png" alt="fire" className="w-full h-full object-cover object-top" />
      </div>

      <div className="glow w-[3000px] h-[3000px] bg-[radial-gradient(circle,rgba(0,0,0,0)_-34%,rgba(255,85,0,1)_0%,rgba(255,166,0,0)_39%)] rounded-full absolute right-[-72%] top-[-50%]"></div>

      <div className="product_image">
        <img
          src="/assests/burger.png"
          alt="product"
          className="block mx-auto mt-2 w-[82%] sm:w-[65%] z-[3] md:absolute md:right-[5%] md:top-[25%] md:w-[40%] md:animate-moving"
        />
      </div>

      <div className="chilli hidden sm:block">
        <img
          src="/assests/red%20chilli.png"
          alt="chilli"
          className="absolute w-[22%] md:w-[18%] right-[2%] md:right-[5%] top-[5%] md:top-[8%] [transform:rotateX(10deg)_rotateY(200deg)] [transform-origin:center]"
        />
      </div>

      <div className="motionChilli hidden sm:block">
        <img
          src="/assests/motion%20blur%20red%20chilli.png"
          alt="motion chilli"
          className="absolute w-[26%] md:w-[22%] right-[40%] md:right-[50%] top-[70%] md:top-[65%]"
        />
      </div>

      <div className="tomato hidden sm:block">
        <img src="/assests/tomato.png" alt="tomato" className="absolute w-[24%] md:w-[18%] left-0 top-[10%] z-[6]" />
      </div>

      <div className="motionTomato hidden sm:block">
        <img
          src="/assests/motion%20tomato.png"
          alt="motion tomato"
          className="absolute w-[30%] md:w-[25%] left-[-18%] md:left-[-12%] top-[65%] md:top-[55%] opacity-80 [transform-origin:center] [transform:scaleY(1.2)]"
        />
      </div>

      <h1 className="text-white z-[5] md:absolute md:top-[30%] md:left-[13%] text-[9.5vw] sm:text-[8vw] md:text-[6vw] max-w-[85%] md:w-[30%] leading-[1.1] md:leading-[95px] font-bold px-6 sm:px-8 mt-4 md:mt-0">
        Burger Spiozek
      </h1>
      <p className="md:absolute md:top-[58%] md:left-[13%] z-[5] text-[#b0b0b0] md:text-[#7f7f7f] w-[85%] md:w-[33%] tracking-normal px-6 sm:px-8 mt-3 md:mt-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestias minima, praesentium deserunt tempore temporibus reprehenderit optio itaque repudiandae cupiditate.
      </p>

      <div className="z-[5] md:absolute md:top-[70%] md:left-[13%] px-6 sm:px-8 mt-6 md:mt-0">
        <a
          href="#"
          className="group first no-underline text-white w-[160px] md:w-[160px] h-[48px] md:h-[50px] rounded-[50px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_-34%,rgba(203,18,52,1)_0%,rgba(134,8,31,1)_100%)] text-center inline-flex items-center justify-center shadow-btn overflow-hidden relative"
        >
          Order Now <i className="fa-solid fa-cart-shopping text-[12px] ml-[10px]"></i>
          <span className="pointer-events-none before:absolute before:content-[''] before:w-[10px] before:h-[120px] before:bg-white before:rotate-45 before:top-[-80%] before:left-[-20%] group-hover:before:animate-pass"></span>
        </a>
      </div>

      <div className="z-[5] md:absolute md:top-[70%] md:left-[25%] md:translate-x-0 px-6 sm:px-8 mt-3 md:mt-0">
        <a
          href="#"
          className="second no-underline text-white w-[160px] md:w-[160px] h-[48px] md:h-[50px] rounded-[50px] bg-transparent border border-white text-center inline-flex items-center justify-center transition duration-500 hover:bg-[#cb1234] hover:border-[#cb1234]"
        >
          Explore Now <i className="fa-solid fa-arrow-right text-[12px] ml-[10px]"></i>
        </a>
      </div>

      <div className="hidden md:flex md:absolute md:top-[36%] md:left-[55%] z-[5]">
        <a
          href="#"
          className="third no-underline text-white w-[140px] md:w-[160px] h-[46px] md:h-[50px] rounded-[50px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_-34%,rgba(255,0,47,1)_0%,rgba(135,0,25,1)_100%)] text-center flex items-center justify-center shadow-btn2 animate-btnMove"
        >
          26.69xl
        </a>
      </div>
    </div>
  )
}
