const navElements = document.getElementsByClassName("nav");

for (let i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", () => {
    const navBar = document.getElementById("nav-small-screens");
    navBar.style.display = "none";
  });
}
