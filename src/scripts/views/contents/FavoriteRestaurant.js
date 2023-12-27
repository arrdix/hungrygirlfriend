import LoadingHelper from '../../utils/LoadingHelper';
import RestaurantHelper from '../../utils/RestaurantHelper';
import '../components/RestaurantBox';

const FavoriteRestaurant = {
  render(restaurants) {
    restaurants.forEach((restaurant) => {
      this.createResturantBox(restaurant);
    });
    LoadingHelper.deactivateLoading();
  },

  createResturantBox(restaurant) {
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
