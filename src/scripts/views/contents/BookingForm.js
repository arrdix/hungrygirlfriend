import API_ENDPOINT from '../../globals/APIEndpoint';
import FormHelper from '../../utils/FormHelper';
import LoadingHelper from '../../utils/LoadingHelper';
import '../components/form/FormOverlay';
import '../components/form/InputForm';
import '../components/form/SelectForm';
import '../components/form/TextareaForm';

const BookingForm = {
  render(restaurants) {
    this.renderFormOverlay({
      id: 'form-overlay',
      firstClass: 'form-overlay',
      secondClass: 'glass',
    });

    const inputName = FormHelper.renderInput({
      labelName: 'Name',
      inputType: 'text',
      inputName: 'name',
      inputClass: 'name',
      inputId: 'input-name',
      inputAriaLabel: 'input-name',
    });

    const inputDate = FormHelper.renderInput({
      labelName: 'Date',
      inputType: 'date',
      inputName: 'date',
      inputClass: 'date',
      inputId: 'input-date',
      inputAriaLabel: 'input-date',
    });

    const inputSubmit = FormHelper.renderInput({
      inputType: 'submit',
      inputName: 'submit',
      inputClass: 'submit',
      inputValue: 'Book Now',
    });

    const textareaForm = FormHelper.renderTextarea({
      labelName: 'Note',
      textareaName: 'note',
      textareaClass: 'note',
      textareaId: 'input-note',
      textareaAriaLabel: 'input-note',
    });

    const selectForm = FormHelper.renderSelect(restaurants);

    const inputs = [
      inputName,
      selectForm,
      inputDate,
      textareaForm,
      inputSubmit,
    ];

    inputs.forEach((input) => {
      const bookingForm = document.getElementById('booking-form');
      bookingForm.append(input);
    });

    document
      .getElementById('input-restaurant')
      .addEventListener('change', (event) => {
        this.renderRestaurantImage(restaurants, event.target.value);
      });

    LoadingHelper.deactivateLoading();
  },

  renderFormOverlay({ id, firstClass, secondClass }) {
    const formOverlay = document.createElement('form-overlay');
    formOverlay.classList.add(firstClass, secondClass);
    formOverlay.setAttribute('id', id);

    const bookingImageWrapper = document.getElementById(
      'booking-image-wrapper',
    );
    bookingImageWrapper.append(formOverlay);
  },

  renderRestaurantImage(restaurants, selectedRestaurant) {
    const filteredRestaurant = restaurants.filter(
      (restaurant) => restaurant.name === selectedRestaurant,
    );

    document.querySelectorAll('.booking-image').forEach((element) => {
      element.setAttribute(
        'src',
        API_ENDPOINT.IMAGE_LARGE(filteredRestaurant[0].pictureId),
      );
    });
  },
};

export default BookingForm;
