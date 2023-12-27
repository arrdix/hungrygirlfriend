import RestaurantSource from '../../data/RestaurantSource';
import FavoriteRestaurant from '../contents/FavoriteRestaurant';
import LoadingHelper from '../../utils/LoadingHelper';
import Banner from '../contents/Banner';
import TEXTS from '../../globals/Texts';

const Favorite = {
  renderSection() {
    return `
      <section class="banner-wrapper" id="banner"></section>
      <section class="favorite-wrapper" id="favorite"></section>
    `;
  },

  async renderContent() {
    LoadingHelper.activateLoading();

    Banner.render({
      title: TEXTS.BANNER_FAVORITE_TITLE,
      subtitle: TEXTS.BANNER_FAVORITE_SUBTITLE,
    });

    const restaurants = await RestaurantSource.restaurantList();
    FavoriteRestaurant.render(restaurants);
  },
};

export default Favorite;
