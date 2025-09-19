import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BurgerAnimation() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.from(['.layer-3', '.layer-4'], {
        y: 200,
        opacity: 0,
        stagger: -0.25,
        duration: 0.5,
      })
        .from(['.layer-2', '.layer-1'], {
          y: -200,
          opacity: 0,
          stagger: 0.25,
          duration: 0.5,
        })
        .from('.calories', {
          y: 100,
          opacity: 0,
          stagger: 0.2,
        })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full relative grid place-content-center py-16 md:py-24 bg-transparent">
      <div className="w-full flex items-center justify-center">
        <div className="cover-img relative h-[620px] md:h-[700px]">
          <div className="layers w-[300px] md:w-[380px] h-full relative md:scale-[1.2]">
            <div className="layer layer-4 absolute w-full top-[calc(100%-400px)] -z-[3]">
              <img src="/images/layer-4.png" alt="layer 4" className="w-full object-contain" />
            </div>
            <div className="layer layer-3 absolute w-full top-[calc(100%-460px)] -z-[2]">
              <img src="/images/layer-3.png" alt="layer 3" className="w-full object-contain" />
            </div>
            <div className="layer layer-2 absolute w-full top-[calc(100%-510px)] -z-[1]">
              <img src="/images/layer-2.png" alt="layer 2" className="w-full object-contain" />
            </div>
            <div className="layer layer-1 absolute w-full top-[calc(100%-600px)] z-[1] md:scale-[1.2]">
              <img src="/images/layer-1.png" alt="layer 1" className="w-full object-contain" />
            </div>
          </div>
          <div className="nutrition absolute z-10 flex top-[20px] right-[-70px] md:right-[-150px] gap-[5px]">
            <div className="calories bg-[url('/images/frame.png')] bg-no-repeat bg-contain h-[200px] w-[80px] text-center text-[12px] leading-[1.3] pt-[15px] text-black">
              Calories <br />
              <small className="opacity-50">Kcal</small> <br />
              <span className="text-[#ef420e] text-[14px]">1370</span>
            </div>
            <div className="calories bg-[url('/images/frame.png')] bg-no-repeat bg-contain h-[200px] w-[80px] text-center text-[12px] leading-[1.3] pt-[15px] text-black">
              Fat <br />
              <small className="opacity-50">g</small> <br />
              <span className="text-[#ef420e] text-[14px]">93</span>
            </div>
            <div className="calories bg-[url('/images/frame.png')] bg-no-repeat bg-contain h-[200px] w-[80px] text-center text-[12px] leading-[1.3] pt-[15px] text-black">
              Protein <br />
              <small className="opacity-50">g</small> <br />
              <span className="text-[#ef420e] text-[14px]">85</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
