import { openDB } from 'idb';
import CONFIG from '../globals/Config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const databasePromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keypath: 'id' });
  },
});

const FavoriteRestaurantIDB = {
  async getResturant(id) {
    return (await databasePromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurants() {
    return (await databasePromise).getAll(OBJECT_STORE_NAME);
  },

  async updateRestaurant(restaurant, id) {
    (await databasePromise).put(OBJECT_STORE_NAME, restaurant, id);
  },

  async deleteRestaurant(id) {
    return (await databasePromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIDB;
