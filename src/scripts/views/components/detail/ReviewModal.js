class ReviewModal extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;

    this.render();
  }

  render() {
    this.innerHTML = `
      <form action="" class="review-form" id="review-form">
        <div class="form-head">
          <h1 class="form-title">
            ${this._restaurant.name}
          </h1>
        </div>
        <div class="form-body" id="form-body"></div>
        <div class="form-foot" id="form-foot">
          <button type="button" class="btn-cancel-review" id="btn-cancel">Cancel</button>
        </div>
      </form>
    `;
  }
}

customElements.define('review-modal', ReviewModal);
