// Burger menu toggle avec animations améliorées
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const closeBurger = document.getElementById("close-burger");
  const navSmallScreens = document.getElementById("nav-small-screens");
  const body = document.body;

  function openMenu() {
    burger.style.display = "none";
    closeBurger.style.display = "inline";
    navSmallScreens.style.display = "block";

    // Animation d'ouverture
    navSmallScreens.style.opacity = "0";
    navSmallScreens.style.transform = "translateY(-10px)";

    setTimeout(() => {
      navSmallScreens.style.opacity = "1";
      navSmallScreens.style.transform = "translateY(0)";
    }, 10);

    // Empêcher le scroll du body
    body.style.overflow = "hidden";

    // Animation des liens de navigation
    const navLinks = navSmallScreens.querySelectorAll(".nav");
    navLinks.forEach((link, index) => {
      link.style.opacity = "0";
      link.style.transform = "translateX(-20px)";

      setTimeout(() => {
        link.style.opacity = "1";
        link.style.transform = "translateX(0)";
      }, 100 + index * 100);
    });
  }

  function closeMenu() {
    closeBurger.style.display = "none";
    burger.style.display = "inline";

    // Animation de fermeture
    navSmallScreens.style.opacity = "0";
    navSmallScreens.style.transform = "translateY(-10px)";

    setTimeout(() => {
      navSmallScreens.style.display = "none";
    }, 300);

    // Réactiver le scroll du body
    body.style.overflow = "auto";

    // Reset des animations des liens
    const navLinks = navSmallScreens.querySelectorAll(".nav");
    navLinks.forEach((link) => {
      link.style.opacity = "";
      link.style.transform = "";
    });
  }

  burger.addEventListener("click", openMenu);
  closeBurger.addEventListener("click", closeMenu);

  // Fermer le menu en cliquant sur un lien
  const navLinks = navSmallScreens.querySelectorAll(".nav");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(closeMenu, 100); // Petit délai pour laisser le temps au scroll
    });
  });

  // Fermer le menu en cliquant en dehors
  document.addEventListener("click", function (event) {
    if (
      navSmallScreens.style.display === "block" &&
      !navSmallScreens.contains(event.target) &&
      !burger.contains(event.target) &&
      !closeBurger.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Fermer le menu avec la touche Escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navSmallScreens.style.display === "block") {
      closeMenu();
    }
  });

  // Animation du burger menu
  burger.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1) rotate(5deg)";
  });

  burger.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });

  closeBurger.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1) rotate(-5deg)";
  });

  closeBurger.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)";
  });
});
