class Scripts {
  constructor() {
    this.changeMenu = this.changeMenu.bind(this);
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
};

export default Scripts;
