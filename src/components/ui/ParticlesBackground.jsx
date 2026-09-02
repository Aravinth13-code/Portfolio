import { useEffect, useRef } from "react"

function ParticlesBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let animationFrame
    let width = window.innerWidth
    let height = window.innerHeight

    const mouse = {
      x: -1000,
      y: -1000,
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr

      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()

    window.addEventListener("resize", resize)

    const handleMouseMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    // --------------------------------
    // SOFT LIGHT PARTICLES
    // --------------------------------

    const particleCount = Math.min(
      70,
      Math.max(35, Math.floor(width / 18))
    )

    const particles = Array.from(
      { length: particleCount },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,

        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,

        radius: Math.random() * 1.2 + 0.4,

        phase: Math.random() * Math.PI * 2,
      })
    )

    // --------------------------------
    // UPDATE
    // --------------------------------

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.phase += 0.01

        if (particle.x < -30) {
          particle.x = width + 30
        }

        if (particle.x > width + 30) {
          particle.x = -30
        }

        if (particle.y < -30) {
          particle.y = height + 30
        }

        if (particle.y > height + 30) {
          particle.y = -30
        }
      })
    }

    // --------------------------------
    // CENTER ATMOSPHERE
    // --------------------------------

    const drawAtmosphere = () => {
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        0,
        width * 0.5,
        height * 0.35,
        Math.min(width, height) * 0.75
      )

      gradient.addColorStop(
        0,
        "rgba(0, 79, 170, 0.055)"
      )

      gradient.addColorStop(
        0.45,
        "rgba(22, 135, 232, 0.018)"
      )

      gradient.addColorStop(
        1,
        "rgba(7, 11, 18, 0)"
      )

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    }

    // --------------------------------
    // PARTICLES
    // --------------------------------

    const drawParticles = () => {
      particles.forEach((particle) => {
        const pulse =
          Math.sin(particle.phase) * 0.2 + 0.8

        const dx = particle.x - mouse.x
        const dy = particle.y - mouse.y

        const distance = Math.sqrt(
          dx * dx + dy * dy
        )

        let opacity = 0.22 * pulse

        // Slightly brighten particles near cursor
        if (distance < 180) {
          opacity +=
            (1 - distance / 180) * 0.25
        }

        ctx.beginPath()

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        )

        ctx.fillStyle =
          `rgba(22, 135, 232, ${opacity})`

        ctx.fill()
      })
    }

    // --------------------------------
    // ANIMATION
    // --------------------------------

    const draw = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      )

      drawAtmosphere()

      updateParticles()

      drawParticles()

      animationFrame =
        requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrame)

      window.removeEventListener(
        "resize",
        resize
      )

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      )

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      )
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="
        fixed
        inset-0
        pointer-events-none
        z-0
        opacity-70
      "
      aria-hidden="true"
    />
  )
}

export default ParticlesBackground