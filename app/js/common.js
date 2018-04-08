$(function() {
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector("#my-menu");

  hamburger.addEventListener("click", function() {
    mainNav.classList.toggle("menu-opened");
  });

  $(document).ready(function(){
  $(".tariff-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
  });
});
$(document).ready(function(){
$(".reviews-carousel").owlCarousel({
  items: 3,
  loop: true,
  dots: true,
  dotsEach: true,
  nav: true,
  navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
  margin: 40,
  responsive: {
    0: {
      items: 1
    },
    800: {
      items: 2
    },
    1100: {
      items: 3
    }
  }
});
});

const firstQuestion = document.querySelector("#first-question");
const secondQuestion = document.querySelector("#second-question");
const thirdQuestion = document.querySelector("#third-question");

firstQuestion.addEventListener("click", function() {
  let answer = document.querySelector(".first-question");
  answer.classList.toggle("hidden-answer")
});

secondQuestion.addEventListener("click", function() {
  let answer = document.querySelector(".second-question");
  answer.classList.toggle("hidden-answer")
});

thirdQuestion.addEventListener("click", function() {
  let answer = document.querySelector(".third-question");
  answer.classList.toggle("hidden-answer")
});

});
