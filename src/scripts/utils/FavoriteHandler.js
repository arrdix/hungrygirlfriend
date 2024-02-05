import FavoriteRestaurantIDB from '../data/FavoriteRestaurantIDB';
import RestaurantSource from '../data/RestaurantSource';
import { DatabaseUpdated } from './EventTools';

const FavoriteHandler = {
  init(restaurants) {
    this._restaurants = restaurants;
    this.initalize(this._restaurants);
    this.initialListener();
  },

  initalize(restaurants) {
    restaurants.forEach(async (restaurant) => {
      const btnFavorite = document.getElementById(restaurant.id);

      if (await this.isExist(restaurant.id)) {
        btnFavorite?.classList.add('favorited');
      } else {
        btnFavorite?.classList.remove('favorited');
      }
    });
  },

  initialListener() {
    document.querySelectorAll('.btn-fav').forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('favorited');

        const restaurantId = btn.id;
        this.updateDatabase(restaurantId);
      });
    });
  },

  async updateDatabase(restaurantId) {
    const restaurant = this.getRestaurant(restaurantId);

    if (await this.isExist(restaurant.id)) {
      this.deleteFavorite(restaurant.id);
    } else {
      this.addFavorite(restaurant);
    }
  },

  getRestaurant(restaurantId) {
    const restaurants = this._restaurants;
    const restaurantDetail = restaurants.find(
      (restaurant) => restaurant.id === restaurantId,
    );
    return {
      id: restaurantDetail.id,
      name: restaurantDetail.name,
      city: restaurantDetail.city,
      rating: restaurantDetail.rating,
      pictureId: restaurantDetail.pictureId,
    };
  },

  async isExist(id) {
    const restaurant = await FavoriteRestaurantIDB.getResturant(id);
    // return the actual boolean value
    return !!restaurant;
  },

  async deleteFavorite(id) {
    await FavoriteRestaurantIDB.deleteRestaurant(id);
    dispatchEvent(DatabaseUpdated);
  },

  async addFavorite(restaurant) {
    await FavoriteRestaurantIDB.updateRestaurant(restaurant, restaurant.id);
    dispatchEvent(DatabaseUpdated);
  },
};

export default FavoriteHandler;
