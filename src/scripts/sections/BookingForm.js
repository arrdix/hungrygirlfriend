export const BookingForm = {
  init() {
    this.initialListener();
  },

  initialListener() {
    document.getElementById('btn-back').addEventListener('click', () => {
      const heroOverlay = document.getElementById('hero-overlay');
      const formOverlay = document.getElementById('form-overlay');

      heroOverlay.classList.toggle('active');
      formOverlay.classList.toggle('active');
    });

    document.getElementById('booking-form').addEventListener('submit', (event) => {
      event.preventDefault();

      const inputName = document.getElementById('input-name');
      const inputDate = document.getElementById('input-date');
      const inputRestaurant = document.getElementById('input-restaurant');
      const inputNote = document.getElementById('input-note');

      if (
        inputName.value.length <= 4 ||
        inputDate.value == '' ||
        inputRestaurant.value === 'default' ||
        inputNote.value.length <= 4
      ) {
        this.formValidation();
      } else {
        console.log(inputName.value);
        console.log(inputDate.value);
        console.log(inputRestaurant.value);
        console.log(inputNote.value);

        window.alert('Booking restaurant success!');
        document.getElementById('btn-back').click();
      }
    });
  },

  formValidation() {
    const inputName = document.getElementById('input-name');
    const inputDate = document.getElementById('input-date');
    const inputRestaurant = document.getElementById('input-restaurant');
    const inputNote = document.getElementById('input-note');

    function checkOnUserSubmit(input, inputClass) {
      const goodNameValidation = document.querySelector(`.${inputClass}-validation.good`);
      const badNameValidation = document.querySelector(`.${inputClass}-validation.bad`);

      if (input.value.length <= 4 || input.value == '' || input.value === 'default') {
        badNameValidation.classList.remove('d-none');
        goodNameValidation.classList.add('d-none');
      } else {
        badNameValidation.classList.add('d-none');
        goodNameValidation.classList.remove('d-none');
      }
    }

    function checkOnUserInput(input, inputClass) {
      input.addEventListener('input', () => {
        const goodNameValidation = document.querySelector(`.${inputClass}-validation.good`);
        const badNameValidation = document.querySelector(`.${inputClass}-validation.bad`);

        if (input.value.length <= 4) {
          badNameValidation.classList.remove('d-none');
          goodNameValidation.classList.add('d-none');
        } else {
          badNameValidation.classList.add('d-none');
          goodNameValidation.classList.remove('d-none');
        }
      });
    }

    checkOnUserSubmit(inputName, 'name');
    checkOnUserInput(inputName, 'name');
    checkOnUserSubmit(inputDate, 'date');
    checkOnUserInput(inputDate, 'date');
    checkOnUserSubmit(inputRestaurant, 'restaurant');
    checkOnUserInput(inputRestaurant, 'restaurant');
    checkOnUserSubmit(inputNote, 'note');
    checkOnUserInput(inputNote, 'note');
  },
};
