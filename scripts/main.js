import "../styles/main.scss";
import Scripts from "./scripts.js";

const Script = new Scripts();

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
