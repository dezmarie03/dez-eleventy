(function setupSlider() {
  var slider = document.getElementById("slider");
  var tabs = [];
  var panels = [];

  function scrollToTab(nextIndex) {
    let tabsWidth = tabs[0].offsetWidth * (tabs.length + 2);

    let scrollPosition = Array.prototype.indexOf.call(tabs, nextIndex) * (tabsWidth / tabs.length);

    filmstrip.scrollLeft = scrollPosition;
  }

  function switchTab(currentIndex, nextIndex) {
    tabs[currentIndex].setAttribute("tabindex", "-1");
    tabs[currentIndex].removeAttribute("aria-selected");
    tabs[currentIndex].classList.remove("slider__tab--active");
    tabs[nextIndex].removeAttribute("tabindex");
    tabs[nextIndex].setAttribute("aria-selected", true);
    tabs[nextIndex].classList.add("slider__tab--active");

    panels[currentIndex].hidden = true;
    panels[nextIndex].hidden = false;

    scrollToTab(tabs[nextIndex]);
  }

  function nextTab(currentIndex) {
    let direction = currentIndex !== tabs.length - 1 ? currentIndex + 1 : 0;

    switchTab(currentIndex, direction);
  }

  function previousTab(currentIndex) {
    let direction = currentIndex !== 0 ? currentIndex - 1 : tabs.length - 1;

    switchTab(currentIndex, direction);
  }

  function handleSliderClickEvents(event) {
    let currentTab = tabList.querySelector("[aria-selected]");
    let currentIndex = Array.prototype.indexOf.call(tabs, currentTab);

    event.preventDefault();

    if (event.target == previousBtn) {
      previousTab(currentIndex);
    }

    if (event.target == nextBtn) {
      nextTab(currentIndex);
    }

    if (event.target instanceof HTMLAnchorElement) {
      let direction = Array.prototype.indexOf.call(tabs, event.target);

      switchTab(currentIndex, direction);
    }
  }

  function handleSliderKeyEvents(event) {
    let currentTab = tabList.querySelector("[aria-selected");
    let currentIndex = Array.prototype.indexOf.call(tabs, currentTab);

    let actions = {
      arrowLeft: event.key == "ArrowLeft",
      arrowRight: event.key == "ArrowRight",
      shift: event.shiftKey,
      space: event.key == " ",
      tab: event.key == "Tab",
    }

    if (event.target == previousBtn && actions.space) {
      event.preventDefault();
      previousTab(currentIndex);
    }

    if (event.target == nextBtn && actions.space) {
      event.preventDefault();
      nextTab(currentIndex);
    }

    if (event.target instanceof HTMLAnchorElement && actions.arrowLeft) {
      event.preventDefault();
      previousTab(currentIndex);
    }

    if (event.target instanceof HTMLAnchorElement && actions.arrowRight) {
      event.preventDefault();
      nextTab(currentIndex);
    }
  }

  if (slider) {
    var previousBtn = document.getElementById("previous");
    var nextBtn = document.getElementById("next");
    var filmstrip = document.querySelector(".slider__filmstrip");
    var tabList = document.querySelector(".slider__tabs");

    tabs = slider.querySelectorAll(".slider__tab");
    panels = slider.querySelectorAll(".slider__panel");

    if (tabs.length) {
      tabs.forEach(tab => {
        tab.setAttribute("tabindex", "-1");
      });

      tabs[0].removeAttribute("tabindex");
      tabs[0].setAttribute("aria-selected", true);
      tabs[0].classList.add("slider__tab--active");
    }

    if (panels.length) {
      panels.forEach((panel, index) => {
        panel.setAttribute("tabindex", "-1");
        panel.setAttribute("aria-labeledby", tabs[index].id);
        panel.hidden = true;
      });

      panels[0].hidden = false;
    }

    slider.addEventListener("click", handleSliderClickEvents);
    slider.addEventListener("keydown", handleSliderKeyEvents);
  } else {
    console.error("Slider wrapper not found.");
  }
})();
