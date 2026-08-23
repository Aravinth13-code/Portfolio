import { useMemo } from "react"
import Particles from "@tsparticles/react"

function ParticlesBackground() {
  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            area: 800,
          },
        },

        color: {
          value: ["#22d3ee", "#a855f7", "#3b82f6"],
        },

        links: {
          enable: true,
          distance: 150,
          color: "#64748b",
          opacity: 0.25,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,

          outModes: {
            default: "out",
          },
        },

        opacity: {
          value: 0.5,
        },

        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },

          resize: {
            enable: true,
          },
        },

        modes: {
          grab: {
            distance: 180,

            links: {
              opacity: 0.5,
            },
          },
        },
      },

      detectRetina: true,
    }),
    []
  )

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="pointer-events-none"
    />
  )
}

export default ParticlesBackground