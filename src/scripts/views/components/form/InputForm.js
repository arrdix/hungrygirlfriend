class InputForm extends HTMLElement {
  set attributes({
    labelName,
    inputType,
    inputName,
    inputClass,
    inputId,
    inputValue,
    inputAriaLabel,
  }) {
    this.labelName = labelName || '';
    this.inputType = inputType || '';
    this.inputName = inputName || '';
    this.inputClass = inputClass || '';
    this.inputId = inputId || '';
    this.inputValue = inputValue || '';
    this.inputAriaLabel = inputAriaLabel || '';

    if (this.inputType === 'submit') {
      this.renderSubmit();
    } else {
      this.renderInput();
    }
  }

  renderInput() {
    this.innerHTML = `
    <div class="input-header">
      <label for="${this.inputName}">${this.labelName}</label>
      <p class="input-${this.inputName}-validation form-validation good d-none">
        Looks good!
      </p>
      <p class="input-${this.inputName}-validation form-validation bad d-none">
        Please provide name with more than 4 characters
      </p>
    </div>
    <input
      type="${this.inputType}"
      name="${this.inputName}"
      class="${this.inputClass}"
      id="${this.inputId}"
      ${this.inputName === 'name' ? 'placeholder="John Doe"' : ''}
      aria-label="${this.inputAriaLabel}"
    />
    `;
  }

  renderSubmit() {
    this.innerHTML = `
      <input
        type="${this.inputType}"
        name="${this.inputName}"
        class="${this.inputClass}"
        value="${this.inputValue}"
      />
    `;
  }
}

customElements.define('input-form', InputForm);
