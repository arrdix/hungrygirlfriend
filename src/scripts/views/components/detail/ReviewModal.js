class ReviewModal extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="form-container">
        <div class="form-head">
          <h1 class="form-title">
            ${this._restaurant.name}
          </h1>
        </div>
        <form action="" class="review-form" id="review-form"></form>
        <div class="form-foot" id="form-foot">
          <button type="button" class="btn-cancel-review" id="btn-cancel">Cancel</button>
        </div>
      </div>
    `;
  }
}

customElements.define('review-modal', ReviewModal);
