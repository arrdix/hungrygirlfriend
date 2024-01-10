class SkipToContent extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="" class="skip-to-content" aria-label="skip to content">
      Skip to Content
    </a>
    `;
  }
}

customElements.define('skip-to-content', SkipToContent);
