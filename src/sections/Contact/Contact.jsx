import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa"

import FadeIn from "../../animations/FadeIn"
import SectionTitle from "../../components/ui/SectionTitle"

function Contact() {
  const formRef = useRef()

  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    setSending(true)
    setSent(false)
    setError(false)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSent(true)
      formRef.current.reset()
    } catch (error) {
      console.error(error)
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">

        <FadeIn>

          <SectionTitle
            title="Let's Build Something"
            subtitle="Have an idea, a project or a problem you'd like to solve? Tell me a little about it and I'll get back to you."
          />

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">

            {/* LEFT */}

            <div className="space-y-6">

              <div>

                <h3 className="text-2xl font-bold">
                  Start a conversation
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  I'm open to freelance projects, full-time
                  opportunities and interesting collaborations.
                </p>

              </div>

              {/* EMAIL */}

              <a
                href="mailto:aravinthgv13@gmail.com"
                className="
                  block
                  bg-white/[0.03]
                  p-6
                  rounded-2xl
                  border
                  border-white/10
                 hover:border-[#1687E8]/50
                  hover:bg-white/[0.05]
                  transition
                "
              >

                <div className="flex items-center gap-4">

                  <FaEnvelope className="text-xl text-[#1687E8]" />

                  <div>

                    <h4 className="font-semibold">
                      Email
                    </h4>

                    <p className="text-sm text-gray-400 mt-1">
                      aravinthgv13@gmail.com
                    </p>

                  </div>

                </div>

              </a>

              {/* SOCIALS */}

              <div className="flex gap-4">

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
                    w-12
                    h-12
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-white
hover:border-[#004FAA]/60
                    transition
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="
                    w-12
                    h-12
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-white
                    hover:border-[#1687E8]/60
                    transition
                  "
                >
                  <FaLinkedin />
                </a>

              </div>

              {/* AVAILABILITY */}

              <div
                className="
                  rounded-2xl
                  border
                  border-green-500/20
                  bg-green-500/5
                  p-5
                "
              >

                <div className="flex items-center gap-3">

                  <span
                    className="
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-green-400
                      animate-pulse
                    "
                  />

                  <span className="text-sm text-green-300">
                    Currently open to opportunities
                  </span>

                </div>

                <p className="mt-3 text-sm text-gray-400 leading-6">
                  Available for freelance development,
                  collaborations and full-time roles.
                </p>

              </div>

            </div>

            {/* FORM */}

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                md:p-8
              "
            >

              <div className="grid md:grid-cols-2 gap-5">

                {/* NAME */}

                <div>

                  <label className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    required
                    className="
                      w-full
                      bg-black/20
                      p-4
                      rounded-xl
                      outline-none
                      border
                      border-white/10
                      focus:border-[#1687E8]
                      transition
                    "
                  />

                </div>

                {/* EMAIL */}

                <div>

                  <label className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="user_email"
                    placeholder="you@example.com"
                    required
                    className="
                      w-full
                      bg-black/20
                      p-4
                      rounded-xl
                      outline-none
                      border
                      border-white/10
                      focus:border-[#1687E8]
                      transition
                    "
                  />

                </div>

                {/* PROJECT TYPE */}

                <div>

                  <label className="block text-sm text-gray-400 mb-2">
                    Project Type
                  </label>

                  <select
                    name="project_type"
                    defaultValue=""
                    required
                    className="
                      w-full
                      bg-zinc-900
                      p-4
                      rounded-xl
                      outline-none
                      border
                      border-white/10
                      focus:border-[#1687E8]
                      transition
                    "
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>

                    <option value="Web Application">
                      Web Application
                    </option>

                    <option value="Full-Stack Application">
                      Full-Stack Application
                    </option>

                    <option value="Backend Development">
                      Backend Development
                    </option>

                    <option value="Website">
                      Website
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>

                </div>

                {/* BUDGET */}

                <div>

                  <label className="block text-sm text-gray-400 mb-2">
                    Budget Range
                  </label>

                  <select
                    name="budget"
                    defaultValue=""
                    className="
                      w-full
                      bg-zinc-900
                      p-4
                      rounded-xl
                      outline-none
                      border
                      border-white/10
                      focus:border-[#1687E8]
                      transition
                    "
                  >
                    <option value="" disabled>
                      Select a range
                    </option>

                    <option value="Under $500">
                      Under $500
                    </option>

                    <option value="$500 - $1,000">
                      $500 - $1,000
                    </option>

                    <option value="$1,000 - $2,500">
                      $1,000 - $2,500
                    </option>

                    <option value="$2,500+">
                      $2,500+
                    </option>

                    <option value="Not sure yet">
                      Not sure yet
                    </option>
                  </select>

                </div>

              </div>

              {/* MESSAGE */}

              <div className="mt-5">

                <label className="block text-sm text-gray-400 mb-2">
                  Tell me about your project
                </label>

                <textarea
                  rows="7"
                  name="message"
                  placeholder="What are you trying to build? What problem are you trying to solve?"
                  required
                  className="
                    w-full
                    bg-black/20
                    p-4
                    rounded-xl
                    outline-none
                    border
                    border-white/10
                    focus:border-[#1687E8]
                    transition
                    resize-none
                  "
                />

              </div>

              {/* STATUS */}

              {sent && (
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mt-5
                    p-4
                    rounded-xl
                    border
                    border-green-500/20
                    bg-green-500/5
                    text-green-300
                    text-sm
                  "
                >
                  <FaCheckCircle />
                  Thanks! Your message has been sent successfully.
                </div>
              )}

              {error && (
                <div
                  className="
                    mt-5
                    p-4
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/5
                    text-red-300
                    text-sm
                  "
                >
                  Something went wrong. Please try again or contact me directly by email.
                </div>
              )}

              {/* SUBMIT */}

              <button
  type="submit"
  disabled={sending}
  className="
    mt-6
    w-full
    rounded-xl
    bg-[#004FAA]
    px-8
    py-4
    font-semibold
    text-white
    transition-all
    hover:bg-[#1687E8]
    hover:shadow-[0_0_25px_rgba(22,135,232,0.18)]
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
>
  {sending
    ? "Sending..."
    : "Send Project Inquiry"}
</button>

            </form>

          </div>

        </FadeIn>

      </div>
    </section>
  )
}

export default Contact