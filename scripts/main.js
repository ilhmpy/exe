import "../styles/main.scss";
import Scripts from "./scripts.js";

// класс создание объекта класса Scripts имеющий в себе
const Script = new Scripts();

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
let frame = 0;

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
      frame++;
      if (frame >= slides.length) frame = 0;
      Script.changeSlide(slides, frame, slider);
      Script.changePagination(paginations, sliderPaginationBtn, frame);
    }
    if (e.target.id == "left") {
      frame--;
      if (frame < 0) frame = 0;
      Script.changeSlide(slides, frame, slider);
      Script.changePagination(paginations, sliderPaginationBtn, frame);
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
