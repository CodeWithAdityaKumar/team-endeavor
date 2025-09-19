/*
  Footer component: responsive across devices, themed to match site colors.
  - Mobile: stacked sections with spacing
  - Desktop (md+): 4-column grid preserving original look/colors
*/

export default function Footer() {
  return (
    <footer className="w-full bg-[#101116] border-t border-[#292a2f] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 md:py-14">
        {/* Grid layout on desktop; stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/assests/logo.png" alt="logo" className="h-10 w-auto" />
              <span className="text-lg font-semibold">Spiozek</span>
            </div>
            <p className="text-[#b0b0b0] mt-3 text-sm max-w-xs">
              Delicious burgers and fresh ingredients. Join us and discover flavors you'll love.
            </p>
          </div>

          {/* Links */}
          <nav>
            <h3 className="text-white font-semibold mb-3">Menu</h3>
            <ul className="space-y-2 text-[#b0b0b0]">
              <li><a className="hover:text-[#cb1234] transition" href="/">Home</a></li>
              <li><a className="hover:text-[#cb1234] transition" href="/menu">Burgers</a></li>
              <li><a className="hover:text-[#cb1234] transition" href="/about">About</a></li>
              <li><a className="hover:text-[#cb1234] transition" href="#">Contact</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-[#b0b0b0]">
              <li className="flex items-center gap-2"><i className="fa-solid fa-phone text-[#cb1234]"></i><span>+91 123 456 789</span></li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-clock text-[#cb1234]"></i><span>12:00 – 23:00</span></li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-location-dot text-[#cb1234]"></i><span>Longowal, Punjab</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-3">Subscribe</h3>
            <p className="text-[#b0b0b0] text-sm mb-3">News and promotions straight to your inbox.</p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full h-[42px] rounded-[50px] bg-[#16171a] border border-[#292a2f] px-4 text-sm placeholder:text-[#6e6e6e] focus:outline-none focus:ring-2 focus:ring-[#cb1234]"
              />
              <button
                type="submit"
                className="h-[42px] px-5 rounded-[50px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_-34%,rgba(203,18,52,1)_0%,rgba(134,8,31,1)_100%)] shadow-btn text-white text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#292a2f] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[#8b8b8b] text-sm">
          <p>© {new Date().getFullYear()} Spiozek. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a aria-label="Twitter" className="hover:text-[#cb1234]" href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a aria-label="Instagram" className="hover:text-[#cb1234]" href="#"><i className="fa-brands fa-instagram"></i></a>
            <a aria-label="Facebook" className="hover:text-[#cb1234]" href="#"><i className="fa-brands fa-facebook"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
