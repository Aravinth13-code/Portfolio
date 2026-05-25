import Particles from "react-tsparticles"

function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          color: {
            value: "#915EFF",
          },

          links: {
            color: "#915EFF",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          number: {
            value: 60,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: 3,
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  )
}

export default ParticlesBackground