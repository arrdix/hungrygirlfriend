class AppFooter extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="footer-wrapper">
        <a href="/" class="footer-logo-wrapper">
          <img src="images/logo-white.png" class="footer-logo" alt="logo" />
        </a>
        <div class="footer-connect-wrapper">
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
        <div class="footer-nav-wrapper">
          <a href="#/home">HOME</a>
          <a href="#/favorite">FAVORITE</a>
          <a href="#/booking">BOOK</a>
          <button type="button" class="btn-dropdown">ABOUT</button>
        </div>
      </div>
      <div class="copyright-wrapper">
        <p>&copy; 2023 HUNGRYGIRLFRIEND | Made with ♥ by Yudistira Ardi</p>
      </div>
    `;
  }
}

customElements.define('app-footer', AppFooter);
