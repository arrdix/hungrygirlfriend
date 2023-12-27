import RestaurantSource from '../../data/RestaurantSource';
import TEXTS from '../../globals/Texts';
import LoadingHelper from '../../utils/LoadingHelper';
import BookingForm from '../contents/BookingForm';
import Hero from '../contents/Hero';
import Restaurant from '../contents/Restaurant';

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

    // BookingForm.init();
  },
};

export default Home;
