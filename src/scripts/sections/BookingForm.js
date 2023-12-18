export const BookingForm = {
  init() {
    this.initialListener();
  },

  initialListener() {
    const btnBack = document.getElementById('btn-back');
    btnBack.addEventListener('click', () => {
      const heroOverlay = document.getElementById('hero-overlay');
      const formOverlay = document.getElementById('form-overlay');

      heroOverlay.classList.toggle('active');
      formOverlay.classList.toggle('active');
    });
  },
};
