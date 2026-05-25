import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold"
        >
          Fullstack Developer
        </motion.h1>

        <p className="mt-4 text-xl text-gray-400">
          Java • Spring Boot • React • MongoDB
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-500 px-6 py-3 rounded-xl">
            Hire Me
          </button>

          <button className="border border-white px-6 py-3 rounded-xl">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero