const MenuModal = {
  init() {
    this.initialListener();
  },

  initialListener() {
    document.querySelectorAll('.menu-wrapper a').forEach((link) => {
      link.addEventListener('click', () => {
        disposeMenuModal();
      });
    });

    document.getElementById('btn-menu').addEventListener('click', () => {
      disposeMenuModal();
    });

    document.getElementById('btn-sm-book').addEventListener('click', () => {
      const menuModal = document.getElementById('menu-modal');
      const heroOverlay = document.getElementById('hero-overlay');
      const formOverlay = document.getElementById('form-overlay');

      menuModal.classList.toggle('active');
      heroOverlay.classList.toggle('active');
      formOverlay.classList.toggle('active');
    });

    function disposeMenuModal() {
      const menuModal = document.getElementById('menu-modal');
      menuModal.classList.toggle('active');
    }
  },
};

export default MenuModal;
