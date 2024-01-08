class TextareaForm extends HTMLElement {
  set attributes({
    labelName,
    textareaName,
    textareaClass,
    textareaId,
    textareaAriaLabel,
  }) {
    this.labelName = labelName;
    this.textareaName = textareaName;
    this.textareaClass = textareaClass;
    this.textareaId = textareaId;
    this.textareaAriaLabel = textareaAriaLabel;

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="input-header">
        <label for="note">${this.labelName}</label>
        <p class="input-note-validation form-validation good d-none">
          Looks good!
        </p>
        <p class="input-note-validation form-validation bad d-none">
          Please provide note with more than 4 characters.
        </p>
      </div>
      <textarea
        name="${this.textareaName}"
        class="${this.textareaClass}"
        id="${this.textareaId}"
        aria-label="${this.textareaAriaLabel}"
      ></textarea>
    `;
  }
}

customElements.define('textarea-form', TextareaForm);
