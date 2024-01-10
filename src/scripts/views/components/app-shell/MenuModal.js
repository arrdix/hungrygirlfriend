class MenuModal extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="menu-wrapper">
        <div class="book-sm-wrapper">
          <a href="#/booking"id="btn-sm-book">BOOK FOR ME</a>
        </div>
        <a href="#/home">HOME</a>
        <a href="#/favorite">FAVORITE</a>
        <div class="socials-items">
          <a
            href="https://www.linkedin.com/in/yudistiraardi/"
            aria-label="linkedin"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/arrdix/" aria-label="instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.github.com/arrdix/" aria-label="github">
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6281903864037"
            aria-label="whatsapp"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="mailto:mail.ardix@gmail.com" aria-label="email">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </nav>
    `;
  }
}

customElements.define('menu-modal', MenuModal);
