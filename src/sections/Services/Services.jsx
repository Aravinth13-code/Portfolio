import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

import { services } from "../../data/services"
import SectionTitle from "../../components/ui/SectionTitle"

function Services() {
  return (
    <section
      id="services"
      className="section-padding relative"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}

        <SectionTitle
          title="Services"
          subtitle="What I can build for you"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            max-w-2xl
            mx-auto
            mt-6
            text-center
            text-gray-400
            leading-relaxed
          "
        >
          From business websites to full-stack applications,
          I build reliable digital products with a focus on
          performance, usability and long-term maintainability.
        </motion.p>

        {/* SERVICES GRID */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            mt-16
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  p-8
                  transition-all
                  duration-300
                  hover:border-purple-500/40
                  hover:bg-white/[0.05]
                "
              >
                {/* TOP ROW */}

                <div className="flex items-start justify-between">

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      rounded-xl
                      bg-purple-500/10
                      border border-purple-500/20
                    "
                  >
                    <Icon className="text-purple-400 text-xl" />
                  </div>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-gray-600
                      group-hover:text-purple-400
                      transition-colors
                    "
                  >
                    {service.number}
                  </span>

                </div>

                {/* CONTENT */}

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-400
                    leading-relaxed
                  "
                >
                  {service.description}
                </p>

                {/* FEATURES */}

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-gray-300
                      "
                    >
                      <span
                        className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-cyan-400
                        "
                      />

                      {feature}
                    </li>
                  ))}
                </ul>

                {/* HOVER ARROW */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-500
                    group-hover:text-white
                    transition-colors
                  "
                >
                  Discuss a project

                  <FaArrowRight
                    className="
                      text-xs
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </div>

              </motion.article>
            )
          })}
        </div>

        {/* BOTTOM CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-14
            text-center
          "
        >
          <p className="text-gray-400">
            Have something different in mind?
          </p>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-2
              mt-3
              text-white
              font-medium
              hover:text-cyan-400
              transition-colors
            "
          >
            Let's discuss your project
            <FaArrowRight className="text-xs" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Services