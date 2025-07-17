import React, { useId, useMemo, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const controls = useAnimation();

  const particlesLoaded = async () => {
    controls.start({
      opacity: 1,
      transition: { duration: 1 },
    });
  };

  const generatedId = useId();
  return (
    <motion.div animate={controls} className={"opacity-0 " + (className || "")}> 
      {init && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: background || "transparent" },
            },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: false, mode: "push" },
                onHover: { enable: false, mode: "repulse" },
                resize: { enable: true },
              },
              modes: {
                push: { quantity: 2 },
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              color: { value: particleColor || "#fff" },
              move: {
                direction: "none",
                enable: true,
                speed: 0.3,
                outModes: { default: "out" },
                random: true,
              },
              number: {
                density: { enable: true, width: 400, height: 400 },
                value: particleDensity || 40,
              },
              opacity: {
                value: { min: 0.2, max: 0.7 },
                animation: {
                  enable: true,
                  speed: speed || 1.5,
                  sync: false,
                  startValue: "random",
                  mode: "auto",
                },
              },
              shape: { type: "circle" },
              size: {
                value: { min: minSize || 1, max: maxSize || 2.5 },
                animation: { enable: false, speed: 2, sync: false },
              },
              links: { enable: false },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
}; 