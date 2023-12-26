import 'regenerator-runtime'; /* for async await transpile */

import '../scss/styles.scss';
import App from './views/App';

const app = new App({
  header: document.getElementById('header'),
  footer: document.getElementById('footer'),
  menuModal: document.getElementById('menu-modal'),
  mainContent: document.getElementById('main-content'),
});

window.addEventListener('DOMContentLoaded', () => {
  app.render();
});

window.addEventListener('hashchange', () => {
  app.render();
});
