class LoadingBlock extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="loading-block loading" id="loading-block">
    `;
  }
}

customElements.define('loading-block', LoadingBlock);
