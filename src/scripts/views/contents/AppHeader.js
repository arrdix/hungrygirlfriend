const AppHeader = {
  init() {
    this.initialListener();
  },

  initialListener() {
    document.querySelectorAll('.btn-dropdown').forEach((btnDropdown) => {
      btnDropdown.addEventListener('click', () => {
        const navDropdown = document.getElementById('nav-dropdown');
        navDropdown.classList.toggle('show');
      });
    });
  },
};

export default AppHeader;
