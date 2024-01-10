class FavoriteButton extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    console.log(this.restaurant);

    this.render();
  }

  render() {
    this.innerHTML = `
      <button class="btn-fav detail" id="${this._restaurant.id}" aria-label="add to favorite">
        <i class="fa-solid fa-heart"></i>
      </button>
    `;
  }
}

customElements.define('favorite-button', FavoriteButton);
