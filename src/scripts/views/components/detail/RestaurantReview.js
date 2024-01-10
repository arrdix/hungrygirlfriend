class RestaurantReview extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;

    this.render();
  }

  render() {
    this.innerHTML = `
    <h1 class="review-title">WHAT PEOPLE THINKS ABOUT ${this._restaurant.name.toUpperCase()}</h1>
    <div class="review-box">
      <div class="box-wrapper start" id="box-wrapper">
        <div class="box-head">
          <img src="https://placehold.co/50x50/FFF/000000?text=A" class="box-image" id="box-image" alt="">
          <h2 class="box-name" id="box-name">ARDI</h2>
          <h3 class="box-date" id="box-date">13 Januari 2024</h3>
        </div>
        <p class="box-content" id="box-content">
          Tidak rekomendasi untuk pelajar!
        </p>
      </div>
      <h4 class="box-tag">${this._restaurant.name.toUpperCase()}</h4>
    </div>
    <div class="review-buttons">
      <button type="button" class="btn-add-review" id="btn-add-review">
        <i class="fa-solid fa-pen-to-square"></i>
        Write a review
      </button>
    </div>
    `;
  }
}

customElements.define('restaurant-review', RestaurantReview);
