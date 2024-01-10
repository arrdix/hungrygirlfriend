class AppBanner extends HTMLElement {
  set content({ title, subtitle, image, expandable }) {
    this.title = title;
    this.subtitle = subtitle;
    this.image = image;
    this.expandable = expandable;

    this.render();
  }

  render() {
    this.innerHTML = `
      <img src="${
        this.image
      }" class="banner-image fade-effect zoom active" id="banner-image" alt="">
      <div class="banner-overlay">
        <h1 class="banner-title">${this.title}</h1>
        <h2 class="banner-subtitle">${this.subtitle}</h2>
        ${this.expandable ? this.renderExpandButton() : ''}
      </div>
    `;
  }

  renderExpandButton() {
    return `
      <button class="btn-expand" id="btn-expand">
        <i class="fa-solid fa-expand"></i>
        Expand
      </button>
    `;
  }
}

customElements.define('app-banner', AppBanner);
