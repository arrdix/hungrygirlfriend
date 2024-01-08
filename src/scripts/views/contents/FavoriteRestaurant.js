import LoadingHelper from '../../utils/LoadingHelper';
import RestaurantHelper from '../../utils/RestaurantHelper';
import '../components/RestaurantBox';

const FavoriteRestaurant = {
  render(restaurants) {
    const favoriteWrapper = document.getElementById('favorite');

    if (favoriteWrapper) {
      if (this.isEmpty(restaurants)) {
        favoriteWrapper.innerHTML = this.renderEmptyMessage();
        LoadingHelper.deactivateLoading();
        return;
      }

      favoriteWrapper.innerHTML = '';
    }

    this.prepareRestaurant(restaurants);
  },

  isEmpty(restaurants) {
    return restaurants.length === 0;
  },

  renderEmptyMessage() {
    return '<h1 class="empty-message" id="empty-message">Um, you don\'t have any favorite restaurant yet.</h1>';
  },

  prepareRestaurant(restaurants) {
    restaurants.forEach((restaurant) => {
      this.createRestaurantBox(restaurant);
    });
    LoadingHelper.deactivateLoading();
  },

  createRestaurantBox(restaurant) {
    const roundedRating = RestaurantHelper.ratingRounder(restaurant.rating);
    const restaurantBox = document.createElement('restaurant-box');
    restaurantBox.classList.add('box');
    restaurantBox.restaurant = {
      restaurant,
      recommendedRestaurant: null,
      roundedRating,
    };

    const favoriteWrapper = document.getElementById('favorite');
    favoriteWrapper.append(restaurantBox);
  },
};

export default FavoriteRestaurant;
