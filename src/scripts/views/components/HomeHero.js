class HomeHero extends HTMLElement {
  set content({ title, subtitle, tagline }) {
    this.title = title;
    this.subtitle = subtitle;
    this.tagline = tagline;

    this.renderHero();
  }

  renderHero() {
    this.innerHTML = `
      <picture>
        <source media="(max-width: 600px)" srcset="images/heros/hero-image_2-small.jpg" class="hero-image fade-effect zoom active" type="image/jpeg" alt="hero-image">
        <img src='images/heros/hero-image_2-large.jpg' class="hero-image fade-effect zoom active" alt="hero-image">
      </picture>
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
