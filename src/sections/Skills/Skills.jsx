import { motion } from "framer-motion"

import FadeIn from "../../animations/FadeIn"
import SectionTitle from "../../components/ui/SectionTitle"

import { skillGroups } from "../../data/skills"

function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">

        <FadeIn>

          <SectionTitle
            title="Tech Stack"
            subtitle="The technologies I use to design, build and deploy modern full-stack applications."
          />

          <div className="grid md:grid-cols-2 gap-6">

            {skillGroups.map((group, index) => (

              <motion.div
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  transition-all
                  duration-300
                  hover:border-purple-500/40
                  hover:bg-white/[0.05]
                "
              >

                {/* HEADER */}

                <div className="flex items-start justify-between">

                  <div>

                    <h3 className="text-xl font-semibold">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {group.description}
                    </p>

                  </div>

                  <span
                    className="
                      text-sm
                      text-gray-600
                      group-hover:text-cyan-400
                      transition-colors
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* SKILLS */}

                <div className="flex flex-wrap gap-3 mt-7">

                  {group.skills.map((skill) => (

                    <span
                      key={skill}
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-2
                        text-sm
                        text-gray-300
                        transition-all
                        duration-300
                        hover:border-cyan-400/40
                        hover:text-white
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

          {/* CAPABILITIES */}

          <div
            className="
              mt-10
              rounded-3xl
              border
              border-white/10
              bg-gradient-to-r
              from-purple-500/5
              to-cyan-500/5
              p-7
              md:p-8
            "
          >

            <p className="text-sm uppercase tracking-widest text-gray-500">
              Also comfortable with
            </p>

            <p className="mt-4 text-gray-300 leading-7">
              Authentication · REST APIs · Database Design ·
              Responsive UI · Git Workflows · Deployment
            </p>

          </div>

        </FadeIn>

      </div>
    </section>
  )
}

export default Skills