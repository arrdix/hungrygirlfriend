const SmoothScrolling = {
  initForAppShell() {
    document
      .querySelector('.skip-to-content')
      .addEventListener('click', (event) => {
        event.preventDefault();
        this.initSmoothScrolling('restaurant');
        document.querySelector('.box-1 .box-overlay').focus();
      });
  },

  initForContent() {
    document
      .getElementById('btn-restaurant')
      ?.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('haaaaaa');
        this.initSmoothScrolling('restaurant');
      });
  },

  initSmoothScrolling(target) {
    const targetPosition = document.getElementById(`${target}`).offsetTop;
    const headerHeight = document.getElementById('header-wrapper').offsetHeight;
    const fixedTargetPosition = targetPosition - headerHeight;
    window.scrollTo({
      left: 0,
      top: fixedTargetPosition,
    });
  },
};

export default SmoothScrolling;
