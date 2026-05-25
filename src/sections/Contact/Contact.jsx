import { useRef } from "react"

import emailjs from "@emailjs/browser"

import FadeIn from "../../animations/FadeIn"
import SectionTitle from "../../components/ui/SectionTitle"

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa"

function Contact() {

  const formRef = useRef()

  const sendEmail = (e) => {

    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(() => {

        alert("Message sent successfully!")

        formRef.current.reset()

      })

      .catch((error) => {

        console.log(error)

        alert("Something went wrong!")

      })
  }

  return (
    <section
      id="contact"
      className="section-padding"
    >
      <div className="max-w-6xl mx-auto">

        <FadeIn>

          <SectionTitle
            title="Contact"
            subtitle="
              Open for fulltime opportunities,
              collaborations and freelance projects.
            "
          />

          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT SIDE */}

            <div className="space-y-6">

              {/* EMAIL */}

              <div
                className="
                  bg-zinc-900
                  p-6
                  rounded-2xl
                  border
                  border-zinc-800
                  hover:border-cyan-400
                  hover:shadow-[0_0_25px_rgba(0,245,255,0.3)]
                  transition
                  duration-300
                "
              >

                <div className="flex items-center gap-4">

                  <FaEnvelope className="text-2xl text-cyan-400" />

                  <div>

                    <h4 className="font-semibold">
                      Email
                    </h4>

                    <p className="text-gray-400">
                      yourmail@gmail.com
                    </p>

                  </div>

                </div>

              </div>

              {/* GITHUB */}

              <div
                className="
                  bg-zinc-900
                  p-6
                  rounded-2xl
                  border
                  border-zinc-800
                  hover:border-purple-500
                  hover:shadow-[0_0_25px_rgba(145,94,255,0.3)]
                  transition
                  duration-300
                "
              >

                <div className="flex items-center gap-4">

                  <FaGithub className="text-2xl text-purple-400" />

                  <div>

                    <h4 className="font-semibold">
                      GitHub
                    </h4>

                    <p className="text-gray-400">
                      github.com/yourprofile
                    </p>

                  </div>

                </div>

              </div>

              {/* LINKEDIN */}

              <div
                className="
                  bg-zinc-900
                  p-6
                  rounded-2xl
                  border
                  border-zinc-800
                  hover:border-blue-500
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                  transition
                  duration-300
                "
              >

                <div className="flex items-center gap-4">

                  <FaLinkedin className="text-2xl text-blue-400" />

                  <div>

                    <h4 className="font-semibold">
                      LinkedIn
                    </h4>

                    <p className="text-gray-400">
                      linkedin.com/in/yourprofile
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="
                bg-zinc-900
                p-8
                rounded-2xl
                border
                border-zinc-800
                hover:border-purple-500
                hover:shadow-[0_0_30px_rgba(145,94,255,0.3)]
                transition
                duration-300
              "
            >

              <div className="space-y-6">

                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="
                    w-full
                    bg-zinc-800
                    p-4
                    rounded-xl
                    outline-none
                    border
                    border-transparent
                    focus:border-cyan-400
                  "
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="
                    w-full
                    bg-zinc-800
                    p-4
                    rounded-xl
                    outline-none
                    border
                    border-transparent
                    focus:border-cyan-400
                  "
                />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  required
                  className="
                    w-full
                    bg-zinc-800
                    p-4
                    rounded-xl
                    outline-none
                    border
                    border-transparent
                    focus:border-cyan-400
                  "
                />

                <button
                  type="submit"
                  className="
                    bg-purple-600
                    hover:bg-purple-700
                    transition
                    px-8
                    py-4
                    rounded-xl
                    w-full
                  "
                >
                  Send Message
                </button>

              </div>

            </form>

          </div>

        </FadeIn>

      </div>
    </section>
  )
}

export default Contact