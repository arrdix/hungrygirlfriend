import SmoothScrolling from '../../utils/SmoothScrolling';
import AppHeader from '../sections/AppHeader';
import BookingForm from '../sections/BookingForm';
import MenuModal from '../sections/MenuModal';
import Restaurant from '../sections/Restaurant';

const Home = {
  render() {
    window.alert('this is home');
    MenuModal.init();
    BookingForm.init();
    AppHeader.init();
    Restaurant.init();
    SmoothScrolling.init();
  },
};

export default Home;
