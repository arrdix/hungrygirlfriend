import BookingForm from '../sections/BookingForm';
import Restaurant from '../sections/Restaurant';

const Home = {
  renderSection() {
    window.alert('this is Home Page');

    return `
      <section class="hero-wrapper" id="home"></section>
      <section class="restaurant-wrapper" id="home"></section>
    `;
  },

  renderContent() {
    BookingForm.init();
    Restaurant.init();
  },
};

export default Home;
