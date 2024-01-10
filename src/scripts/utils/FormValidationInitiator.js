import { FormReviewHasBeenSent } from './EventTools';
import FormValidater from './FormValidater';

const FormValidationInitiator = {
  init({ formName, inputIds = [] }) {
    this.initialListener({ formName, inputIds });
    this.formData = '';

    return this.formData;
  },

  initialListener({ formName, inputIds }) {
    document.getElementById(formName).addEventListener('submit', (event) => {
      event.preventDefault();
      this.validateOnUserSubmit(inputIds);
    });
  },

  validateOnUserSubmit(inputIds) {
    const inputFields = [...inputIds];
    const validatedInput = this.inputValidation(inputFields);

    if (validatedInput.length === inputFields.length) {
      window.alert('Form sent!');
      window.alert(validatedInput.join(' | '));

      // trigger FormReviewHasBeenSent event if it's review form
      if (validatedInput.length === 2) {
        this.triggerReviewEvent(validatedInput);
      }

      location.reload();
    }

    this.validateOnUserInput(inputFields);
  },

  triggerReviewEvent(inputDatas) {
    const data = {
      name: inputDatas[0],
      review: inputDatas[1],
    };

    dispatchEvent(FormReviewHasBeenSent(data));
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
