// Système de traduction français/anglais
const translations = {
  fr: {
    nav: {
      about: "À propos",
      education: "Parcours",
      skills: "Compétences",
      work: "Projets",
      resume: "Mon CV interactif",
      contact: "Me contacter",
    },
    hero: {
      title: "Hello, je suis Pauline,<br />développeuse fullstack.<br />J'aime créer de nouvelles choses et apprendre chaque jour !",
      discover_journey: "Découvrir mon parcours",
      check_toolbox: "Voir ma boîte à outils",
      discover_projects: "Exporer mes projets",
    },
    journey: {
      title: "Mon Parcours Professionnel",
      solving: {
        title: "Stage chez Solving Company",
        description: "Conception et développement d'un MVP pour une application web de dispositif médical.",
        list: [
          "Projet fullstack : React, Flask, PostgreSQL",
          "Clean architecture, authentification sécurisée, gestion de données médicales",
          "Création de dashboards pour plusieurs types d'utilisateurs",
          "Interface ReactFlow pour arbres généalogiques médicaux",
          "CRUD backend, résolution de bugs, et intégration de 2 API externes",
          "Utilisation quotidienne de Cursor pour améliorer la productivité",
        ],
      },
      freelance: {
        title: "Freelance en agence web",
        description: "Projet de refonte CRM pour un cabinet d'avocats.",
        list: [
          "Développement frontend React à partir de maquettes fournies",
          "Formulaires d'authentification et gestion des utilisateurs",
          "Développement de pages, routage",
          "Intégration API et connectivité backend",
          "Design responsive et optimisation UX",
        ],
      },
      alt: {
        title: "Incubateur Tech",
        description: "J'ai rejoint &lt; ALT /> pour développer mes compétences en environnement professionnel.",
        list: [
          "Optimisation de base de données et architecture système",
          "Développement de microservices",
          "Création d'une SPA fullstack pour la gestion de bénévoles",
          "Stack : React, NestJS, MySQL",
          "Équipe de 5 développeurs utilisant la méthodologie Kanban",
          "Implémentation GitLab CI/CD",
        ],
      },
      reacteur: {
        title: "Le Reacteur",
        description: "Bootcamp de reconversion - formation intensive en programmation.",
        list: [
          "Développement front-end et back-end",
          "Développement Web et Mobile",
          "Stack MERN (React, Node, Express, MongoDB)",
          "Utilisation quotidienne de Git/GitHub",
          "Méthodologie Agile pour projets d'équipe",
        ],
      },
      self_taught: {
        title: "Formation autodidacte",
        description: "Pendant mon congé parental, j'ai investi dans l'apprentissage continu via des plateformes en ligne :",
        list: [
          "Dyma : Certifications Linux, Git et Docker",
          "TheArenaProject : Shell, Système de fichiers, Algorithmes et Structures de données",
          "'L'école du Web' : Javascript, React, Vue, Tailwind",
          "NextReact : Typescript, Next.JS, tests",
        ],
        additional: "Aussi suivi des cours gratuits de 'FreeCodeCamp' et 'OpenClassRoom' et participé à des communautés tech comme 'Pinqo' et 'GuildOpenTech'.",
      },
      vet: {
        title: "Expériences professionnelles",
        description: "10 ans en tant que vétérinaire pour petits animaux dans diverses cliniques.",
        list: [
          "Compétences solides en résolution de problèmes",
          "Vulgarisation de connaissances à tout type de public",
          "Collaboration quotidienne client/équipe",
          "Professionnelle adaptable et autonome",
          "Résistante au stress dans des situations difficiles",
        ],
      },
      academic: {
        title: "Formation académique",
        list: [
          "Doctorat vétérinaire (2012)<br />École Nationale Vétérinaire de Toulouse",
          "Classe préparatoire Biologie (BCPST)<br />Lycée Fermat - Toulouse",
          "Baccalauréat Scientifique<br />Lycée Théophile Gautier - Tarbes",
        ],
      },
    },
    skills: {
      title: "Ma Stack Technique",
    },
    projects: {
      title: "Mes projets",
      all_projects: "Tous les projets",
      note: "La plupart de mes projets sont hébergés sur des plateformes gratuites. Merci de me signaler si des liens sont cassés.",
      front: "Front",
      back: "Back",
      screenshots: "Visuels",
      swagger: "Doc Swagger",
      private: "Privé (démo sur demande)",
      link: "Lien",
      solving: {
        title: "Solving Company",
        type: "Application médicale pour centres d'oncologie",
        description:
          "Développement front complet en autonomie. Ajout de features backend et résolution de bugs. Developpement d'une interface pour afficher les génogrammes",
        tech: "React, ReactFlow, Python, Flask, PostgreSQL",
      },
      marketplace: {
        title: "MarketPlace",
        type: "Marketplace de produits locaux",
        description:
          "Projet bénévole réalisé au sein de la communauté tech Pinqo. Participation à la conception, dockerisation et développement d'un CRUD backend pour les catégories de produits",
        tech: "Java, Spring Boot, JPA, PostgreSQL, JUnit, Docker",
      },
      managevent: {
        title: "ManagEvent",
        type: "SPA gestion d'événements pour associations",
        description:
          "Travail en équipe de 5 développeurs, méthodes agiles. Système d'authentification JWT avec refresh token. Dockerization, GitLab CI/CD, déploiement sur serveur OVH et AWS EC2",
        tech: "React, Nest, Prisma, PostgreSQL",
      },
      actioneo: {
        title: "Actioneo",
        type: "Refonte du CRM d'un cabinet d'avocats",
        description:
          "Développement frontend de la partie configurations et de toutes les vues des fiches clients et des fiches entreprises. Formulaires complexes. Gestion du cache",
        tech: "React, Tailwind, MUI, TanStackQuery, Zod",
      },
      marvel: {
        title: "Marvel API",
        type: "Site web affichant vos comics et personnages préférés",
        description: "Création des pages, barre de recherche, pagination, sauvegarde des favoris, API externe",
        tech: "React, Node/Express",
      },
      vinted: {
        title: "VINTED CLONE",
        type: "Un clone du célèbre site e-commerce",
        description: "Intégration frontend, authentification, barre de recherche, vente d'articles, système de panier, traitement des paiements",
        tech: "React, Node/Express, API CRUD, Stripe",
      },
      tellmemore: {
        title: "TELL ME MORE",
        type: "Créer, personnaliser et répondre à des questionnaires",
        description: "Application web fullstack créée pour la certification du bootcamp",
        tech: "React, Node/Express, MongoDB",
      },
      portfolio: {
        title: "Mon Portfolio",
        type: "Design inspiré de Welcome to the Jungle",
        description: "Intégration frontend, animations CSS, design UX/UI",
        tech: "HTML5, CSS3, JS, GSAP",
      },
      next_project: {
        title: "À suivre...",
        subtitle: "Vous avez un projet ?",
        button: "Contactez-moi",
      },
    },
    contact: {
      title: "Contact",
      message: "Laissez-moi un message !",
    },
    footer: {
      made_by: "Fait avec ❤️ par Pops",
    },
  },
  en: {
    nav: {
      about: "About Me",
      education: "Education",
      skills: "Skills",
      work: "Work",
      resume: "My interactive resume",
      contact: "Contact me",
    },
    hero: {
      title: "Hi, I'm Pauline,<br />I'm a fullstack developer.<br />I love creating new things and learning every day!",
      discover_journey: "Discover my journey",
      check_toolbox: "Check out my toolbox",
      discover_projects: "Discover my projects",
    },
    journey: {
      title: "My Career Journey",
      solving: {
        title: "Internship at Solving Company",
        description: "Designed and developed an MVP for a medical device web application.",
        list: [
          "Fullstack project: React, Flask, PostgreSQL",
          "Clean architecture and secure authentication",
          "Multiple user types and dashboards",
          "CRUD backend, bug resolution, and integration of 2 external APIs",
          "ReactFlow interface for medical family trees",
          "Daily use of Cursor AI to improve productivity",
        ],
      },
      freelance: {
        title: "Freelancing in a web agency",
        description: "CRM redesign project for a law firm.",
        list: [
          "Frontend development from provided mockups",
          "Authentication forms and user management",
          "Multi-page development and routing",
          "API integration and backend connectivity",
          "Responsive design and UX optimization",
          "2-month intensive development mission",
        ],
      },
      alt: {
        title: "Tech Incubator",
        description: "Joined &lt; ALT /> to develop my skills in a professional environment.",
        list: [
          "React, NestJS, clean code practices",
          "Database optimization and system architecture",
          "Microservices development",
          "Fullstack SPA creation for volunteer management",
          "5-developer team using Kanban methodology",
          "GitLab CI/CD implementation",
        ],
      },
      reacteur: {
        title: "Le Reacteur",
        description: "Career change bootcamp - intensive coding training program.",
        list: [
          "Front-end and back-end development",
          "Web and Mobile development",
          "MERN stack (React, Node, Express, MongoDB)",
          "Daily Git/GitHub usage",
          "Agile methodology for team projects",
        ],
      },
      self_taught: {
        title: "Self-taught education",
        description: "During parental leave, I invested in continuous learning through online platforms:",
        list: [
          "Dyma: Linux, Git, and Docker certifications",
          "TheArenaProject: Shell, File System, Algorithms, and Data Structures",
          "'The Web School': Javascript, React, Vue, Tailwind",
          "NextReact: Typescript, Next.JS, tests",
        ],
        additional:
          "Also followed free courses from 'FreeCodeCamp' and 'OpenClassRoom' and participated in tech communities projects like 'Pinqo' and 'GuildOpenTech'.",
      },
      vet: {
        title: "Professional experiences",
        description: "10 years as a small animal veterinarian in various clinics.",
        list: [
          "Solid problem-solving skills",
          "Complex knowledge communication",
          "Daily client/team collaboration",
          "Adaptable and autonomous professional",
          "Resistant to stress in difficult situations",
        ],
      },
      academic: {
        title: "Academic Background",
        list: [
          "Veterinary Doctorate (2012)<br />Toulouse National Veterinary School",
          "Preparatory Biology Class (BCPST)<br />Fermat High School - Toulouse",
          "Scientific Baccalaureate<br />Théophile Gautier High School - Tarbes",
        ],
      },
    },
    skills: {
      title: "My Tech Stack",
    },
    projects: {
      title: "My Projects",
      all_projects: "All projects",
      note: "Most of my projects are hosted on free platforms. Please let me know if any links are broken.",
      front: "Front",
      back: "Back",
      screenshots: "Screenshots",
      swagger: "Swagger API doc",
      private: "Private (Demo on request)",
      link: "Link",
      solving: {
        title: "Solving Company",
        type: "Medical application for oncology centers",
        description:
          "Fullstack development: autonomously developed frontend, added backend functionalities after learning Python and Flask. Created family trees and genograms interface",
        tech: "React, ReactFlow, Python, Flask, PostgreSQL",
      },
      marketplace: {
        title: "MarketPlace",
        type: "Local products marketplace",
        description: "Volunteer project to practice within the Pinqo tech community. Design, dockerization and backend CRUD for product categories",
        tech: "Java, Spring Boot, JPA, PostgreSQL, JUnit, Docker",
      },
      managevent: {
        title: "ManagEvent",
        type: "Events management app for associations",
        description:
          "Created from scratch in a team of 5 developers. Learned microservices comunication with Nats message broker. CI/CD, Docker, deployment on OVH server and AWS",
        tech: "React, Nest, Prisma, PostgreSQL",
      },
      actioneo: {
        title: "Actioneo",
        type: "CRM redesign project for a law firm",
        description: "Frontend development : worked on configuration and client files pages, implemented complex forms. Cache management",
        tech: "React, Tailwind, MUI, TanStackQuery, Zod",
      },
      marvel: {
        title: "Marvel API",
        type: "Website displaying your favorite comics and characters",
        description: "Character and comic display, search bar, pagination, favorite saving, external API",
        tech: "React, Node/Express",
      },
      vinted: {
        title: "VINTED CLONE",
        type: "A clone of the famous e-commerce site",
        description: "Frontend integration, authentication, search bar, article sale, shopping cart system, payment processing",
        tech: "React, Node/Express, API CRUD, Stripe",
      },
      tellmemore: {
        title: "TELL ME MORE",
        type: "Create, customize, and respond to questionnaires",
        description: "Web fullstack application created for the bootcamp certification",
        tech: "React, Node/Express, MongoDB",
      },
      portfolio: {
        title: "My Portfolio",
        type: "Design inspired by Welcome to the Jungle",
        description: "Frontend integration, CSS animations, UX/UI design",
        tech: "HTML5, CSS3, JS, GSAP",
      },
      next_project: {
        title: "To be continued...",
        subtitle: "What's your next project?",
        button: "Contact me",
      },
    },
    contact: {
      title: "Contact",
      message: "Leave me a message!",
    },
    footer: {
      made_by: "Made with ❤️ by Pops",
    },
  },
};

