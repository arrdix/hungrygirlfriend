class AppBanner extends HTMLElement {
  set content({ title, subtitle }) {
    this.title = title;
    this.subtitle = subtitle;

    this.render();
  }

  render() {
    this.innerHTML = `
      <img src="images/heros/hero-image_3.jpg" class="banner-image fade-effect zoom active" alt="">
      <div class="banner-overlay">
        <h1 class="banner-title">${this.title}</h1>
        <h2 class="banner-subtitle">${this.subtitle}</h2>
      </div>
    `;
  }
}

customElements.define('app-banner', AppBanner);
