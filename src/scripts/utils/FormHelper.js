const FormHelper = {
  renderInput({
    labelName,
    inputType,
    inputName,
    inputClass,
    inputId,
    inputValue,
    inputAriaLabel,
  }) {
    const inputForm = document.createElement('input-form');
    inputForm.classList.add('input-wrapper');
    inputForm.attributes = {
      labelName,
      inputType,
      inputName,
      inputClass,
      inputId,
      inputValue,
      inputAriaLabel,
    };

    return inputForm;
  },

  renderSelect(restaurants) {
    const selectForm = document.createElement('select-form');
    selectForm.classList.add('input-wrapper');
    selectForm.attributes = restaurants;

    return selectForm;
  },

  renderTextarea({
    labelName,
    textareaName,
    textareaClass,
    textareaId,
    textareaAriaLabel,
  }) {
    const textareaForm = document.createElement('textarea-form');
    textareaForm.classList.add('input-wrapper');
    textareaForm.attributes = {
      labelName,
      textareaName,
      textareaClass,
      textareaId,
      textareaAriaLabel,
    };

    return textareaForm;
  },
};

export default FormHelper;
