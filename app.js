const burgerIcon = document.querySelector(".burger-container");
const sideBar = document.querySelector(".side-bar");
const closeBurgerIcon = document.querySelector(".close-burger-icon");
const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");
burgerIcon.addEventListener("click", (e) => {
  e.preventDefault();
  sideBar.style.display = "flex";
});

closeBurgerIcon.addEventListener("click", (e) => {
  e.preventDefault();
  sideBar.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    input.value = "";
  });
  document.querySelector("textarea").value = "";
});
