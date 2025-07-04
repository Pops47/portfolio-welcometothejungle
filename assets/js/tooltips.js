// Système de tooltips personnalisé
class TooltipManager {
  constructor() {
    this.tooltip = null;
    this.currentTarget = null;
    this.init();
  }

  init() {
    // Créer l'élément tooltip
    this.createTooltipElement();

    // Ajouter les événements aux éléments avec data-tooltip
    this.addEventListeners();
  }

  createTooltipElement() {
    this.tooltip = document.createElement("div");
    this.tooltip.className = "custom-tooltip";
    this.tooltip.style.cssText = `
      position: fixed;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      z-index: 10000;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease;
      font-family: 'Work Sans', sans-serif;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    `;
    document.body.appendChild(this.tooltip);
  }

  addEventListeners() {
    const tooltipElements = document.querySelectorAll("[data-tooltip]");

    tooltipElements.forEach((element) => {
      element.addEventListener("mouseenter", (e) => this.showTooltip(e));
      element.addEventListener("mouseleave", () => this.hideTooltip());
      element.addEventListener("mousemove", (e) => this.updateTooltipPosition(e));
    });
  }

  showTooltip(event) {
    const target = event.currentTarget;
    const tooltipText = target.getAttribute("data-tooltip");

    if (!tooltipText) return;

    this.currentTarget = target;
    this.tooltip.textContent = tooltipText;
    this.tooltip.style.visibility = "visible";
    this.tooltip.style.opacity = "1";

    this.updateTooltipPosition(event);
  }

  hideTooltip() {
    this.tooltip.style.opacity = "0";
    this.tooltip.style.visibility = "hidden";
    this.currentTarget = null;
  }

  updateTooltipPosition(event) {
    if (!this.currentTarget) return;

    const rect = this.currentTarget.getBoundingClientRect();
    const tooltipRect = this.tooltip.getBoundingClientRect();

    // Positionner le tooltip en dessous de l'élément
    let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
    let top = rect.bottom + 10;

    // Ajuster si le tooltip dépasse à gauche
    if (left < 10) {
      left = 10;
    }

    // Ajuster si le tooltip dépasse à droite
    if (left + tooltipRect.width > window.innerWidth - 10) {
      left = window.innerWidth - tooltipRect.width - 10;
    }

    // Si le tooltip dépasse en bas, l'afficher au-dessus
    if (top + tooltipRect.height > window.innerHeight - 10) {
      top = rect.top - tooltipRect.height - 10;
    }

    this.tooltip.style.left = left + "px";
    this.tooltip.style.top = top + "px";
  }
}

// Initialiser le gestionnaire de tooltips quand le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
  new TooltipManager();
});
