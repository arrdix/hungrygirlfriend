/* eslint-disable prefer-destructuring */
class RestaurantMenu extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="menu-title">MENU</div>
      <div class="menu-container">
        <div class="foods-wrapper">
          <div class="foods-title">FOODS</div>
          ${this.renderFoods()}
        </div>
        <i class="fa-solid fa-utensils food-icon"></i>
        <div class="drinks-wrapper">
          <div class="drinks-title">DRINKS</div>
          ${this.renderDrinks()}
        </div>
      </div>
    `;
  }

  renderFoods() {
    const foods = this._restaurant.menus.foods;

    return foods
      .map((food) => `<div class="food-item">${food.name}</div>`)
      .join('');
  }

  renderDrinks() {
    const drinks = this._restaurant.menus.drinks;

    return drinks
      .map((drink) => `<div class="food-item">${drink.name}</div>`)
      .join('');
  }
}

customElements.define('restaurant-menu', RestaurantMenu);
