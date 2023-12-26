class HomeHero extends HTMLElement {
  set heroContent({ title, subTitle, tagline }) {
    this.title = title;
    this.subTitle = subTitle;
    this.tagline = tagline;

    this.renderHero();
  }

  renderHero() {
    this.innerHTML = `
      <img
      src="images/heros/hero-image_2.jpg"
      class="hero-image grayscale zoom active"
      alt="hero-image"
      />
      <div class="hero-overlay disposable" id="hero-overlay">
        <div class="hero-title-wrapper">
          <h1 class="hero-subtitle">${this.subTitle}</h1>
          <h2 class="hero-title">${this.title}</h2>
          <h2 class="hero-tagline">
            ${this.tagline}
            <a href="#restaurant" aria-label="show restaurant">
              <i class="fa-solid fa-angle-down"></i>
            </a>
          </h2>
        </div>
      </div>
    `;
  }
}

customElements.define('home-hero', HomeHero);
