/*
  MenuSection component replicating Section 1 from public/index3.html
  Includes the MENU header, category buttons, decorative leaves, and an 8-card gallery using MenuCard.
*/

import MenuCard from './MenuCard'

export default function MenuSection() {
  const bg = "/assests/main%20image.jpg"
  const item = "/assests/menu%20item.png"
  // cards will be data-driven later if needed

  return (
    <div className="section1 w-full min-h-[180vh] md:h-[180vh] bg-[#16171a] px-4 md:px-[100px] relative">
      <h1 className="text-white text-[9vw] md:text-[3vw] absolute top-[5%] md:top-[8%]">MENU</h1>

      {/* Category buttons */}
      <div className="menu_btn w-full md:w-[55%] h-auto md:h-[80px] absolute top-[12%] md:top-[13%] flex flex-wrap gap-3 md:gap-0 md:flex-nowrap items-center justify-start md:justify-between">
        {['Startery','Burgery','Satoshi','Ziberia','Poutine'].map((label, idx) => (
          <a
            key={label}
            href="#"
            className={`inline-block no-underline ${idx===1 ? 'text-white bg-[linear-gradient(90deg,rgba(0,0,0,0)_-34%,rgba(203,18,52,1)_0%,rgba(134,8,31,1)_100%)]' : 'text-[#828282] bg-[#343434]'} w-[46%] sm:w-[160px] h-[46px] md:h-[50px] rounded-[50px] text-center flex items-center justify-center overflow-hidden`}
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
      <div className="gallery w-full md:w-[85%] md:h-[70%] absolute top-[24%] md:top-[22%] flex flex-col gap-6 md:gap-0 justify-between z-[52]">
        {/* Row 1 */}
        <div className="row_1 w-full h-auto md:h-[48%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:flex md:justify-between">
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-right" />
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-right" />
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-right" />
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-left" />
        </div>
        {/* Row 2 */}
        <div className="row_1 w-full h-auto md:h-[48%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:flex md:justify-between">
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-right" />
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-right" />
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-right" />
          <MenuCard bgImage={bg} itemImage={item} origin="origin-bottom-left" />
        </div>
      </div>

      {/* Bottom CTA + decorations */}
  <a href="#" className="footer_btn w-[180px] h-[50px] border border-gray-500 rounded-[50px] absolute bottom-2 md:bottom-0 left-1/2 -translate-x-1/2 no-underline text-gray-500 flex items-center justify-center transition duration-500 font-extrabold hover:bg-[#cb1234] hover:text-white">Watch More</a>

      <div className="mochilli hidden md:block"><img src="/assests/motion%20blur%20red%20chilli.png" alt="motion chilli" className="w-[20%] absolute bottom-[5%] left-[-8%] -rotate-90" /></div>
      <div className="motomato hidden md:block"><img src="/assests/motion%20tomato.png" alt="motion tomato" className="w-[22%] absolute right-[-5%] bottom-[-10%] z-[50]" /></div>
      <div className="fire_particles hidden md:block"><img src="/assests/Fire%20Particles.png" alt="fire particles" className="w-1/2 absolute bottom-[-40%] left-[-30%] z-[50]" /></div>
    </div>
  )
}
