class FormOverlay extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="form-title-wrapper">
      <h1 class="form-title">BOOK RESTAURANT</h1>
    </div>
    <form action="" class="form-wrapper" id="booking-form">
    
    </form>
    `;
  }
}

customElements.define('form-overlay', FormOverlay);
