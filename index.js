let menuBtn = document.querySelector(".burger-button");
let navbar = document.querySelector(".navbar");
menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
