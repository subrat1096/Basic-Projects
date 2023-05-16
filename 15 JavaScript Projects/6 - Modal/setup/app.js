//select modal-btn, close-btn, modal-overlay
const btn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

//add click events on modal-btn with a callback function when user clicks add open-modal class to modal-overlay
btn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

//add click events on close-btn with a callback function when user clicks remove open-modal class to modal-overlay
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
