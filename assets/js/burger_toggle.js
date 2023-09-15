const burger = document.getElementById("burger");
const closeBurger = document.getElementById("close-burger");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  const nav = document.getElementById("nav-small-screens");

  nav.style.display = "flex";
  burger.style.display = "none";
  closeBurger.style.display = "inline";
});

closeBurger.addEventListener("click", (e) => {
  e.preventDefault();
  const nav = document.getElementById("nav-small-screens");

  nav.style.display = "none";
  burger.style.display = "inline";
  closeBurger.style.display = "none";
});
