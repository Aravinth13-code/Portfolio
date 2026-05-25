const projects = [
  {
    title: "E-Commerce Platform",
    tech: "React + Spring Boot + MySQL",
  },
  {
    title: "Task Management App",
    tech: "React + MongoDB + Spring Boot",
  },
]

function Projects() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-2 text-gray-400">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects