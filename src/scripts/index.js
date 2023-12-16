import 'regenerator-runtime'; /* for async await transpile */

// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import { MenuModal } from './MenuModal';

window.addEventListener('DOMContentLoaded', () => {
  MenuModal.init();

  const heroOverlay = document.getElementById('hero-overlay');
  const formOverlay = document.getElementById('form-overlay');
  const btnBook = document.getElementById('btn-book');

  setTimeout(() => {
    formOverlay.classList.remove('d-none');
  }, 500);

  btnBook.addEventListener('click', () => {
    heroOverlay.classList.toggle('active');
    formOverlay.classList.toggle('active');
  });
});
