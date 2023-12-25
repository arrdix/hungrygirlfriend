import RestaurantSource from '../data/restaurant-source';
import API_ENDPOINT from '../globals/api-endpoint';

const Restaurant = {
  init() {
    this.renderBox();
  },

  async renderBox() {
    const restaurants = await RestaurantSource.restaurantList();
    const recommendedRestaurant = [];
    let recommendedId = 1;
    let boxId = 1;

    restaurants.forEach((restaurant) => {
      const roundedRating = Math.floor(restaurant.rating / 0.5) * 0.5;
      const boxElement = document.createElement('div');

      if (this.isRecommended(recommendedRestaurant, roundedRating)) {
        recommendedRestaurant.push(restaurant.id);
      }

      boxElement.setAttribute('id', `${restaurant.id}`);
      boxElement.classList.add(
        'box',
        `${
          recommendedRestaurant.includes(restaurant.id)
            ? `big-box-${recommendedId++}`
            : `box-${boxId++}`
        }`,
      );
      boxElement.innerHTML = `
        <div class="action-overlay ${
          recommendedRestaurant.includes(restaurant.id) ? 'big' : ''
        }">
          <h3 class="box-title">${restaurant.name} | ${
            restaurant.rating
          } <i class="star fa-solid fa-star"></i></h3>
          <button type="button" aria-label="show ${restaurant.name} detail">
            <i class="full-screen fa-solid fa-expand"></i>
          </button>
        </div>
        <button type="button" aria-label="show ${
          restaurant.name
        } detail" class="box-overlay ${
          recommendedRestaurant.includes(restaurant.id) ? 'big' : ''
        }">
          ${
            recommendedRestaurant.includes(restaurant.id)
              ? this.renderTag()
              : ''
          }
          <h3 class="box-title">${restaurant.name}</h3>
          <h4 class="box-city">${restaurant.city}</h4>
          <div class="box-star-wrapper">
            ${this.renderStars(roundedRating)}
          </div>
        </button>
        <img src="${API_ENDPOINT.IMAGE_LARGE(
          restaurant.pictureId,
        )}" class="restaurant-image" alt="${restaurant.name}">
      `;

      const boxWrapper = document.getElementById('box-wrapper');
      boxWrapper.appendChild(boxElement);
    });
  },

  isRecommended(recommendedRestaurant, rating) {
    const maxRecommendedItem = 3;

    if (recommendedRestaurant.length < maxRecommendedItem) {
      if (rating > 4) return true;
    }

    return false;
  },

  renderStars(roundedRating) {
    const stars = [];
    for (let i = 1; i <= roundedRating; i++) {
      stars.push('<i class="fa-solid fa-star"></i>');
    }

    if (!(roundedRating % 1 === 0))
      stars.push('<i class="fa-solid fa-star-half-stroke"></i>');

    return stars.join('');
  },

  renderTag() {
    return `
    <div class="box-tag">
      <p>Recommended</p>
    </div>
    `;
  },
};

export default Restaurant;
