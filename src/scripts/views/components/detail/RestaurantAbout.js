class RestaurantAbout extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="desc-title">ABOUT ${this._restaurant.name.toUpperCase()}</div>
      <div class="desc-content">${this._restaurant.description}</div>
    `;
  }
}

customElements.define('restaurant-about', RestaurantAbout);
