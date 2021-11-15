// Glitter
tsParticles.load("tsparticles", {
  "detectRetina": true,
  "fpsLimit": 60,
  "backgroundMode": {
    "enable": true,
    "zIndex": 0
  },
  "emitters": {
    "direction": "bottom",
    "size": {
      "width": 100,
      "height": 0,
    },
    "position": {
      "x": 0,
      "y": 0,
    },
    "rate": {
      "delay": 1,
      "quantity": 20,
    },
  },
  "particles": {
    "move": {
      "angle": 90,
      "direction": "bottom",
      "enable": true,
      "outMode": "out",
      "speed": 3,
    },
    "number": {
      "limit": 20,
      "value": 0,
    },
    "color": {
      "value": [
        "#987008",
        "#EEAC03",
        "#FFE5A3",
      ],
    },
    "size": {
      "random": {
        "enable": true,
        "minimumValue": 2,
      },
      "value": 4,
    },
  },
});
