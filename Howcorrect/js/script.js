var menu = document.querySelector(".main-nav");
var menu_open = document.querySelector(".hamburger-wrapper");
var hamb =  document.querySelector(".hamburger-wrapper span");

menu_open.addEventListener("click", function() {
  if(menu.classList.contains("main-nav--opened")) {
    menu.classList.remove("main-nav--opened");
    hamb.classList.remove("menu-closer");
    hamb.classList.add("hamburger");
  } else {
    menu.classList.add("main-nav--opened");
    hamb.classList.remove("hamburger");
    hamb.classList.add("menu-closer");
  }
})
