import Tilt from "react-parallax-tilt"
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function ProjectCard({ project }) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1200}
      transitionSpeed={1000}
      scale={1.01}
      className="h-full"
    >
      <article
        className="
          group
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-white/[0.03]
          transition-all
          duration-300
          hover:border-purple-500/40
          hover:bg-white/[0.05]
        "
      >
        {/* PROJECT VISUAL */}

        <div
          className="
            relative
            h-56
            overflow-hidden
            border-b
            border-white/10
            bg-gradient-to-br
            from-purple-500/10
            via-transparent
            to-cyan-500/10
          "
        >
          {/* Placeholder until real project screenshot is added */}

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-gray-600
              text-sm
            "
          >
            Project Preview
          </div>

          {/* Decorative glow */}

          <div
            className="
              absolute
              -top-20
              -right-20
              w-40
              h-40
              rounded-full
              bg-purple-500/20
              blur-3xl
              transition-transform
              duration-500
              group-hover:scale-150
            "
          />
        </div>

        {/* CONTENT */}

        <div className="p-7">

          {/* CATEGORY */}

          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-cyan-400
              font-medium
            "
          >
            {project.category}
          </p>

          {/* TITLE */}

          <h3
            className="
              mt-3
              text-2xl
              font-bold
              text-white
            "
          >
            {project.title}
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              mt-4
              text-gray-400
              leading-7
            "
          >
            {project.description}
          </p>

          {/* TECHNOLOGIES */}

          <div className="flex flex-wrap gap-2 mt-6">

            {project.tech.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border border-white/10
                  bg-white/5
                  px-3
                  py-1.5
                  text-xs
                  text-gray-300
                "
              >
                {item}
              </span>
            ))}

          </div>

          {/* LINKS */}

          <div
            className="
              flex
              items-center
              justify-between
              mt-8
              pt-6
              border-t
              border-white/10
            "
          >
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-white
                hover:text-cyan-400
                transition-colors
              "
            >
              View Project
              <FaArrowRight className="text-xs" />
            </a>

            <div className="flex items-center gap-4">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="
                  text-gray-500
                  hover:text-white
                  transition-colors
                "
              >
                <FaGithub />
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="
                  text-gray-500
                  hover:text-white
                  transition-colors
                "
              >
                <FaExternalLinkAlt className="text-sm" />
              </a>

            </div>
          </div>

        </div>
      </article>
    </Tilt>
  )
}

export default ProjectCard