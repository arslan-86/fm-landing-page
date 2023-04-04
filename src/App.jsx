import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testomonials from "./components/Testomonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Navbar state={menuOpen} setSate={setMenuOpen}/>
      <Hero />
      <Features />
      <Testomonials />
      <CTA />
      <Footer />
    </div>
    
  )
}

export default App
