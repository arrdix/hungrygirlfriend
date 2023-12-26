import RestaurantSource from '../../data/RestaurantSource';
import LoadingHelper from '../../utils/LoadingHelper';
import '../components/RestaurantBox';

const Restaurant = {
  init() {
    LoadingHelper.activateLoading();
    this.getRestaurant();
  },

  async getRestaurant() {
    const restaurants = await RestaurantSource.restaurantList();
    this.findRecommendedRestaurant(restaurants);
    LoadingHelper.deactivateLoading();
  },

  async findRecommendedRestaurant(restaurants) {
    const recommendedRestaurant = [];
    let recommendedId = 0;

    restaurants.forEach((restaurant) => {
      const roundedRating = Math.floor(restaurant.rating / 0.5) * 0.5;

      if (this.isRecommended(recommendedRestaurant, roundedRating)) {
        recommendedRestaurant.push(restaurant.id);
        recommendedId++;
      }

      this.createRestaurantBox({
        restaurant,
        recommendedRestaurant,
        recommendedId,
      });
    });
  },

  createRestaurantBox({ restaurant, recommendedRestaurant, recommendedId }) {
    const roundedRating = Math.floor(restaurant.rating / 0.5) * 0.5;
    const restaurantBox = document.createElement('restaurant-box');

    restaurantBox.setAttribute('id', `${restaurant.id}`);
    restaurantBox.classList.add(
      'box',
      `${
        recommendedRestaurant.includes(restaurant.id)
          ? `big-box-${recommendedId}`
          : 'normal-box'
      }`,
    );
    restaurantBox.restaurant = {
      restaurant,
      recommendedRestaurant,
      roundedRating,
    };

    const boxWrapper = document.getElementById('box-wrapper');
    boxWrapper.appendChild(restaurantBox);
  },

  isRecommended(recommendedRestaurant, rating) {
    const maxRecommendedItem = 3;

    if (recommendedRestaurant.length < maxRecommendedItem) {
      if (rating > 4) return true;
    }

    return false;
  },
};

export default Restaurant;
