import RestaurantSource from '../../data/RestaurantSource';
import TEXTS from '../../globals/Static';
import LoadingHelper from '../../utils/LoadingHelper';
import Hero from '../contents/Hero';
import Restaurant from '../contents/Restaurant';
import FavoriteHandler from '../../utils/FavoriteHandler';

const Home = {
  renderSection() {
    return `
      <section class="hero-wrapper" id="hero"></section>
      <section class="restaurant-wrapper" id="restaurant">
        <div class="box-wrapper" id="box-wrapper"></div>
      </section>
    `;
  },

  async renderContent() {
    LoadingHelper.activateLoading();
    Hero.render({
      title: TEXTS.HERO_TITLE,
      subtitle: TEXTS.HERO_SUBTITLE,
      tagline: TEXTS.HERO_TAGLINE,
    });

    const restaurants = await RestaurantSource.restaurantList();
    Restaurant.render(restaurants);
    FavoriteHandler.init(restaurants);
  },
};

export default Home;
