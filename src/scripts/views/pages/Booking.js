import RestaurantSource from '../../data/RestaurantSource';
import STATIC from '../../globals/Static';
import FormValidationInitiator from '../../utils/FormValidationInitiator';
import LoadingHelper from '../../utils/LoadingHelper';
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
    LoadingHelper.activateLoading();

    Banner.render({
      title: STATIC.BANNER_BOOKING_TITLE,
      sutitle: STATIC.BANNER_BOOKING_SUBTITLE,
      image: STATIC.BANNER_BOOKING_IMAGE,
    });

    const restaurants = await RestaurantSource.restaurantList();
    BookingForm.render(restaurants);
    FormValidationInitiator.init();
  },
};

export default Booking;
