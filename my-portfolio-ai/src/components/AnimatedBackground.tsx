"use client";

// import { useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null; // particles load hone se pehle kuch render na ho
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        particles: {
          color: { value: "#8b5cf6" }, // purple color
          links: {
            color: "#8b5cf6", // purple color
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: { enable: true, speed: 2, outModes: { default: "bounce" } },
          number: {
            value: 50,
            density: { enable: true, width: 800, height: 800 },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
