import { useState } from "react"

import { Link } from "react-scroll"

import {
  FaBars,
  FaTimes,
} from "react-icons/fa"

const navLinks = [
  "about",
  "skills",
  "projects",
  "contact",
]

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/20
        backdrop-blur-md
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          justify-between
          items-center
          px-8
          py-5
        "
      >

        {/* LOGO */}

        <h1
          className="
            text-2xl
            font-bold
            gradient-text
          "
        >
          Portfolio
        </h1>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex gap-8">

          {navLinks.map((item) => (
            <li key={item}>

              <Link
                to={item}
                smooth={true}
                duration={500}
                className="
                  cursor-pointer
                  hover:text-cyan-400
                  transition
                "
              >
                {item}
              </Link>

            </li>
          ))}

        </ul>

        {/* MOBILE MENU ICON */}

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </div>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div
          className="
            md:hidden
            bg-zinc-900
            border-t
            border-zinc-800
          "
        >

          <ul
            className="
              flex
              flex-col
              items-center
              gap-8
              py-8
            "
          >

            {navLinks.map((item) => (
              <li key={item}>

                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="
                    cursor-pointer
                    text-lg
                    hover:text-cyan-400
                    transition
                  "
                >
                  {item}
                </Link>

              </li>
            ))}

          </ul>

        </div>

      )}

    </nav>
  )
}

export default Navbar