import 'regenerator-runtime'; /* for async await transpile */

// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import MenuModal from './sections/MenuModal';
import BookingForm from './sections/BookingForm';
import AppHeader from './sections/AppHeader';
import Restaurant from './sections/Restaurant';
import SmoothScrolling from './utils/SmoothScrolling';

window.addEventListener('DOMContentLoaded', () => {
  MenuModal.init();
  BookingForm.init();
  AppHeader.init();
  Restaurant.init();
  SmoothScrolling.init();
});
