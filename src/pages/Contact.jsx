export default function Contact() {
  return (
    <div className="min-h-screen bg-[#101116] text-white">
      {/* Hero strip */}
      <section className="relative overflow-hidden" style={{ backgroundImage: "url('/assests/main%20image.jpg')" }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_-34%,rgba(0,0,0,0.2105)_0%,rgba(0,0,0,0.63069)_100%)]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 md:pt-36 pb-10 relative">
          <h1 className="text-[10vw] md:text-6xl font-extrabold leading-[1.05]">Contact us</h1>
          <p className="text-[#b0b0b0] md:text-[#7f7f7f] mt-3 max-w-2xl">
            Have a question or special request? Drop us a line and we’ll get back to you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Form */}
          <form className="bg-[#16171a] border border-[#292a2f] rounded-2xl p-6 md:p-8 space-y-4 shadow-icon">
            <div>
              <label className="block text-sm text-[#c7c7c7] mb-1">Name</label>
              <input className="w-full h-[46px] rounded-[10px] bg-[#101116] border border-[#292a2f] px-4 text-sm text-white placeholder:text-[#6e6e6e] focus:outline-none focus:ring-2 focus:ring-[#cb1234]" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-[#c7c7c7] mb-1">Email</label>
              <input type="email" className="w-full h-[46px] rounded-[10px] bg-[#101116] border border-[#292a2f] px-4 text-sm text-white placeholder:text-[#6e6e6e] focus:outline-none focus:ring-2 focus:ring-[#cb1234]" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-[#c7c7c7] mb-1">Message</label>
              <textarea rows={5} className="w-full rounded-[10px] bg-[#101116] border border-[#292a2f] px-4 py-3 text-sm text-white placeholder:text-[#6e6e6e] focus:outline-none focus:ring-2 focus:ring-[#cb1234]" placeholder="Tell us how we can help" />
            </div>
            <button type="button" className="h-[46px] px-6 rounded-[50px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_-34%,rgba(203,18,52,1)_0%,rgba(134,8,31,1)_100%)] shadow-btn text-white text-sm inline-flex items-center justify-center">
              Send message <i className="fa-solid fa-paper-plane ml-2 text-xs" />
            </button>
          </form>

          {/* Info */}
          <div>
            <div className="bg-[#16171a] border border-[#292a2f] rounded-2xl p-6 md:p-8 shadow-icon">
              <h3 className="text-xl font-bold">Get in touch</h3>
              <p className="text-[#b0b0b0] mt-2 text-sm">We’d love to hear from you. Reach us using any method below.</p>
              <ul className="mt-5 space-y-3 text-[#c9c9c9] text-sm">
                <li className="flex items-center gap-3"><i className="fa-solid fa-location-dot text-[#cb1234]" />1 Taste St, Warsaw</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-clock text-[#cb1234]" />12:00 – 23:00</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-phone text-[#cb1234]" />+48 123 456 789</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-envelope text-[#cb1234]" />hello@spiozek.com</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#16171a] border border-[#292a2f] rounded-2xl p-4 text-center">
                <p className="text-2xl font-extrabold">10+</p>
                <p className="text-[#9b9b9b] text-xs">Years of service</p>
              </div>
              <div className="bg-[#16171a] border border-[#292a2f] rounded-2xl p-4 text-center">
                <p className="text-2xl font-extrabold">50k</p>
                <p className="text-[#9b9b9b] text-xs">Happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
