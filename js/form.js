var form = document.querySelector(".search-form");
var button = document.querySelector(".hotel-search__button");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("modal-close");
  // form.classList.toggle("modal-open");

  })

