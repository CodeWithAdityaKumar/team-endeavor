import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

export default function App() {
  return (
    <div id="main" className="relative bg-[#101116] min-h-screen">
      {/* Navbar section from index3.html */}
      <Navbar />
      {/* Hero section */}
      <Hero />
    </div>
  )
}
