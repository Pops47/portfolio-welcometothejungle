// Carrousel de captures d'écran pour le projet Solving
class ScreenshotsCarousel {
  constructor({ modalId, trackId, prevBtnId, nextBtnId, indicatorsId, openBtnId, closeBtnId }) {
    this.currentSlide = 0;
    this.slides = [];
    this.indicators = [];
    this.isAnimating = false;
    this.modalId = modalId;
    this.trackId = trackId;
    this.prevBtnId = prevBtnId;
    this.nextBtnId = nextBtnId;
    this.indicatorsId = indicatorsId;
    this.openBtnId = openBtnId;
    this.closeBtnId = closeBtnId;
    this.init();
  }

  init() {
    // Éléments DOM
    this.modal = document.getElementById(this.modalId);
    this.track = document.getElementById(this.trackId);
    this.prevBtn = document.getElementById(this.prevBtnId);
    this.nextBtn = document.getElementById(this.nextBtnId);
    this.indicatorsContainer = document.getElementById(this.indicatorsId);
    this.openBtn = document.getElementById(this.openBtnId);
    this.closeBtn = document.getElementById(this.closeBtnId);
    this.slides = Array.from(this.track.querySelectorAll(".carousel-slide"));
    this.bindEvents();
    this.createIndicators();
    this.updateIndicators();
    this.setupKeyboardNavigation();
  }

  bindEvents() {
    this.openBtn.addEventListener("click", () => this.openModal());
    this.closeBtn.addEventListener("click", () => this.closeModal());
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());
    this.setupTouchNavigation();
  }

  createIndicators() {
    this.indicatorsContainer.innerHTML = "";
    this.indicators = [];
    this.slides.forEach((_, index) => {
      const indicator = document.createElement("button");
      indicator.className = "indicator";
      indicator.setAttribute("aria-label", `Aller à l'image ${index + 1}`);
      indicator.addEventListener("click", () => {
        this.goToSlide(index);
      });
      this.indicatorsContainer.appendChild(indicator);
      this.indicators.push(indicator);
    });
  }

  updateIndicators() {
    this.indicators.forEach((indicator, index) => {
      if (index === this.currentSlide) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  goToSlide(index) {
    if (this.isAnimating || index === this.currentSlide) return;
    this.isAnimating = true;
    this.currentSlide = index;
    const translateX = -index * 100;
    this.track.style.transform = `translateX(${translateX}%)`;
    this.updateIndicators();
    this.updateNavigationButtons();
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }

  prevSlide() {
    if (this.isAnimating) return;
    const newIndex = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
    this.goToSlide(newIndex);
  }

  nextSlide() {
    if (this.isAnimating) return;
    const newIndex = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
    this.goToSlide(newIndex);
  }

  updateNavigationButtons() {
    this.prevBtn.setAttribute("aria-label", `Image précédente (${this.currentSlide === 0 ? this.slides.length : this.currentSlide}/${this.slides.length})`);
    this.nextBtn.setAttribute(
      "aria-label",
      `Image suivante (${this.currentSlide === this.slides.length - 1 ? 1 : this.currentSlide + 2}/${this.slides.length})`
    );
  }

  setupKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      if (!this.modal.classList.contains("active")) return;
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          this.prevSlide();
          break;
        case "ArrowRight":
          e.preventDefault();
          this.nextSlide();
          break;
        case "Escape":
          e.preventDefault();
          this.closeModal();
          break;
      }
    });
  }

  setupTouchNavigation() {
    let startX = 0;
    let endX = 0;
    let isDragging = false;
    this.track.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
      },
      { passive: true }
    );
    this.track.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return;
        endX = e.touches[0].clientX;
      },
      { passive: true }
    );
    this.track.addEventListener(
      "touchend",
      (e) => {
        if (!isDragging) return;
        const diffX = startX - endX;
        const threshold = 50;
        if (Math.abs(diffX) > threshold) {
          if (diffX > 0) {
            this.nextSlide();
          } else {
            this.prevSlide();
          }
        }
        isDragging = false;
      },
      { passive: true }
    );
  }

  openModal() {
    this.modal.style.display = "block";
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      this.modal.classList.add("active");
    }, 10);
    this.closeBtn.focus();
  }

  closeModal() {
    this.modal.classList.remove("active");
    setTimeout(() => {
      this.modal.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
  }

  resize() {
    this.goToSlide(this.currentSlide);
  }
}

// Initialiser les deux carrousels quand le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
  new ScreenshotsCarousel({
    modalId: "screenshots-modal",
    trackId: "carousel-track",
    prevBtnId: "prev-btn",
    nextBtnId: "next-btn",
    indicatorsId: "carousel-indicators",
    openBtnId: "solving-screenshots-btn",
    closeBtnId: "close-screenshots-modal",
  });
  new ScreenshotsCarousel({
    modalId: "actioneo-screenshots-modal",
    trackId: "actioneo-carousel-track",
    prevBtnId: "actioneo-prev-btn",
    nextBtnId: "actioneo-next-btn",
    indicatorsId: "actioneo-carousel-indicators",
    openBtnId: "actioneo-screenshots-btn",
    closeBtnId: "close-actioneo-screenshots-modal",
  });
});

// Gérer le redimensionnement de la fenêtre pour les deux carrousels
window.addEventListener("resize", () => {
  // Optionnel : on pourrait stocker les instances si besoin
});
