import API_ENDPOINT from '../../globals/APIEndpoint';
import RestaurantHelper from '../../utils/RestaurantHelper';

class RestaurantBox extends HTMLElement {
  set restaurant({ restaurant, recommendedRestaurant, roundedRating }) {
    this._restaurant = restaurant;
    this._recommendedRestaurant = recommendedRestaurant || [];
    this._roundedRating = roundedRating;

    this.renderBox();
  }

  renderBox() {
    this.innerHTML = `
    <div class="action-overlay ${
      this._recommendedRestaurant.includes(this._restaurant.id) ? 'big' : ''
    }">
      <h3 class="box-title">${this._restaurant.name}</h3>
      <button type="button" class="btn-detail" aria-label="show ${
        this._restaurant.name
      } detail">
        <i class="icon-detail fa-solid fa-circle-info"></i>
      </button>
    </div>
    <div class="favorite-overlay">
      <button type="button" class="btn-favorite" id="${
        this._restaurant.id
      }" aria-label="add NAME to favorite">
        <i class="icon-favorite fa-solid fa-heart"></i>
      </button>
    </div>
    <div class="rating-overlay">
      <h4 class="rating">${
        this._restaurant.rating % 1 === 0
          ? `${this._restaurant.rating}.0`
          : this._restaurant.rating
      }</h4>
    </div>
    <button type="button" aria-label="show ${
      this._restaurant.name
    } detail" class="box-overlay ${
      this._recommendedRestaurant.includes(this._restaurant.id) ? 'big' : ''
    }">
      ${
        this._recommendedRestaurant.includes(this._restaurant.id)
          ? RestaurantHelper.renderTag()
          : ''
      }
      <h3 class="box-title">${this._restaurant.name}</h3>
      <h4 class="box-city">${this._restaurant.city}</h4>
      <div class="box-star-wrapper">
        ${RestaurantHelper.renderStars(this._roundedRating)}
      </div>
    </button>
    <img src="${API_ENDPOINT.IMAGE_LARGE(
      this._restaurant.pictureId,
    )}" class="restaurant-image">
    `;
  }
}

customElements.define('restaurant-box', RestaurantBox);
