import FadeIn from "../../animations/FadeIn"
import SectionTitle from "../../components/ui/SectionTitle"

import { skills } from "../../data/skills"

function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">

        <FadeIn>

          <SectionTitle
            title="Skills"
            subtitle="
              Technologies and tools I use to build
              scalable fullstack applications.
            "
          />

          <div className="flex flex-wrap gap-6">

            {skills.map((skill) => (
              <div
                key={skill}
                className="
                  bg-zinc-900
                  px-6
                  py-4
                  rounded-2xl
                  border
                  border-zinc-800
                  hover:border-cyan-400
                  hover:shadow-[0_0_25px_rgba(0,245,255,0.3)]
                  transition
                  duration-300
                  cursor-pointer
                "
              >
                {skill}
              </div>
            ))}

          </div>

        </FadeIn>

      </div>
    </section>
  )
}

export default Skills