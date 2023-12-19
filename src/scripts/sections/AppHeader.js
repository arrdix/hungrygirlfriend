export const AppHeader = {
  init() {
    this.initialListener();
  },

  initialListener() {
    setTimeout(() => {
      const formOverlay = document.getElementById('form-overlay');
      formOverlay.classList.remove('d-none');
    }, 500);

    document.getElementById('btn-dropdown').addEventListener('click', () => {
      const navDropdown = document.getElementById('nav-dropdown');
      navDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.btn-book').forEach((btnBook) => {
      btnBook.addEventListener('click', () => {
        const heroOverlay = document.getElementById('hero-overlay');
        const formOverlay = document.getElementById('form-overlay');
        heroOverlay.classList.toggle('active');
        formOverlay.classList.toggle('active');

        window.location.href = '#home';
      });
    });
  },
};
