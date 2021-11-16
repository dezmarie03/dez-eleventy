// Star field
// Reference: https://codepen.io/louisesagna/pen/JqewVO
(function createStars() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var sky = document.getElementById("skybox");
  var nameSpace = "http://www.w3.org/2000/svg";

  function setAttributes(el, attr) {
    for (let key in attr) {
      el.setAttribute(key, attr[key])
    }
  }

  let starsGroup = document.createElementNS(nameSpace, "g");
  let numberOfStars = 300;

  if (sky) {
    sky.setAttribute("viewBox", `0 0 ${width} ${height}`);

    for (let i = 0; i < numberOfStars; i++) {
      let circle = document.createElementNS(nameSpace, "circle");

      setAttributes(circle, {
        "r": 3,
        "cx": Math.floor(Math.random() * width),
        "cy": Math.floor(Math.random() * height),
        "fill": "#D38DF1",
      });

      let animation = document.createElementNS(nameSpace, "animate");

      setAttributes(animation, {
        "attributeName": "opacity",
        "values": "0; 1; 0",
        "dur": (Math.random() * 20 + 20) / 5,
        "begin": (Math.random() * 20) / -10,
        "repeatCount": "indefinite",
      });

      circle.append(animation);
      starsGroup.append(circle);
    }

    sky.append(starsGroup);
  }
})();
