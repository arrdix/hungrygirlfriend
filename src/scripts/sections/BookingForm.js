import { DataSource } from '../data/dataSource';
import { FormValidation } from '../utils/FormValidation';

export const BookingForm = {
  init() {
    this.initialListener();
    this.populateRestaurant();
  },

  initialListener() {
    document.getElementById('btn-back').addEventListener('click', this.toggleFormDispose);
    document.getElementById('booking-form').addEventListener('submit', (event) => {
      event.preventDefault();
      this.validateOnUserSubmit();
    });
  },

  validateOnUserSubmit() {
    const inputFields = ['input-name', 'input-date', 'input-restaurant', 'input-note'];
    const validatedInput = this.inputValidation(inputFields);

    if (validatedInput.length === inputFields.length) {
      window.alert('Booking restaurant success!');
      window.alert(validatedInput.join(' | '));

      document.getElementById('btn-back').click();
    }

    this.validateOnUserInput(inputFields);
  },

  validateOnUserInput(inputFields) {
    inputFields.forEach((inputField) => {
      document.getElementById(inputField).addEventListener('input', this.inputLiveValidation);
    });
  },

  inputValidation(inputFields) {
    return inputFields
      .map((inputField) => {
        return FormValidation.validate(document.getElementById(inputField), {
          badValidation: document.querySelector(`.${inputField}-validation.bad`),
          goodValidation: document.querySelector(`.${inputField}-validation.good`),
        });
      })
      .filter((inputValue) => inputValue !== undefined);
  },

  inputLiveValidation() {
    FormValidation.validate(document.getElementById(this.id), {
      badValidation: document.querySelector(`.${this.id}-validation.bad`),
      goodValidation: document.querySelector(`.${this.id}-validation.good`),
    });
  },

  toggleFormDispose() {
    const heroOverlay = document.getElementById('hero-overlay');
    const formOverlay = document.getElementById('form-overlay');

    heroOverlay.classList.toggle('active');
    formOverlay.classList.toggle('active');
  },

  async populateRestaurant() {
    try {
      const response = await DataSource.getData();
      populateToDropdown(response.data.restaurants);
    } catch (error) {
      window.alert(error.message);
    }

    function populateToDropdown(restaurants) {
      restaurants.forEach((restaurant) => {
        const dropdownItem = document.createElement('option');
        dropdownItem.setAttribute('value', `${restaurant.name}`);
        dropdownItem.textContent = `${restaurant.name}`;

        const inputRestaurant = document.getElementById('input-restaurant');
        inputRestaurant.append(dropdownItem);
      });
    }
  },
};
