export const FormValidation = {
  validate(inputField, { badValidation, goodValidation }) {
    if (this.isValid(inputField)) {
      this.renderGoodValidation(badValidation, goodValidation);
      return inputField.value;
    }

    this.renderBadValidation(badValidation, goodValidation);
  },

  isValid(inputField) {
    return (
      inputField.value.length >= 4 && inputField.value !== '' && inputField.value !== 'default'
    );
  },

  renderBadValidation(badValidation, goodValidation) {
    badValidation.classList.remove('d-none');
    goodValidation.classList.add('d-none');
  },

  renderGoodValidation(badValidation, goodValidation) {
    badValidation.classList.add('d-none');
    goodValidation.classList.remove('d-none');
  },
};
