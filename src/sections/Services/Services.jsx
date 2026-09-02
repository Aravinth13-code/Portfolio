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
            text-[var(--muted)]
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
            gap-5
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
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-8
                  transition-all
                  duration-300
                  hover:border-[#4B78A8]/50
                  hover:bg-[var(--surface-light)]
                  hover:-translate-y-1
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
                      rounded-lg
                      bg-[#4B78A8]/[0.08]
                      border
                      border-[#4B78A8]/20
                      transition-colors
                      duration-300
                      group-hover:bg-[#4B78A8]/[0.14]
                    "
                  >
                    <Icon
                      className="
                        text-[#7FA6C9]
                        text-xl
                      "
                    />
                  </div>

                  <span
                    className="
                      text-sm
                      font-mono
                      text-gray-600
                      group-hover:text-[#7FA6C9]
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
                    text-[var(--text)]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[var(--muted)]
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
                          bg-[#7FA6C9]
                          shrink-0
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
                    group-hover:text-[#E8E6E1]
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

          <p className="text-[var(--muted)]">
            Have something different in mind?
          </p>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-2
              mt-3
              text-[var(--text)]
              font-medium
              hover:text-[#7FA6C9]
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