var form = document.querySelector(".search-form");
var button = document.querySelector(".hotel-search__button");

button.addEventListener("click", function (evt) {
  // evt.preventDefault();
  // form.classList.toggle("modal-close");
  // form.classList.toggle("modal-open");

  //form.classList.toggle("modal-close");
  if (form.classList.contains("modal-close")) {
    //console.log("нет close");

    form.classList.remove("modal-close")
    form.classList.add("modal-open")
  }
  else{
    form.classList.remove("modal-open")
    form.classList.add("modal-close")
  }

  })

