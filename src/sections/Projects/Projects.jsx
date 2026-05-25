import FadeIn from "../../animations/FadeIn"
import SectionTitle from "../../components/ui/SectionTitle"

import { projects } from "../../data/projects"
import ProjectCard from "../../components/cards/ProjectCard"

function Projects() {
  return (
    <section
      id="projects"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">

        <FadeIn>

          <SectionTitle
            title="Projects"
            subtitle="
              Some of the fullstack applications and
              systems I have developed using modern technologies.
            "
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

        </FadeIn>

      </div>
    </section>
  )
}

export default Projects