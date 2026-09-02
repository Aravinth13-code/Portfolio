import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"
import { Link } from "react-scroll"

import Button from "../../components/ui/Button"

function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        px-6
        pt-32
        pb-20
      "
    >

      {/* SUBTLE BACKGROUND GLOW */}

<div
  className="
    absolute
    top-[20%]
    left-1/2
    -translate-x-1/2
    w-[600px]
    h-[600px]
    rounded-full
    bg-[var(--primary)]/[0.06]
    blur-[140px]
    pointer-events-none
  "
/>

<div
  className="
    absolute
    bottom-[-150px]
    right-[-100px]
    w-[400px]
    h-[400px]
    rounded-full
    bg-[var(--secondary)]/[0.035]
    blur-[130px]
    pointer-events-none
  "
/>

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* AVAILABILITY */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
             border-[#7FA6C9]/20
bg-[#7FA6C9]/[0.05]
              px-4
              py-2
              text-sm
              text-gray-300
            "
          >

            <span
              className="
                w-2
                h-2
                rounded-full
                bg-[#7FA6C9]
                animate-pulse
              "
            />

            Available for freelance projects & opportunities

          </div>

        </motion.div>

        {/* HEADLINE */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-center
            text-5xl
            sm:text-6xl
            lg:text-8xl
            font-bold
            tracking-tight
            leading-[1.05]
          "
        >

          I build digital

          <br />

          <span className="gradient-text">
            products that matter.
          </span>

        </motion.h1>

        {/* SPECIALIZATION */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="
            mt-8
            text-center
            text-lg
            sm:text-xl
            text-[var(--muted)]
          "
        >

          Full-Stack Developer specializing in{" "}

          <span className="text-[#E8E6E1] font-medium">

            <TypeAnimation
              sequence={[
                "Java & Spring Boot",
                2200,
                "React applications",
                2200,
                "REST APIs",
                2200,
                "full-stack platforms",
                2200,
              ]}
              repeat={Infinity}
            />

          </span>

        </motion.div>

        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 0.7,
          }}
          className="
  max-w-2xl
  mx-auto
  mt-6
  text-center
  text-[var(--muted)]
  text-base
  sm:text-lg
  leading-relaxed
"
        >
          I help startups, businesses and teams turn ideas
          into reliable, responsive and maintainable web
          applications.
        </motion.p>

        {/* ACTIONS */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-4
          "
        >

          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
          >
            <Button primary>

              Start a Project

              <FaArrowRight className="ml-2 inline text-xs" />

            </Button>
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={700}
            offset={-80}
          >
            <Button>
              View My Work
            </Button>
          </Link>

        </motion.div>

        {/* SOCIAL LINKS */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.1,
            duration: 0.6,
          }}
          className="
            mt-12
            flex
            justify-center
            items-center
            gap-5
            text-gray-500
          "
        >

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
              hover:text-white
              hover:-translate-y-1
              transition
            "
          >
            <FaGithub size={20} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="
              hover:text-white
              hover:-translate-y-1
              transition
            "
          >
            <FaLinkedinIn size={20} />
          </a>

        </motion.div>

        {/* SCROLL INDICATOR */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 0.8,
          }}
          className="
            mt-14
            flex
            justify-center
          "
        >

          <Link
            to="services"
            smooth={true}
            duration={700}
            className="
              cursor-pointer
              text-xs
              uppercase
              tracking-[0.25em]
              text-gray-600
              hover:text-gray-400
              transition
            "
          >
            Explore
          </Link>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero