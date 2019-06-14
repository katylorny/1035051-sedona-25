var form = document.querySelector(".search-form");
var button = document.querySelector(".hotel-search__button");
var arrival = form.querySelector("[name=arrival]");
var departure = form.querySelector("[name=departure]");
var adults = form.querySelector("[name=adults]");
var kids = form.querySelector("[name=kids]");

button.addEventListener("click", function (evt) {
  if (form.classList.contains("modal-close")) {
    form.classList.remove("modal-close");
    form.classList.add("modal-open");
  }
  else {
    form.classList.remove("modal-open");
    form.classList.add("modal-close");
  }
});

form.addEventListener("submit", function (evt) {

  if (!arrival.value || !departure.value || !adults.value || !kids.value) {
    evt.preventDefault();
    console.log("Пожалуйста, заполните все поля");
    form.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("modal-error");
  }
});
