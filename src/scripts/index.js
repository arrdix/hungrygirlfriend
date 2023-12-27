import 'regenerator-runtime'; /* for async await transpile */

import '../scss/styles.scss';
import App from './views/App';
import ServiceWorkerTools from './utils/ServiceWorkerTools';

const app = new App({
  header: document.getElementById('header'),
  footer: document.getElementById('footer'),
  menuModal: document.getElementById('menu-modal'),
  mainContent: document.getElementById('main-content'),
});

window.addEventListener('load', () => {
  app.render();
  ServiceWorkerTools.register();
});

window.addEventListener('hashchange', () => {
  app.render();
});
