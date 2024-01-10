import RestaurantSource from '../../data/RestaurantSource';
import API_ENDPOINT from '../../globals/APIEndpoint';
import urlParser from '../../routes/UrlParser';
import FavoriteHandler from '../../utils/FavoriteHandler';
import LoadingHelper from '../../utils/LoadingHelper';
import Banner from '../contents/Banner';
import RestaurantDetail from '../contents/RestaurantDetail';

const Detail = {
  renderSection() {
    return `
      <section class="banner-wrapper" id="banner"></section>
      <section class="about-wrapper" id="about"></section>
      <hr class="detail-line"></hr>
      <section class="menu-wrapper" id="menu"></section>
      <hr class="detail-line"></hr>
      <section class="review-wrapper" id="review"></section>
    `;
  },

  async renderContent() {
    LoadingHelper.activateLoading();

    const movieId = urlParser.getUrlId();
    const restaurant = await RestaurantSource.restaurantDetail(movieId);
    const restaurants = await RestaurantSource.restaurantList();

    Banner.render({
      title: restaurant.name,
      subtitle: `${restaurant.address} ${restaurant.city}`,
      image: API_ENDPOINT.IMAGE_LARGE(restaurant.pictureId),
      expandable: true,
    });

    RestaurantDetail.render(restaurant);
    FavoriteHandler.init(restaurants);
  },
};

export default Detail;
