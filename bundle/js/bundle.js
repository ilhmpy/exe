/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./scripts/scripts.js
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
    }, 200);
  };
};

/* harmony default export */ const scripts = (Scripts);

;// CONCATENATED MODULE: ./scripts/main.js



// класс создание объекта класса Scripts имеющий в себе
const Script = new scripts();

// константы DOM элементов
const headerNavLink = $(".header__nav-link");
const fallingMenu = $(".falling-menu");
const upFallingMenu = $(".upfalling__menu");

const slider = $(".slider");
const sliderPaginationBtn = document.querySelectorAll(".slider__pagination-btn");

let slides;

// слайды в зависимости от от размера экрана
if (screen.width > 480) {
  slides = [
    "./images/slide1.png",
    "./images/slide2.png",
    "./images/slide3.png",
    "./images/slide4.png",
    "./images/slide5.png"
  ];
} else {
  slides = [
    "./images/slide1-m.png",
    "./images/slide2-m.png",
    "./images/slide3-m.png",
    "./images/slide4-m.png",
    "./images/slide1-m.png"
  ];
};


// массив кнопок пагинации
const paginations = [
  document.querySelector("#b1"),
  document.querySelector("#b2"),
  document.querySelector("#b3"),
  document.querySelector("#b4"),
  document.querySelector("#b5")
];

// переменная отвечающая за текущий слайдер
let main_frame = 0;

// регулярное выражение по поиску номера в id кнопки пагинации
let regNumber = /\d+$/gi;

// текущий индекс получающий ид кнопки пагинации преобразованый в индекс
let index = 0;

// основная функция
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

  // слайдер по стрелочкам а так же смена пагинации
  $('.slider__arrow').on("click", e => {
    $(".slider__arrow").removeClass("activeArrow");
    $(e.target).addClass("activeArrow");
    if (e.target.id == "right") {
      main_frame++;
      if (main_frame >= slides.length) main_frame = 0;
      Script.changeSlide(slides, main_frame, slider);
      Script.changePagination(paginations, sliderPaginationBtn, main_frame);
    }
    if (e.target.id == "left") {
      main_frame--;
      if (main_frame < 0) main_frame = 0;
      Script.changeSlide(slides, main_frame, slider);
      Script.changePagination(paginations, sliderPaginationBtn, main_frame);
    }
  });

  // переключение слайдов по нажатию на пагинацию
  $(".slider__pagination").on("click", e => {
    if (e.target.id.match(regNumber)) {
      index = Number(e.target.id.match(regNumber)) - 1;
      Script.changeSlide(slides, index, slider);
      Script.changePagination(paginations, sliderPaginationBtn, index);
    };
  });
};

// вызов корневой функции
root();

/******/ })()
;