import { GitHubCalendar } from "react-github-calendar"
import { FaGithub, FaArrowRight } from "react-icons/fa"

import FadeIn from "../../animations/FadeIn"
import SectionTitle from "../../components/ui/SectionTitle"

function Github() {
  return (
    <section
      id="github"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">

        <FadeIn>

          <SectionTitle
            title="Engineering Activity"
            subtitle="A look at my recent development activity, open-source contributions and consistency on GitHub."
          />

          {/* CALENDAR */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              md:p-8
              overflow-x-auto
            "
          >

            <div className="min-w-[700px]">

              <GitHubCalendar
                username="Aravinth13-code"
                colorScheme="dark"
                blockSize={13}
                blockMargin={4}
                fontSize={14}
              />

            </div>

          </div>

          {/* SUPPORTING CONTENT */}

          <div
            className="
              mt-6
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-6
              rounded-3xl
              border
              border-white/10
              bg-gradient-to-r
              from-purple-500/5
              to-cyan-500/5
              p-6
              md:p-7
            "
          >

            <div>

              <h3 className="text-lg font-semibold">
                See what I'm building
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Explore my repositories, experiments and
                development work on GitHub.
              </p>

            </div>

            <a
              href="https://github.com/Aravinth13-code"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                shrink-0
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                text-sm
                font-medium
                hover:border-cyan-400/50
                hover:text-cyan-400
                transition
              "
            >
              <FaGithub />

              View GitHub

              <FaArrowRight className="text-xs" />
            </a>

          </div>

        </FadeIn>

      </div>
    </section>
  )
}

export default Github