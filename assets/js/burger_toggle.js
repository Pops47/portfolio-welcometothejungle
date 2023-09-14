const burger = document.getElementById("burger");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  const nav = document.getElementById("nav-small-screens");

  nav.style.display === "none"
    ? (nav.style.display = "flex")
    : (nav.style.display = "none");
});