// Langue actuelle (par défaut: anglais)
let currentLang = "en";

// Fonction pour changer la langue
function changeLanguage(lang) {
  currentLang = lang;

  // Mettre à jour l'affichage des drapeaux
  const languageSwitches = document.querySelectorAll(".language-switch");
  languageSwitches.forEach((switchEl) => {
    switchEl.setAttribute("data-lang", lang);
  });

  // Traduire tous les éléments avec data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const keys = key.split(".");
    let translation = translations[lang];

    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        translation = key; // Fallback
        break;
      }
    }

    if (typeof translation === "string") {
      // Pour les boutons avec icônes, préserver l'icône
      if (element.classList.contains("screenshots-btn") || (element.tagName === "A" && element.querySelector("i"))) {
        const icon = element.querySelector("i");
        if (icon) {
          element.innerHTML = icon.outerHTML + " " + translation;
        } else {
          element.innerHTML = translation;
        }
      } else if (element.tagName === "OPTION") {
        // Pour les options du select, ne changer que le texte
        element.textContent = translation;
      } else {
        element.innerHTML = translation;
      }
    } else if (Array.isArray(translation)) {
      // Gestion des listes
      const listItems = element.querySelectorAll("li");
      translation.forEach((item, index) => {
        if (listItems[index]) {
          listItems[index].innerHTML = item;
        }
      });
    }
  });

  // Sauvegarder la préférence
  localStorage.setItem("preferred-language", lang);
}

