import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import BlogPost from "./pages/BlogPost"

import Github from "./sections/Github/Github"
import Loader from "./components/loader/Loader"
import ScrollProgress from "./components/ui/ScrollProgress"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

import Hero from "./sections/Hero/Hero"
import Services from "./sections/Services/Services"
import About from "./sections/About/About"
import Skills from "./sections/Skills/Skills"
import Projects from "./sections/Projects/Projects"
import Freelance from "./sections/Freelance/Freelance"
import Blog from "./sections/Blog/Blog"
import Contact from "./sections/Contact/Contact"

function App() {
  const [loading, setLoading] = useState(true)

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
    <BrowserRouter>
      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={
            <div className="relative min-h-screen overflow-x-hidden">

              <ScrollProgress />

              <div className="relative z-10">

                <Navbar />

                <Hero />

                <Services />

                <Projects />

                <Freelance />

                <About />

                <Skills />

                <Github />

                <Blog />

                <Contact />

                <Footer />

              </div>

            </div>
          }
        />

        {/* BLOG ARTICLE */}

        <Route
          path="/blog/:slug"
          element={<BlogPost />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App