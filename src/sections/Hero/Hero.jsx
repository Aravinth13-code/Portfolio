import Button from "../../components/ui/Button"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

import {
  FaReact,
  FaJava,
} from "react-icons/fa"

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">

      {/* FLOATING ICONS */}

      <div className="absolute inset-0 overflow-hidden">

        <FaReact
          className="
            absolute
            top-20
            left-20
            text-cyan-400
            text-6xl
            animate-bounce
          "
        />

        <FaJava
          className="
            absolute
            bottom-20
            right-20
            text-orange-400
            text-6xl
            animate-pulse
          "
        />

      </div>

      {/* HERO CONTENT */}

      <div className="text-center z-10">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Fullstack
          <span className="gradient-text">
            {" "}Developer
          </span>
        </motion.h1>

        <div className="mt-6 text-lg md:text-2xl text-gray-300">

          <TypeAnimation
            sequence={[
              "Java Developer",
              2000,
              "Spring Boot Developer",
              2000,
              "React Developer",
              2000,
              "Fullstack Engineer",
              2000,
            ]}
            repeat={Infinity}
          />

        </div>

        <p className="max-w-2xl mt-6 text-gray-400 mx-auto">
          Building scalable backend systems and
          modern interactive web applications.
        </p>

        <div className="mt-10 flex justify-center gap-6">

  <Button primary>
  Hire Me
  </Button>

  <Button>
  Projects
  </Button>
 </div>

      </div>

    </section>
  )
}

export default Hero