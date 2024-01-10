import axios from 'axios';
import API_ENDPOINT from '../globals/APIEndpoint';

const RestaurantSource = {
  async restaurantList() {
    try {
      const response = await axios.get(API_ENDPOINT.LIST);
      return response.data.restaurants;
    } catch (error) {
      console.log(error.code, error.message);
      return window.alert(
        'Oops! Something went wrong while trying to get the restaurant list:',
      );
    }
  },

  async restaurantDetail(id) {
    try {
      const response = await axios.get(API_ENDPOINT.DETAIL(id));
      return response.data.restaurant;
    } catch (error) {
      console.log(error.code, error.message);
      return window.alert(
        'Oops! Something went wrong while trying to get the restaurant detail:',
      );
    }
  },

  async searchRestaurant(keyword) {
    // TODO: transform keyword into URL Encoded
    try {
      const response = await axios.get(API_ENDPOINT.SEARCH(keyword));
      return response.data.restaurants;
    } catch (error) {
      console.log(error.code, error.message);
      return window.alert(
        'Oops! Something went wrong while trying to search the restaurant',
      );
    }
  },

  async addReview(review) {
    try {
      const response = await axios.post(API_ENDPOINT.ADD_REVIEW, review, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.message;
    } catch (error) {
      console.log(error.code, error.message);
      return window.alert(
        'Oops! Something went wrong while trying to add new review',
      );
    }
  },
};

export default RestaurantSource;
