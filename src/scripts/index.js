import 'regenerator-runtime'; /* for async await transpile */

import '../scss/styles.scss';
import App from './views/App';
import ServiceWorkerTools from './utils/ServiceWorkerTools';
import LoadingHelper from './utils/LoadingHelper';

const app = new App({
  header: document.getElementById('header'),
  footer: document.getElementById('footer'),
  menuModal: document.getElementById('menu-modal'),
  mainContent: document.getElementById('main-content'),
});

window.addEventListener('DOMContentLoaded', () => {
  LoadingHelper.activateLoading();
});

window.addEventListener('load', () => {
  app.render();
  ServiceWorkerTools.register();
  LoadingHelper.deactivateLoading();
});

window.addEventListener('hashchange', () => {
  app.render();
});
