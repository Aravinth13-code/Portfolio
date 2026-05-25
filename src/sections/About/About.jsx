import FadeIn from "../../animations/FadeIn"
import SectionTitle from "../../components/ui/SectionTitle"

function About() {
  return (
    <section
      id="about"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">

        <FadeIn>

          <SectionTitle
            title="About Me"
            subtitle="
              Passionate fullstack developer focused on
              scalable backend systems and modern web applications.
            "
          />

          <p className="text-gray-400 leading-8 max-w-4xl">
            I specialize in Java, Spring Boot, React,
            MySQL and MongoDB. I enjoy building
            performant, responsive and scalable
            applications with clean architecture
            and modern UI/UX principles.
          </p>

        </FadeIn>

      </div>
    </section>
  )
}

export default About