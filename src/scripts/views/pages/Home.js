import RestaurantSource from '../../data/RestaurantSource';
import TEXTS from '../../globals/Static';
import Hero from '../contents/Hero';
import Restaurant from '../contents/Restaurant';
import FavoriteHandler from '../../utils/FavoriteHandler';
import SmoothScrolling from '../../utils/SmoothScrolling';

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
    Hero.render({
      title: TEXTS.HERO_TITLE,
      subtitle: TEXTS.HERO_SUBTITLE,
      tagline: TEXTS.HERO_TAGLINE,
    });

    const restaurants = await RestaurantSource.restaurantList();
    Restaurant.render(restaurants);
    FavoriteHandler.init(restaurants);

    SmoothScrolling.initForContent();
  },
};

export default Home;