// Initialisation
document.addEventListener("DOMContentLoaded", function () {
  // Récupérer la langue préférée
  const savedLang = localStorage.getItem("preferred-language") || "en";
  changeLanguage(savedLang);

  // Écouteurs d'événements pour les boutons de langue
  const toggleBtns = document.querySelectorAll("#language-toggle-desktop, #language-toggle-mobile");
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const newLang = currentLang === "en" ? "fr" : "en";
      changeLanguage(newLang);
    });
  });

  // Gestion du select des projets
  const projectsSelect = document.getElementById("projects-select");
  if (projectsSelect) {
    projectsSelect.addEventListener("change", function () {
      const selectedValue = this.value;
      const projectCards = document.querySelectorAll(".project-card");

      // Retirer toutes les classes filtered et selected
      projectCards.forEach((card) => {
        card.classList.remove("filtered", "selected");
      });

      // Si "all" est sélectionné, afficher tous les projets
      if (selectedValue === "all") {
        projectCards.forEach((card) => {
          card.classList.add("selected");
        });
      } else {
        // Filtrer les projets
        projectCards.forEach((card) => {
          if (card.classList.contains(selectedValue + "-card")) {
            card.classList.add("selected");
          } else {
            card.classList.add("filtered");
          }
        });
      }
    });
  }
});
