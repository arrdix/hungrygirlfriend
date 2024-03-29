import RestaurantSource from '../../data/RestaurantSource';
import STATIC from '../../globals/Static';
import FormValidationInitiator from '../../utils/FormValidationInitiator';
import Banner from '../contents/Banner';
import BookingForm from '../contents/BookingForm';

const Booking = {
  renderSection() {
    return `
      <section class="banner-wrapper" id="banner"></section>
      <section class="booking-wrapper" id="booking">
      <div class="booking-image-wrapper relative" id="booking-image-wrapper">
        <img src="images/black.png" class="booking-image" alt="">
      </div>
      <div class="booking-image-wrapper">
        <img src="images/black.png" class="booking-image" alt="">
      </div>
      </section>
    `;
  },

  async renderContent() {
    Banner.render({
      title: STATIC.BANNER_BOOKING_TITLE,
      subtitle: STATIC.BANNER_BOOKING_SUBTITLE,
      image: STATIC.BANNER_BOOKING_IMAGE,
    });

    const restaurants = await RestaurantSource.restaurantList();
    BookingForm.render(restaurants);

    FormValidationInitiator.init({
      formName: 'booking-form',
      inputIds: ['input-name', 'input-date', 'input-restaurant', 'input-note'],
    });
  },
};

export default Booking;
