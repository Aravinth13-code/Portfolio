import { GitHubCalendar } from "react-github-calendar"

import FadeIn from "../../animations/FadeIn"
import SectionTitle from "../../components/ui/SectionTitle"

function Github() {
  return (
    <section className="section-padding">

      <div className="max-w-7xl mx-auto">

        <FadeIn>

          <SectionTitle
            title="GitHub Contributions"
            subtitle="
              My coding consistency and contribution activity.
            "
          />

          <div
            className="
              bg-zinc-900
              p-8
              rounded-3xl
              overflow-x-auto
            "
          >

            <GitHubCalendar username="yourusername" />

          </div>

        </FadeIn>

      </div>

    </section>
  )
}

export default Github