import { useState } from "react"
import { Link } from "react-scroll"
import {
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa"

const navLinks = [
  {
    label: "Projects",
    target: "projects",
  },
  {
    label: "Services",
    target: "services",
  },
  {
    label: "Process",
    target: "process",
  },
  {
    label: "About",
    target: "about",
  },
  {
    label: "Tech Stack",
    target: "skills",
  },
  {
    label: "Blog",
    target: "blog",
  },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-5">

        {/* NAVBAR */}

        <div
          className="
            flex
            items-center
            justify-between
            px-5
            py-3
            rounded-xl
            border
            border-white/[0.08]
            bg-[#0E1014]/90
            backdrop-blur-md
            shadow-[0_8px_30px_rgba(0,0,0,0.18)]
          "
        >

          {/* BRAND */}

          <Link
            to="hero"
            smooth
            duration={600}
            className="
              cursor-pointer
              shrink-0
              group
            "
          >
            <span
              className="
                text-lg
                font-semibold
                tracking-[-0.02em]
                text-[#E8E6E1]
              "
            >
              ARAVINTH
              <span
                className="
                  text-[#7FA6C9]
                  transition-colors
                  group-hover:text-[#AFC7DF]
                "
              >
                .
              </span>
            </span>
          </Link>

          {/* DESKTOP NAV */}

          <ul
            className="
              hidden
              lg:flex
              items-center
              gap-1
            "
          >
            {navLinks.map((item) => (
              <li key={item.target}>

                <Link
                  to={item.target}
                  smooth
                  duration={600}
                  offset={-80}
                  spy
                  activeClass="!text-[#E8E6E1] !bg-white/[0.06]"
                  className="
                    relative
                    block
                    cursor-pointer
                    rounded-lg
                    px-3
                    py-2
                    text-[13px]
                    font-medium
                    text-[#9A9DA3]
                    hover:text-[#E8E6E1]
                    hover:bg-white/[0.035]
                    transition-all
                    duration-200
                  "
                >
                  {item.label}
                </Link>

              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}

          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="
              hidden
              lg:flex
              items-center
              gap-2
              cursor-pointer
              rounded-lg
              border
              border-[#4B78A8]/50
              bg-[#4B78A8]/10
              px-4
              py-2.5
              text-[13px]
              font-semibold
              text-[#DCE8F3]
              hover:bg-[#4B78A8]/20
              hover:border-[#7FA6C9]/60
              transition-all
              duration-200
            "
          >
            Start a Project

            <FaArrowRight
              className="
                text-[10px]
                transition-transform
                duration-200
                group-hover:translate-x-0.5
              "
            />

          </Link>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="
              lg:hidden
              w-9
              h-9
              rounded-lg
              border
              border-white/[0.08]
              bg-white/[0.025]
              flex
              items-center
              justify-center
              text-[#D8D8D6]
              hover:bg-white/[0.06]
              hover:border-white/[0.14]
              transition
            "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes className="text-sm" />
            ) : (
              <FaBars className="text-sm" />
            )}
          </button>

        </div>

        {/* MOBILE MENU */}

        {menuOpen && (
          <div
            className="
              lg:hidden
              mt-2
              rounded-xl
              border
              border-white/[0.08]
              bg-[#111419]/98
              backdrop-blur-md
              p-3
              shadow-[0_12px_40px_rgba(0,0,0,0.25)]
            "
          >

            <ul className="flex flex-col gap-1">

              {navLinks.map((item) => (
                <li key={item.target}>

                  <Link
                    to={item.target}
                    smooth
                    duration={600}
                    offset={-80}
                    spy
                    onClick={closeMenu}
                    activeClass="!text-[#E8E6E1] !bg-white/[0.06]"
                    className="
                      block
                      cursor-pointer
                      rounded-lg
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-[#9A9DA3]
                      hover:bg-white/[0.04]
                      hover:text-[#E8E6E1]
                      transition
                    "
                  >
                    {item.label}
                  </Link>

                </li>
              ))}

              {/* MOBILE CTA */}

              <li className="pt-2">

                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    cursor-pointer
                    rounded-lg
                    border
                    border-[#4B78A8]/50
                    bg-[#4B78A8]/10
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-[#DCE8F3]
                    hover:bg-[#4B78A8]/20
                    transition
                  "
                >
                  Start a Project

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