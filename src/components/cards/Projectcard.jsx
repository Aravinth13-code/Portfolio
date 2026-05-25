import Tilt from "react-parallax-tilt"

function ProjectCard({ project }) {
  return (

    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.02}
    >

      <div
        className="
          bg-zinc-900
          rounded-3xl
          p-6
          border
          border-zinc-800
          hover:border-purple-500
          hover:shadow-[0_0_30px_rgba(145,94,255,0.4)]
          transition
          duration-300
          h-full
        "
      >

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-4 leading-7">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">

          {project.tech.map((item) => (
            <span
              key={item}
              className="
                bg-zinc-800
                px-4
                py-2
                rounded-lg
                text-sm
              "
            >
              {item}
            </span>
          ))}

        </div>

        <div className="mt-8 flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              bg-purple-600
              hover:bg-purple-700
              px-5
              py-2
              rounded-lg
              transition
            "
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              border
              border-cyan-400
              hover:bg-cyan-400/10
              px-5
              py-2
              rounded-lg
              transition
            "
          >
            Live Demo
          </a>

        </div>

      </div>

    </Tilt>
  )
}

export default ProjectCard