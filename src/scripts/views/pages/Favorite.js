import FavoriteRestaurant from '../contents/FavoriteRestaurant';
import LoadingHelper from '../../utils/LoadingHelper';
import Banner from '../contents/Banner';
import FavoriteRestaurantIDB from '../../data/FavoriteRestaurantIDB';
import FavoriteHandler from '../../utils/FavoriteHandler';
import STATIC from '../../globals/Static';

const Favorite = {
  renderSection() {
    return `
      <section class="banner-wrapper" id="banner"></section>
      <section class="favorite-wrapper" id="favorite"></section>
    `;
  },

  renderContent() {
    LoadingHelper.activateLoading();

    Banner.render({
      title: STATIC.BANNER_FAVORITE_TITLE,
      subtitle: STATIC.BANNER_FAVORITE_SUBTITLE,
      image: STATIC.BANNER_FAVORITE_IMAGE,
    });

    this.prepareRenderFavorite();
  },

  prepareRenderFavorite() {
    window.addEventListener('DatabaseUpdated', () => {
      if (this.isOnFavoritePage()) {
        this.renderFavorites();
      }
    });

    this.renderFavorites();
  },

  isOnFavoritePage() {
    return window.location.hash === '#/favorite';
  },

  async renderFavorites() {
    const favoriteRestaurants = await FavoriteRestaurantIDB.getAllRestaurants();
    FavoriteRestaurant.render(favoriteRestaurants);
    FavoriteHandler.init(favoriteRestaurants);
  },
};

export default Favorite;
