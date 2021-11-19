// Glitter
tsParticles.load("glitter", {
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: {
        enable: false,
      },
      onhover: {
        enable: false,
      },
    },
  },
  particles: {
    number: {
      density: {
        enable: true
      },
      limit: 0,
      value: 0,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom",
      straight: false,
      bounce: false,
    },
  },
  emitters: {
    direction: "bottom",
    size: {
      width: 25,
      height: 0,
    },
    position: {
      x: 50,
      y: 0,
    },
    rate: {
      delay: 1,
      quantity: 1,
    },
    particles: {
      shape: "circle",
      color: {
        value: [
          "#FECFFE",
          "#AA86F8",
        ],
      },
      opacity: {
        value: 0.5,
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: 3,
      },
    },
  },
  absorbers: {
    color: {
      value: "#240566",
    },
    draggable: false,
    opacity: 1,
    destroy: true,
    orbits: false,
    size: {
      random: {
        enable: false,
      },
      value: {
        min: 10,
        max: 70,
      },
      density: 10,
      limit: {
        radius: 1,
        mass: 1,
      },
    },
    position: {
      x: 50,
      y: 70,
    },
  },
});
