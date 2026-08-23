import { motion } from "framer-motion"
import {
  FaSearch,
  FaClipboardList,
  FaCode,
  FaVial,
  FaRocket,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa"

const process = [
  {
    number: "01",
    icon: FaSearch,
    title: "Discovery",
    description:
      "We start by understanding your idea, goals, target users and what success looks like for the project.",
  },
  {
    number: "02",
    icon: FaClipboardList,
    title: "Planning",
    description:
      "I break the project into clear features, define the technical approach and establish a practical development plan.",
  },
  {
    number: "03",
    icon: FaCode,
    title: "Development",
    description:
      "I build the product with clean, maintainable code while keeping you updated throughout the development process.",
  },
  {
    number: "04",
    icon: FaVial,
    title: "Testing & Refinement",
    description:
      "The application is tested, refined and optimized to make sure the final experience is reliable and responsive.",
  },
  {
    number: "05",
    icon: FaRocket,
    title: "Launch",
    description:
      "Once everything is ready, I help prepare the application for deployment and make sure the launch goes smoothly.",
  },
  {
    number: "06",
    icon: FaHeadset,
    title: "Support",
    description:
      "After launch, I can continue helping with improvements, new features, maintenance and technical support.",
  },
]

function Freelance() {
  return (
    <section
      id="process"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="max-w-3xl mb-16">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-cyan-400
              font-medium
            "
          >
            How I Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
            "
          >
            From idea to
            <span className="gradient-text">
              {" "}working product.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              mt-5
              text-gray-400
              text-lg
              leading-relaxed
            "
          >
            A straightforward development process designed
            to keep projects organized, transparent and moving
            forward.
          </motion.p>

        </div>

        {/* PROCESS GRID */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {process.map((step, index) => {

            const Icon = step.icon

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
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

                {/* NUMBER */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-purple-500/10
                      border
                      border-purple-500/20
                    "
                  >
                    <Icon className="text-purple-400" />
                  </div>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-gray-600
                      group-hover:text-cyan-400
                      transition-colors
                    "
                  >
                    {step.number}
                  </span>

                </div>

                {/* CONTENT */}

                <h3
                  className="
                    mt-7
                    text-xl
                    font-semibold
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-gray-400
                    leading-7
                    text-sm
                  "
                >
                  {step.description}
                </p>

              </motion.article>
            )
          })}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-16
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-r
            from-purple-500/10
            to-cyan-500/10
            p-8
            md:p-10
          "
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-6
            "
          >

            <div>

              <h3 className="text-2xl font-bold">
                Have an idea you'd like to build?
              </h3>

              <p className="mt-2 text-gray-400">
                Tell me what you're working on and let's
                figure out the best way to bring it to life.
              </p>

            </div>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                shrink-0
                rounded-full
                bg-white
                text-black
                px-6
                py-3
                font-medium
                hover:bg-cyan-300
                transition-colors
              "
            >
              Start a Project
              <FaArrowRight className="text-xs" />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Freelance