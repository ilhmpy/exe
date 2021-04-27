/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./scripts/scripts.js
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

/* harmony default export */ const scripts = (Scripts);

;// CONCATENATED MODULE: ./scripts/main.js



const Script = new scripts();

const headerNavLink = $(".header__nav-link");
const fallingMenu = $(".falling-menu");
const upFallingMenu = $(".upfalling__menu");

function root() {
  // открытие и закрытие выпадающих меню;
  headerNavLink.on("mouseenter", e => {
    fallingMenu.each((index, menu) => {
      $(menu).hide();
      if (menu.id == e.target.id + "-menu") {
        $(menu).show();
      };
    });
  });

  // закрытие выпадающих меню
  fallingMenu.on("mouseleave", e => fallingMenu.each((index, menu) => $(menu).hide()));

  // открытие и закрытие меню
  $(".header__bar").on("click", e => {
    if (e.target.className == "header__bar") Script.changeMenu($(e.target), upFallingMenu, true);
    else if (e.target.className == "header__bar times") Script.changeMenu($(e.target), upFallingMenu, false);
  });
};

root();

/******/ })()
;