
var link = document.querySelector('header .btn-enter');
var popUp = document.querySelector('div.login-form');
var close = document.querySelector('div.login-form .close-button');
var login = document.querySelector('.user-icon');
var pwd = document.querySelector('.pwd-icon');
var storage = localStorage.getItem('login');
var overlay= document.querySelector(".overlay");

link.addEventListener('click', function(event) {
  event.preventDefault();
  popUp.classList.add('login-form-open');
  overlay.classList.add("overlay-open");
  if (storage) {
    login.value = storage;
    pwd.focus();
  } else {
    login.focus();
  }
});

close.addEventListener('click', function() {
  popUp.classList.remove('login-form-open');
  overlay.classList.remove("overlay-open");
});

popUp.addEventListener('submit', function(event) {
  popUp.classList.remove('login-form-open');
  localStorage.setItem('login', login.value);
  overlay.classList.remove("overlay-open");
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
    if (popUp.classList.contains('login-form-open')) {
        popUp.classList.remove('login-form-open');
        overlay.classList.remove("overlay-open");
    }
  }
});
