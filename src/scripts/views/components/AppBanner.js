class AppBanner extends HTMLElement {
  set content({ title, subtitle, image }) {
    this.title = title;
    this.subtitle = subtitle;
    this.image = image;

    this.render();
  }

  render() {
    this.innerHTML = `
      <img src="${this.image}" class="banner-image fade-effect zoom active" alt="">
      <div class="banner-overlay">
        <h1 class="banner-title">${this.title}</h1>
        <h2 class="banner-subtitle">${this.subtitle}</h2>
      </div>
    `;
  }
}

customElements.define('app-banner', AppBanner);
