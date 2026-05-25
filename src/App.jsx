import { useEffect, useState } from "react"
import Github from "./sections/Github/Github"
import Loader from "./components/loader/Loader"
import ParticlesBackground from "./components/ui/ParticlesBackground"
import ScrollProgress from "./components/ui/ScrollProgress"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

import BackgroundGradient from "./components/ui/BackgroundGradient"

import Hero from "./sections/Hero/Hero"
import About from "./sections/About/About"
import Skills from "./sections/Skills/Skills"
import Projects from "./sections/Projects/Projects"
import Freelance from "./sections/Freelance/Freelance"
import Contact from "./sections/Contact/Contact"

function App() {const [loading, setLoading] = useState(true)

useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false)
  }, 2000)

  return () => clearTimeout(timer)

}, [])

if (loading) {
  return <Loader />
}
  
  return (
    <div className="overflow-x-hidden">

      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Github />

      <Freelance />

      <Contact />

      <Footer />

      <BackgroundGradient />

      <ParticlesBackground />

    </div>
  )
}

export default App