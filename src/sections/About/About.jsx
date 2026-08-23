import { motion } from "framer-motion"
import {
  FaCode,
  FaServer,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa"

import FadeIn from "../../animations/FadeIn"
import SectionTitle from "../../components/ui/SectionTitle"

const strengths = [
  {
    icon: FaCode,
    title: "Product Development",
    description:
      "I enjoy turning ideas and requirements into responsive, user-focused web applications.",
  },
  {
    icon: FaServer,
    title: "Backend Engineering",
    description:
      "I build structured backend systems and REST APIs with Java and Spring Boot.",
  },
  {
    icon: FaLightbulb,
    title: "Problem Solving",
    description:
      "I focus on understanding the actual problem before choosing the technical solution.",
  },
  {
    icon: FaRocket,
    title: "Continuous Growth",
    description:
      "I keep learning through projects, experiments and writing about what I build.",
  },
]

function About() {
  return (
    <section
      id="about"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">

        <FadeIn>

          <SectionTitle
            title="About Me"
            subtitle="A full-stack developer focused on building useful products, solving real problems and continuously improving my craft."
          />

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">

            {/* MAIN STORY */}

            <div>

              <p
                className="
                  text-gray-300
                  text-lg
                  leading-8
                "
              >
                I'm a full-stack developer who enjoys working across
                the entire development process — from understanding
                an idea and designing the solution to building the
                frontend, backend and database layers.
              </p>

              <p
                className="
                  mt-6
                  text-gray-400
                  leading-8
                "
              >
                My main stack is Java, Spring Boot and React,
                supported by technologies such as MySQL, MongoDB,
                Tailwind CSS, Git and Docker. I particularly enjoy
                building applications where a clean backend
                architecture and a thoughtful user experience
                need to work together.
              </p>

              <p
                className="
                  mt-6
                  text-gray-400
                  leading-8
                "
              >
                I'm also building my experience as a freelance
                developer, with a focus on creating reliable,
                maintainable solutions for clients and continuously
                learning through real-world projects.
              </p>

            </div>

            {/* QUICK PROFILE */}

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-7
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-cyan-400
                "
              >
                What I Focus On
              </p>

              <div className="mt-7 space-y-6">

                {[
                  "Full-stack web applications",
                  "REST API development",
                  "Backend architecture",
                  "Responsive interfaces",
                  "Database-driven applications",
                  "Continuous learning",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <span
                      className="
                        w-8
                        h-8
                        shrink-0
                        rounded-lg
                        bg-purple-500/10
                        border
                        border-purple-500/20
                        flex
                        items-center
                        justify-center
                        text-xs
                        text-purple-400
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-gray-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* STRENGTHS */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

            {strengths.map((item, index) => {

              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    hover:border-cyan-400/30
                    hover:bg-white/[0.05]
                    transition
                  "
                >

                  <Icon className="text-xl text-cyan-400" />

                  <h3 className="mt-5 font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-400 leading-6">
                    {item.description}
                  </p>

                </motion.div>
              )
            })}

          </div>

        </FadeIn>

      </div>
    </section>
  )
}

export default About