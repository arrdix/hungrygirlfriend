import FormValidater from './FormValidater';

const FormValidationInitiator = {
  init() {
    this.initialListener();
  },

  initialListener() {
    document
      .getElementById('booking-form')
      .addEventListener('submit', (event) => {
        event.preventDefault();
        this.validateOnUserSubmit();
      });
  },

  validateOnUserSubmit() {
    const inputFields = [
      'input-name',
      'input-date',
      'input-restaurant',
      'input-note',
    ];
    const validatedInput = this.inputValidation(inputFields);

    if (validatedInput.length === inputFields.length) {
      window.alert('Booking restaurant success!');
      window.alert(validatedInput.join(' | '));
    }

    this.validateOnUserInput(inputFields);
  },

  validateOnUserInput(inputFields) {
    inputFields.forEach((inputField) => {
      document
        .getElementById(inputField)
        .addEventListener('input', this.inputLiveValidation);
    });
  },

  inputValidation(inputFields) {
    return inputFields
      .map((inputField) =>
        FormValidater.validate(document.getElementById(inputField), {
          badValidation: document.querySelector(
            `.${inputField}-validation.bad`,
          ),
          goodValidation: document.querySelector(
            `.${inputField}-validation.good`,
          ),
        }),
      )
      .filter((inputValue) => inputValue !== undefined);
  },

  inputLiveValidation() {
    FormValidater.validate(document.getElementById(this.id), {
      badValidation: document.querySelector(`.${this.id}-validation.bad`),
      goodValidation: document.querySelector(`.${this.id}-validation.good`),
    });
  },
};

export default FormValidationInitiator;
