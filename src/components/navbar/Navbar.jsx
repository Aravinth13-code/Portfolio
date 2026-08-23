import { useState } from "react"
import { Link } from "react-scroll"
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa"

const navLinks = [
  { label: "Work", target: "projects" },
  { label: "Services", target: "services" },
  { label: "Process", target: "process" },
  { label: "About", target: "about" },
  { label: "Blog", target: "blog" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-5">
        <div
          className="
            flex items-center justify-between
            px-5 py-3
            rounded-2xl
            border border-white/10
            bg-[#050816]/70
            backdrop-blur-xl
          "
        >
          {/* BRAND */}

          <Link
            to="hero"
            smooth
            duration={600}
            className="cursor-pointer"
          >
            <span className="text-xl font-bold tracking-tight">
              ARAVINTH<span className="gradient-text">.</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.target}>
                <Link
                  to={item.target}
                  smooth
                  duration={600}
                  offset={-80}
                  className="
                    cursor-pointer
                    text-sm
                    text-gray-300
                    hover:text-white
                    transition-colors
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}

          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="
              hidden md:flex
              items-center gap-2
              cursor-pointer
              rounded-full
              px-5 py-2.5
              text-sm font-medium
              bg-white text-black
              hover:bg-cyan-300
              transition-all
            "
          >
            Let's Work Together
            <FaArrowRight className="text-xs" />
          </Link>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden text-xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}

        {menuOpen && (
          <div
            className="
              md:hidden
              mt-2
              rounded-2xl
              border border-white/10
              bg-[#050816]/95
              backdrop-blur-xl
              p-6
            "
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <li key={item.target}>
                  <Link
                    to={item.target}
                    smooth
                    duration={600}
                    offset={-80}
                    onClick={closeMenu}
                    className="
                      block
                      cursor-pointer
                      text-gray-300
                      hover:text-white
                      transition-colors
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={closeMenu}
                  className="
                    flex items-center justify-center gap-2
                    cursor-pointer
                    rounded-full
                    px-5 py-3
                    bg-white text-black
                    font-medium
                  "
                >
                  Let's Work Together
                  <FaArrowRight className="text-xs" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar