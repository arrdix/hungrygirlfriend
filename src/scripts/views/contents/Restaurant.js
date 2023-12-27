import LoadingHelper from '../../utils/LoadingHelper';
import RestaurantHelper from '../../utils/RestaurantHelper';
import '../components/RestaurantBox';

const Restaurant = {
  render(restaurants) {
    let recommendedId = 0;
    const recommendedRestaurant =
      RestaurantHelper.findRecommendedResturant(restaurants);

    restaurants.forEach((restaurant) => {
      // increment recommendedId by 1 whenever the current restaurant is a
      // recommended restaurant for grid-area styling purpose
      if (recommendedRestaurant.includes(restaurant.id)) recommendedId++;

      this.createRestaurantBox({
        restaurant,
        recommendedRestaurant,
        recommendedId,
      });
    });

    LoadingHelper.deactivateLoading();
  },

  createRestaurantBox({ restaurant, recommendedRestaurant, recommendedId }) {
    const roundedRating = RestaurantHelper.ratingRounder(restaurant.rating);
    const restaurantBox = document.createElement('restaurant-box');

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
};

export default Restaurant;
