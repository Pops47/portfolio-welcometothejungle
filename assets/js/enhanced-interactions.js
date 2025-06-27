// Enhanced Interactions for Portfolio
document.addEventListener("DOMContentLoaded", function () {
  // Navigation active au scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link, .nav");

  function updateActiveNav() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);

  // Filtres de projets
  const projectFilters = document.querySelectorAll(".projects-nav a");
  const projectCards = document.querySelectorAll(".project-card");

  projectFilters.forEach((filter) => {
    filter.addEventListener("click", function (e) {
      e.preventDefault();

      // Retirer la classe active de tous les filtres
      projectFilters.forEach((f) => f.classList.remove("active"));
      // Ajouter la classe active au filtre cliqué
      this.classList.add("active");

      const filterType = this.getAttribute("href").replace("#", "");

      projectCards.forEach((card) => {
        if (filterType === "work" || filterType === "") {
          // Afficher tous les projets
          card.style.display = "flex";
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        } else {
          // Filtrer par type de projet
          if (card.classList.contains(filterType + "-card")) {
            card.style.display = "flex";
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          } else {
            card.style.opacity = "0.3";
            card.style.transform = "scale(0.95)";
          }
        }
      });
    });
  });

  // Animation d'intersection pour les éléments
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observer les éléments avec la classe fade-in
  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });

  // Smooth scroll pour les liens internes
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Animation des boutons au hover
  const buttons = document.querySelectorAll(".button, .nav-btn-yellow, .nav-btn-white");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-1px) scale(1.01)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Animation des cartes de projets au hover
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
      this.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.12)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
  });

  // Animation des compétences au hover
  const skillLogos = document.querySelectorAll(".skill-logo");
  skillLogos.forEach((logo) => {
    logo.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.filter = "brightness(1.05)";
    });

    logo.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.filter = "brightness(1)";
    });
  });

  // Animation du header au scroll
  let lastScrollTop = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scroll vers le bas
      header.style.transform = "translateY(-100%)";
    } else {
      // Scroll vers le haut
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });

  // Animation des liens de navigation au hover
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-1px)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Animation des icônes de contact
  const contactIcons = document.querySelectorAll(".contact img");
  contactIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05) rotate(3deg)";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  });

  // Animation des boîtes de la timeline au hover
  const timelineBoxes = document.querySelectorAll(".journey-block .box");
  timelineBoxes.forEach((box) => {
    box.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-1px) scale(1.01)";
      this.style.boxShadow = "4px 6px 12px rgba(0, 0, 0, 0.15)";
    });

    box.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "3px 5px 5px #999";
    });
  });

  // Animation des points de la timeline au hover
  const timelinePoints = document.querySelectorAll(".journey-block .point");
  timelinePoints.forEach((point) => {
    point.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.2)";
      this.style.boxShadow = "0 3px 6px rgba(0, 0, 0, 0.25)";
    });

    point.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
    });
  });

  // Animation du logo au hover
  const logos = document.querySelectorAll(".logo img, .mini-logo img");
  logos.forEach((logo) => {
    logo.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.03) rotate(1deg)";
    });

    logo.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  });

  // Animation des liens de projets
  const projectLinks = document.querySelectorAll(".card-bottom .link a");
  projectLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#ffcd00";
      this.style.borderColor = "#ffcd00";
      this.style.transform = "translateY(-1px)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
      this.style.borderColor = "transparent";
      this.style.transform = "translateY(0)";
    });
  });

  // Animation de la section "to-continue"
  const toContinue = document.querySelector(".to-continue");
  if (toContinue) {
    toContinue.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-1px) scale(1.01)";
      this.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.25)";
    });

    toContinue.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "none";
    });
  }

  // Animation des titres de sections
  const sectionTitles = document.querySelectorAll("main h2");
  sectionTitles.forEach((title) => {
    const titleObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.5 }
    );

    titleObserver.observe(title);
    title.style.opacity = "0";
    title.style.transform = "translateY(15px)";
    title.style.transition = "all 0.5s ease";
  });

  // Animation de la ligne de projets
  const projectsLine = document.querySelector(".projects-line span");
  if (projectsLine) {
    const lineObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = "90px";
          }
        });
      },
      { threshold: 0.5 }
    );

    lineObserver.observe(projectsLine);
    projectsLine.style.width = "0";
    projectsLine.style.transition = "width 0.8s ease";
  }

  console.log("Enhanced interactions loaded successfully!");
});
