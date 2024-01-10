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

    function disposeMenuModal() {
      const menuModal = document.getElementById('menu-modal');
      menuModal.classList.toggle('active');
    }
  },
};

export default MenuModal;
