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

  renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push('<i class="fa-solid fa-star"></i>');
    }

    if (!(rating % 1 === 0))
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

export default RestaurantHelper;
