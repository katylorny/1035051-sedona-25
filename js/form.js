var form = document.querySelector(".search-form");
var button = document.querySelector(".hotel-search__button");

button.addEventListener("click", function (evt) {
  if (form.classList.contains("modal-close")) {
    form.classList.remove("modal-close")
    form.classList.add("modal-open")
  }
  else {
    form.classList.remove("modal-open")
    form.classList.add("modal-close")
  }
})

