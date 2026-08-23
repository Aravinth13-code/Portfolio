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
            title="Selected Work"
            subtitle="A few things I've built while exploring full-stack development, product engineering and real-world application design."
          />

          <div className="grid md:grid-cols-2 gap-8">

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