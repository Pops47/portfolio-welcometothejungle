gsap.registerPlugin(ScrollTrigger);

// Animations améliorées pour la timeline
gsap.to(".b1", {
  scrollTrigger: {
    trigger: ".b1",
    start: "bottom bottom",
    end: "top top",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  duration: 0.8,
  ease: "power2.out",
  y: 0,
  scale: 1,
});

gsap.to(".b2", {
  scrollTrigger: {
    trigger: ".b2",
    start: "50% bottom",
    end: "top top",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  duration: 0.8,
  ease: "power2.out",
  y: 0,
  scale: 1,
});

gsap.to(".b3", {
  scrollTrigger: {
    trigger: ".b3",
    start: "50% bottom",
    end: "top top",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  duration: 0.8,
  ease: "power2.out",
  y: 0,
  scale: 1,
});

gsap.to(".b4", {
  scrollTrigger: {
    trigger: ".b4",
    start: "50% bottom",
    end: "top top",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  duration: 0.8,
  ease: "power2.out",
  y: 0,
  scale: 1,
});

gsap.to(".b5", {
  scrollTrigger: {
    trigger: ".b5",
    start: "50% bottom",
    end: "top top",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  duration: 0.8,
  ease: "power2.out",
  y: 0,
  scale: 1,
});

gsap.to(".b6", {
  scrollTrigger: {
    trigger: ".b6",
    start: "50% bottom",
    end: "top top",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  duration: 0.8,
  ease: "power2.out",
  y: 0,
  scale: 1,
});

gsap.to(".b7", {
  scrollTrigger: {
    trigger: ".b7",
    start: "50% bottom",
    end: "top top",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  duration: 0.8,
  ease: "power2.out",
  y: 0,
  scale: 1,
});

// Animation initiale des boîtes
gsap.set([".b1", ".b2", ".b3", ".b4", ".b5", ".b6", ".b7"], {
  opacity: 0,
  y: 20,
  scale: 0.98,
});

// Animation des points de la timeline
gsap.to(".point", {
  scrollTrigger: {
    trigger: ".journey-block",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
  scale: 1.1,
  duration: 0.5,
  ease: "power2.out",
});

// Animation des compétences
gsap.to(".skill-logo", {
  scrollTrigger: {
    trigger: ".skills-list",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  y: 0,
  duration: 0.5,
  stagger: 0.05,
  ease: "power2.out",
});

// Animation initiale des compétences
gsap.set(".skill-logo", {
  opacity: 0,
  y: 15,
});

// Animation des cartes de projets
gsap.to(".project-card", {
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  y: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "power2.out",
});

// Animation initiale des cartes de projets
gsap.set(".project-card", {
  opacity: 0,
  y: 20,
});

// Animation du titre principal
gsap.to(".hero-section-title h1", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
  y: -10,
  opacity: 0.9,
  duration: 0.8,
});

// Animation des boutons du hero
gsap.to(".hero-section-buttons .button", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
  y: -5,
  opacity: 0.95,
  duration: 0.8,
  stagger: 0.05,
});

// Animation du header au scroll
gsap.to("header", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "100px top",
    scrub: 1,
  },
  backgroundColor: "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(15px)",
  boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
});

// Animation des titres de sections
gsap.to("main h2", {
  scrollTrigger: {
    trigger: "main h2",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
});

// Animation initiale des titres
gsap.set("main h2", {
  opacity: 0,
  y: 15,
});

// Animation de la section contact
gsap.to(".contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
});

// Animation initiale de la section contact
gsap.set(".contact", {
  opacity: 0,
  y: 20,
});
