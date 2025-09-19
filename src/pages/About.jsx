

export default function About() {
  return (
    <div className="min-h-screen bg-[#101116] text-white">
      {/* Hero-style intro strip */}
      <section className="relative overflow-hidden" style={{ backgroundImage: "url('/assests/main%20image.jpg')" }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_-34%,rgba(0,0,0,0.2105)_0%,rgba(0,0,0,0.63069)_100%)]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 md:pt-36 pb-12 relative">
          <h1 className="text-[10vw] md:text-6xl font-extrabold leading-[1.05]">About us</h1>
          <p className="text-[#b0b0b0] md:text-[#7f7f7f] mt-3 max-w-2xl">
            From day one we focus on freshness, flavor, and quality. Our burgers are crafted with passion
            and the best ingredients so every bite is unforgettable.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Our story</h2>
            <p className="text-[#b0b0b0] md:text-[#a5a5a5] mt-3">
              We started from a small kitchen with big dreams. Today we serve hundreds of burgers every week
              while keeping our craft spirit and signature recipes alive.
            </p>
            <ul className="mt-5 space-y-2 text-[#c9c9c9]">
              <li className="flex items-start gap-3"><i className="fa-solid fa-fire text-[#cb1234] mt-1" />Fresh ingredients from local suppliers</li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-burger text-[#cb1234] mt-1" />Hand-formed patties</li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-seedling text-[#cb1234] mt-1" />Vegetarian and vegan options</li>
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-icon border border-[#292a2f]">
              <img src="/assests/main%20image.jpg" alt="kitchen" className="w-full h-64 md:h-80 object-cover" />
            </div>
            {/* Burger image (mobile below, desktop overlapping) */}
            <img src="/assests/burger.png" alt="burger" className="md:hidden w-40 mx-auto mt-4" />
            <img src="/assests/burger.png" alt="burger" className="hidden md:block w-40 absolute -right-6 -bottom-10 drop-shadow-[0_15px_40px_rgba(203,18,52,0.45)]" />
            <img src="/assests/tomato.png" alt="tomato" className="hidden md:block w-28 absolute -left-6 -bottom-6 opacity-80" />
            <img src="/assests/green%20chilli.png" alt="green chilli" className="hidden md:block w-24 absolute -right-8 -top-6 rotate-12" />
          </div>
        </div>
      </section>

      {/* Stats / features */}
      <section className="px-6 sm:px-8">
        <div className="max-w-7xl mx-auto bg-[#16171a] rounded-2xl border border-[#292a2f] p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-white">10+</p>
              <p className="text-[#9b9b9b] text-sm">Years of experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-white">50k</p>
              <p className="text-[#9b9b9b] text-sm">Happy customers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-white">100%</p>
              <p className="text-[#9b9b9b] text-sm">Fresh ingredients</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-white">24/7</p>
              <p className="text-[#9b9b9b] text-sm">Online support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto bg-[linear-gradient(90deg,rgba(0,0,0,0)_-34%,rgba(203,18,52,0.3)_0%,rgba(134,8,31,0.2)_100%)] rounded-2xl border border-[#292a2f] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-bold">Join our community</h3>
          <a href="#" className="no-underline text-white h-[46px] px-6 rounded-[50px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_-34%,rgba(203,18,52,1)_0%,rgba(134,8,31,1)_100%)] shadow-btn inline-flex items-center justify-center">
            Sign up <i className="fa-solid fa-arrow-right ml-2 text-sm" />
          </a>
        </div>
      </section>
    </div>
  );
}
