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
      <h3 class="box-title">${this._restaurant.name} | ${
        this._restaurant.rating
      } <i class="star fa-solid fa-star"></i></h3>
      <button type="button" aria-label="show ${this._restaurant.name} detail">
        <i class="full-screen fa-solid fa-expand"></i>
      </button>
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
