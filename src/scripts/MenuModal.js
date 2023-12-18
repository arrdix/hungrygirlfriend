export const MenuModal = {
  init() {
    this.initialListener();
  },

  initialListener() {
    const btnMenu = document.getElementById('btn-menu');
    const menuModal = document.getElementById('menu-modal');
    const btnSmBook = document.getElementById('btn-sm-book');
    const heroOverlay = document.getElementById('hero-overlay');
    const formOverlay = document.getElementById('form-overlay');

    document.querySelectorAll('.menu-wrapper a').forEach((link) => {
      link.addEventListener('click', () => {
        menuModal.classList.toggle('active');
      });
    });

    btnMenu.addEventListener('click', () => {
      menuModal.classList.toggle('active');
    });

    btnSmBook.addEventListener('click', () => {
      menuModal.classList.toggle('active');
      heroOverlay.classList.toggle('active');
      formOverlay.classList.toggle('active');
    });

    setTimeout(() => {
      menuModal.classList.remove('d-none');
    }, 500);
  },
};
