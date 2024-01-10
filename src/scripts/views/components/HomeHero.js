class HomeHero extends HTMLElement {
  set content({ title, subtitle, tagline }) {
    this.title = title;
    this.subtitle = subtitle;
    this.tagline = tagline;

    this.renderHero();
  }

  renderHero() {
    this.innerHTML = `
      <img
      src="images/heros/hero-image_2.jpg"
      class="hero-image fade-effect zoom active"
      alt="hero-image"
      />
      <div class="hero-overlay disposable" id="hero-overlay">
        <div class="hero-title-wrapper">
          <h1 class="hero-subtitle">${this.subtitle}</h1>
          <h2 class="hero-title">${this.title}</h2>
          <h2 class="hero-tagline">
            ${this.tagline}
            <a href="#restaurant" class="uptodown" aria-label="show restaurant" id="btn-restaurant">
              <i class="fa-solid fa-angle-down"></i>
            </a>
          </h2>
        </div>
      </div>
    `;
  }
}

customElements.define('home-hero', HomeHero);
