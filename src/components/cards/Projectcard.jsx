import { motion } from "framer-motion"
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa"

function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-[#15181D]
        transition-all
        duration-300
        hover:border-[#4B78A8]/40
      "
    >

      {/* TOP VISUAL AREA */}

      <div
        className="
          relative
          h-52
          overflow-hidden
          bg-[#0E1014]
          border-b
          border-white/[0.08]
        "
      >

        {/* ABSTRACT PROJECT PREVIEW */}

        <div
          className="
            absolute
            inset-0
            opacity-40
          "
          style={{
            background: `
              linear-gradient(
                135deg,
                rgba(75,120,168,0.18),
                transparent 55%
              )
            `,
          }}
        />

        <div
          className="
            absolute
            -right-20
            -top-20
            w-64
            h-64
            rounded-full
            border
            border-[#7FA6C9]/10
          "
        />

        <div
          className="
            absolute
            -right-10
            -top-10
            w-44
            h-44
            rounded-full
            border
            border-[#7FA6C9]/10
          "
        />

        {/* PROJECT CATEGORY */}

        <div
          className="
            absolute
            top-6
            left-6
            px-3
            py-1.5
            rounded-md
            border
            border-white/10
            bg-black/20
            backdrop-blur-sm
            text-xs
            text-[#9A9DA3]
          "
        >
          {project.category}
        </div>

        {/* PROJECT NUMBER */}

        <span
          className="
            absolute
            bottom-5
            right-6
            text-5xl
            font-bold
            text-white/[0.04]
            select-none
          "
        >
          {String(project.title.length).padStart(2, "0")}
        </span>

      </div>

      {/* CONTENT */}

      <div className="p-7">

        {/* TITLE */}

        <h3
          className="
            text-2xl
            font-semibold
            text-[#E8E6E1]
            group-hover:text-white
            transition-colors
          "
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-4
            text-sm
            leading-7
            text-[#9A9DA3]
          "
        >
          {project.description}
        </p>

        {/* TECHNOLOGY */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.tech.map((technology) => (
            <span
              key={technology}
              className="
                px-3
                py-1.5
                rounded-md
                bg-white/[0.025]
                border
                border-white/[0.08]
                text-xs
                text-[#B7BCC4]
              "
            >
              {technology}
            </span>
          ))}

        </div>

        {/* FEATURES */}

        <div className="mt-7">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-[#7FA6C9]
              mb-3
            "
          >
            Key capabilities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

            {project.features.slice(0, 4).map((feature) => (
              <div
                key={feature}
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-[#B7BCC4]
                "
              >
                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-[#7FA6C9]
                  "
                />

                {feature}
              </div>
            ))}

          </div>

        </div>

        {/* FOOTER */}

        <div
          className="
            mt-7
            pt-5
            border-t
            border-white/[0.08]
            flex
            items-center
            justify-between
          "
        >

          {/* ROLE */}

          <span
            className="
              text-xs
              text-[#777C84]
            "
          >
            {project.role}
          </span>

          {/* LINKS */}

          <div className="flex items-center gap-4">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                text-sm
                text-[#9A9DA3]
                hover:text-white
                transition
              "
            >
              <FaGithub />
              Code
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                text-sm
                text-[#9A9DA3]
                hover:text-[#7FA6C9]
                transition
              "
            >
              <FaExternalLinkAlt className="text-xs" />
              Demo
            </a>

          </div>

        </div>

      </div>

    </motion.article>
  )
}

export default ProjectCard