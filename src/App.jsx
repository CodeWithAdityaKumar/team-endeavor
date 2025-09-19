import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MenuSection from './components/MenuSection.jsx'
import PromoSection from './components/PromoSection.jsx'
import BurgerAnimation from './components/BurgerAnimation.jsx'
// import { useEffect, useRef } from 'react'
// import LocomotiveScroll from 'locomotive-scroll'

export default function App() {

  // const scrollRef = useRef();

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true
  //   });
  //   // const locomotiveScroll = new LocomotiveScroll({
  //   //     smooth : true
  //   // });
  // });

  return (
    <div id="main" className="relative bg-[#101116] min-h-screen" >
      {/* Navbar section from index3.html */}
      <Navbar />
      {/* Hero section */}
      <Hero />
  {/* Burger animation section (from index4.html) */}
  <BurgerAnimation />
      {/* Menu section */}
      <MenuSection />
      {/* Promo section */}
      <PromoSection />
    </div>
  )
}
