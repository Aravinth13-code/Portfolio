import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ParticlesProvider } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

import "./index.css"
import App from "./App.jsx"

const initParticles = async (engine) => {
  await loadSlim(engine)
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ParticlesProvider init={initParticles}>
      <App />
    </ParticlesProvider>
  </StrictMode>
)