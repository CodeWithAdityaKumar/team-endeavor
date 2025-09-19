import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MenuSection from './components/MenuSection.jsx'
import PromoSection from './components/PromoSection.jsx'
// import BurgerAnimation from './components/BurgerAnimation.jsx'
import Footer from './components/Footer.jsx'
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
      
      <Hero />
  {/* <BurgerAnimation /> */}
      <MenuSection />
      <PromoSection />

    </div>
  )
}
