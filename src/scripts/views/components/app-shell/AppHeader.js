class AppHeader extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header-wrapper glass" id="header-wrapper">
        <div class="logo-wrapper">
          <a href="/">
            <img src="images/logo-white.png" class="header-logo" alt="logo" />
          </a>
        </div>
        <nav class="nav-wrapper">
          <a href="#/home" class="btn-home">HOME</a>
          <a href="#/favorite" class="btn-favorite">FAVORITE</a>
          <a href="#/booking" class="btn-md-book">BOOK</a>
          <button type="button" class="btn-dropdown" id="btn-dropdown">ABOUT</button>
        </nav>
        <div class="book-wrapper">
          <a href="#/booking" class="btn-book">Book for me</a>
        </div>
        <div class="bars-wrapper">
          <button type="button" id="btn-menu">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div class="nav-dropdown glass" id="nav-dropdown">
        <div class="dropdown-items" id="dropdown-items">
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
      </div>
    `;
  }
}

customElements.define('app-header', AppHeader);
