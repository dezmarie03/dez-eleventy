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
  },
  emitters: {
    direction: "bottom",
    size: {
      width: 100,
      height: 100,
    },
    position: {
      x: 0,
      y: 0,
    },
    rate: {
      delay: 2,
      quantity: 300,
    },
    particles: {
      move: {
        angle: 90,
        bounce: false,
        direction: "bottom",
        enable: true,
        outMode: "out",
        speed: 3,
      },
      shape: "circle",
      color: {
        value: [
          "#987008",
          "#EEAC03",
          "#FFE5A3",
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
