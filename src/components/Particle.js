import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80, // Reduced from 160 to 80 for better performance
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.03, // Reduced from 0.05 to 0.03
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 0.5, // Reduced from 1 to 0.5
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: false, // Disabled for better performance
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: false, // Disabled for better performance
        fps_limit: 30, // Added FPS limit
        background: {
          color: "transparent",
        },
      }}
    />
  );
}

export default Particle;
