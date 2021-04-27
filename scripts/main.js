import "../styles/main.scss";
import Scripts from "./scripts.js";

const Script = new Scripts();

const headerNavLink = $(".header__nav-link");
const fallingMenu = $(".falling-menu");
const upFallingMenu = $(".upfalling__menu");
const slider = $(".slider");
const sliderPaginationBtn = document.querySelectorAll(".slider__pagination-btn");

const slides = [
  "./images/slide1.png",
  "./images/slide2.png",
  "./images/slide3.png",
  "./images/slide4.png",
  "./images/slide5.png"
];

const paginations = [
  document.querySelector("#b1"),
  document.querySelector("#b2"),
  document.querySelector("#b3"),
  document.querySelector("#b4"),
  document.querySelector("#b5")
];

let frame = 0;

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
      Script.changePagination(paginations, slidePaginationBtn, frame);
    }
  });
};

root();
