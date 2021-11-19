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
      value: 0,
    },
    move: {
      bounce: false,
    },
  },
  emitters: {
    direction: "bottom",
    size: {
      width: 50,
      height: 50,
    },
    position: {
      x: 50,
      y: 0,
    },
    rate: {
      delay: 0,
      quantity: 1,
    },
    particles: {
      move: {
        angle: 90,
        direction: "bottom",
        enable: true,
        outMode: "out",
        speed: 2,
      },
      shape: "circle",
      color: {
        value: [
          "#FECFFE",
          "#F7F3FF",
          "#AA86F8",
        ],
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: 2,
      },
      life: {
        duration: {
          sync: true,
          value: 10,
        },
      },
    },
  },
});
