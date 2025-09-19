/*
  Hero component replicating the hero section from public/index3.html.
  Uses public assets under /assests/ and Tailwind classes identical to the original.
*/

export default function Hero() {
  return (
    <div
      className="herobox w-full h-[120vh] md:h-[110vh] bg-cover relative overflow-hidden"
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
          className="absolute right-[2%] md:right-[5%] top-[38%] md:top-[25%] w-[75%] sm:w-[60%] md:w-[40%] z-[3] animate-moving"
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

      <h1 className="text-white absolute z-[5] top-[18%] md:top-[30%] left-[7%] md:left-[13%] text-[9vw] md:text-[6vw] w-[80%] md:w-[30%] leading-[60px] md:leading-[95px] font-bold">
        Burger Spiozek
      </h1>
      <p className="absolute top-[35%] md:top-[58%] left-[7%] md:left-[13%] z-[5] text-[#7f7f7f] w-[85%] md:w-[33%] tracking-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestias minima, praesentium deserunt tempore temporibus reprehenderit optio itaque repudiandae cupiditate.
      </p>

      <div className="absolute z-[5] top-[50%] md:top-[70%] left-[7%] md:left-[13%]">
        <a
          href="#"
          className="group first no-underline text-white w-[150px] md:w-[160px] h-[46px] md:h-[50px] rounded-[50px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_-34%,rgba(203,18,52,1)_0%,rgba(134,8,31,1)_100%)] text-center flex items-center justify-center shadow-btn overflow-hidden relative"
        >
          Order Now <i className="fa-solid fa-cart-shopping text-[12px] ml-[10px]"></i>
          <span className="pointer-events-none before:absolute before:content-[''] before:w-[10px] before:h-[120px] before:bg-white before:rotate-45 before:top-[-80%] before:left-[-20%] group-hover:before:animate-pass"></span>
        </a>
      </div>

      <div className="absolute z-[5] top-[50%] md:top-[70%] left-[46%] md:left-[25%] -translate-x-1/2 md:translate-x-0">
        <a
          href="#"
          className="second no-underline text-white w-[150px] md:w-[160px] h-[46px] md:h-[50px] rounded-[50px] bg-transparent border border-white text-center flex items-center justify-center transition duration-500 hover:bg-[#cb1234] hover:border-[#cb1234]"
        >
          Explore Now <i className="fa-solid fa-arrow-right text-[12px] ml-[10px]"></i>
        </a>
      </div>

      <div className="absolute top-[28%] md:top-[36%] left-[55%] z-[5]">
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
