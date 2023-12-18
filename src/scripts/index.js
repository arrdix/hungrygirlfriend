import 'regenerator-runtime'; /* for async await transpile */

// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import { MenuModal } from './MenuModal';
import { BookingForm } from './BookingForm';
import { AppHeader } from './AppHeader';

window.addEventListener('DOMContentLoaded', () => {
  MenuModal.init();
  BookingForm.init();
  AppHeader.init();
});
