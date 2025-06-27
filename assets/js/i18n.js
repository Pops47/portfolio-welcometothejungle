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
      },
      freelance: {
        title: "Freelancing dans une agence web",
        description: "Projet de refonte CRM pour un cabinet d'avocats.",
      },
      alt: {
        title: "Incubateur Tech",
        description: "Rejointe &lt; ALT /> pour développer mes compétences en environnement professionnel.",
      },
      reacteur: {
        title: "Le Reacteur",
        description: "Bootcamp de reconversion - formation intensive en programmation.",
      },
      self_taught: {
        title: "Formation autodidacte",
        description: "Pendant mon congé parental, j'ai investi dans l'apprentissage continu via des plateformes en ligne :",
      },
      vet: {
        title: "Expériences professionnelles",
        description: "10 ans en tant que vétérinaire pour petits animaux dans diverses cliniques.",
      },
      academic: {
        title: "Formation académique",
      },
    },
    skills: {
      title: "Ma Stack Technique",
    },
    projects: {
      title: "Mes projets",
      all_projects: "Tous les projets",
      note: "Tous mes projets sont hébergés sur des plateformes open-source ou gratuites. Merci de me signaler si des liens sont cassés.",
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
      },
      freelance: {
        title: "Freelancing in a web agency",
        description: "CRM redesign project for a law firm.",
      },
      alt: {
        title: "Tech Incubator",
        description: "Joined &lt; ALT /> to develop my skills in a professional environment.",
      },
      reacteur: {
        title: "Le Reacteur",
        description: "Career change bootcamp - intensive coding training program.",
      },
      self_taught: {
        title: "Self-taught education",
        description: "During parental leave, I invested in continuous learning through online platforms:",
      },
      vet: {
        title: "Professional experiences",
        description: "10 years as a small animal veterinarian in various clinics.",
      },
      academic: {
        title: "Academic Background",
      },
    },
    skills: {
      title: "My Tech Stack",
    },
    projects: {
      title: "Featured Projects",
      all_projects: "All projects",
      note: "All my projects are hosted on open-source or free platforms. Please let me know if any links are broken.",
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
      element.innerHTML = translation;
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
});
