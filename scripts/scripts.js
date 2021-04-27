class Scripts {
  constructor() {
    // бинды контекста this класса на методы
    this.changeMenu = this.changeMenu.bind(this);
    this.changePagination = this.changePagination.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
  }

  changeMenu(object, menu, mode = true) {
    if (mode) {
      object.addClass("times");
      menu.css({
        "display": "block",
        "animation": "slideDown 1s 0s ease-in-out",
        "animation-fill-mode": "forwards"
      });
    } else {
      object.removeClass("times");
      menu.css({
        "animation":"slideUp 1s 0s ease-in-out",
        "animation-fill-mode":"forwards"
      });
      setTimeout(() => menu.css("display", "none"), 1000);
    };
  };

  changePagination(btns, selector, frame) {
    selector.forEach(btn => btn.classList.remove("activePag"));
    btns[frame].classList.add("activePag");
  };

  changeSlide(massive, index, selector) {
    selector.css("opacity", "20%");
    setTimeout(() => {
      selector.css({
        "opacity":"100%",
        "background": `url(${massive[index]}) center no-repeat`,
        "background-size": "cover"
      });
    }, 300);
  };
};

export default Scripts;
