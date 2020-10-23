// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const modalbtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".modal-overlay");
modalbtn.addEventListener("click", function () {
  sideBar.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("open-modal");
});
