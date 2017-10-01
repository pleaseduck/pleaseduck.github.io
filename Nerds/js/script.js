var  closeUp = document.querySelector(".exit_button");
var popUp = document.querySelector(".write-us-form");
var popUpButton = document.querySelector(".write-to-us");
var send = document.querySelector("input.write-us");
var yourName = document.querySelector("#name");
var yourMail = document.querySelector("#e-mail");
var yourText = document.querySelector("#write-us-area");
var name = localStorage.getItem("yourName");
var e_mail = localStorage.getItem("yourMail");
var overlay= document.querySelector(".overlay")

popUp.addEventListener("submit", function(event) {
  if (!yourName.value || !yourMail.value ) {
    event.preventDefault();
    alert("Fill all necessary fields");
  }
  else {
    overlay.classList.remove("overlay-open");
    localStorage.setItem("yourName", yourName.value);
    localStorage.setItem("yourMail", yourMail.value);
    popUp.classList.remove("write-us-form-open");
  }
});

popUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  popUp.classList.add("write-us-form-open");
  overlay.classList.add("overlay-open");
  if (name) {
    yourName.value = name;
  };
  if (e_mail) {
    yourMail.value = e_mail;
  };

  if (name && e_mail) {
    yourText.focus();
  } else if (name && !e_mail) {
    yourMail.focus();
  }
  else {
    yourName.focus();
  };
});

closeUp.addEventListener("click", function() {
  overlay.classList.remove("overlay-open");
  popUp.classList.remove("write-us-form-open");
});
window.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
    if (popUp.classList.contains('write-us-form-open')) {
        popUp.classList.remove('write-us-form-open');
        overlay.classList.remove("overlay-open");
    }
  }
});
