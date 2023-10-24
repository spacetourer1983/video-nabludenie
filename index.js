const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".burger-button");
const closeIcon = document.querySelector(".burger-button__close");
const showIcon = document.querySelector(".burger-button__show");
const menuItems = document.querySelectorAll(".navbar-menu__item"); 
function toggleMenu() {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    closeIcon.style.display = "none";
    showIcon.style.display = "block";
  } else {
    navbar.classList.add("active");
    closeIcon.style.display = "block";
    showIcon.style.display = "none";
  }
}
menuItems.forEach(function(menuItem) {
  menuItem.addEventListener("click", function() {
    document.querySelector(".navbar").classList.remove("active");
  });
});
hamburger.addEventListener("click", toggleMenu);