import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa"
import { Link } from "react-scroll"

const navigation = [
  { name: "Home", target: "hero" },
  { name: "Services", target: "services" },
  { name: "Projects", target: "projects" },
  { name: "About", target: "about" },
  { name: "Tech Stack", target: "skills" },
  { name: "Contact", target: "contact" },
]

const services = [
  "Full-Stack Development",
  "Backend & API Development",
  "React Applications",
  "Business Web Applications",
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10">

      {/* MAIN FOOTER */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}

          <div className="lg:col-span-1">

            <Link
              to="hero"
              smooth={true}
              duration={700}
              className="cursor-pointer"
            >

              <h2 className="text-2xl font-bold gradient-text">
                Aravinth.
              </h2>

            </Link>

            <p className="mt-5 text-gray-400 leading-7 text-sm">
              Full-stack developer building modern,
              reliable and user-focused web applications
              with Java, Spring Boot and React.
            </p>

            {/* AVAILABILITY */}

            <div className="mt-6 flex items-center gap-2">

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-green-400
                  animate-pulse
                "
              />

              <span className="text-sm text-gray-400">
                Available for freelance projects
              </span>

            </div>

          </div>

          {/* NAVIGATION */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4">

              {navigation.map((item) => (

                <li key={item.target}>

                  <Link
                    to={item.target}
                    smooth={true}
                    duration={700}
                    offset={-80}
                    className="
                      cursor-pointer
                      text-sm
                      text-gray-500
                      hover:text-white
                      transition
                    "
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Services
            </h3>

            <ul className="mt-6 space-y-4">

              {services.map((service) => (

                <li
                  key={service}
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  {service}
                </li>

              ))}

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Let's Talk
            </h3>

            <p className="mt-6 text-sm text-gray-500 leading-6">
              Have a project in mind? Let's discuss
              how I can help turn your idea into reality.
            </p>

            <a
              href="mailto:aravinthgv13@gmail.com"
              className="
                inline-flex
                items-center
                gap-2
                mt-5
                text-sm
                text-cyan-400
                hover:text-cyan-300
                transition
              "
            >
              <FaEnvelope />
              aravinthgv13@gmail.com
            </a>

            {/* SOCIALS */}

            <div className="flex gap-3 mt-6">

              <a
                href="https://github.com/Aravinth13-code"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:text-white
                  hover:border-purple-500/40
                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aravinthgv/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:text-white
                  hover:border-blue-500/40
                  transition
                "
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}

        <div className="mt-16 pt-6 border-t border-white/10">

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-4
            "
          >

            <p className="text-sm text-gray-600">
              © {currentYear} Aravinth. All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <p className="text-sm text-gray-600">
                Built with React & Tailwind CSS
              </p>

              <Link
                to="hero"
                smooth={true}
                duration={700}
                aria-label="Back to top"
                className="
                  cursor-pointer
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:text-white
                  hover:border-cyan-400/40
                  transition
                "
              >
                <FaArrowUp className="text-sm" />
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer