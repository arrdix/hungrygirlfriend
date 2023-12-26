const RestaurantHelper = {
  ratingRounder(rating) {
    // round down the rating to the nearest multiple of 0.5
    return Math.floor(rating / 0.5) * 0.5;
  },

  findRecommendedResturant(restaurants) {
    const recommendedRestaurant = [];

    restaurants.forEach((restaurant) => {
      const roundedRating = this.ratingRounder(restaurant.rating);

      if (this.isRecommended(recommendedRestaurant, roundedRating))
        recommendedRestaurant.push(restaurant.id);
    });

    return recommendedRestaurant;
  },

  isRecommended(recommendedRestaurant, rating) {
    const maxRecommendedItem = 3;

    if (recommendedRestaurant.length < maxRecommendedItem) {
      if (rating > 4) return true;
    }

    return false;
  },
};

export default RestaurantHelper;
