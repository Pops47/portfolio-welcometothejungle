const navElements = document.getElementsByClassName("nav");

for (let i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", () => {
    const navBar = document.getElementById("nav-small-screens");
    const burger = document.getElementById("burger");
    const closeBurger = document.getElementById("close-burger");
    navBar.style.display = "none";
    burger.style.display = "inline";
    closeBurger.style.display = "none";
  });
}
