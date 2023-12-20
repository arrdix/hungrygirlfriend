export const SmoothScrolling = {
  init() {
    this.initialListener();
  },

  initialListener() {
    document.querySelectorAll('.btn-restaurant').forEach((btnRestaurant) => {
      btnRestaurant.addEventListener('click', (event) => {
        event.preventDefault();
        this.initSmoothScrolling('restaurant');
      });
    });
  },

  initSmoothScrolling(target) {
    const targetPosition = document.getElementById(`${target}`).offsetTop;
    const headerHeight = document.getElementById('header').offsetHeight;
    const fixedTargetPosition = targetPosition - headerHeight;
    window.scrollTo({
      left: 0,
      top: fixedTargetPosition,
    });
  },
};
