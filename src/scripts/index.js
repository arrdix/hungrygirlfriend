import 'regenerator-runtime'; /* for async await transpile */

import '../scss/styles.scss';
import '../scripts/views/components/app-shell/AppFooter';
import '../scripts/views/components/app-shell/AppHeader';
import '../scripts/views/components/app-shell/MenuModal';
import '../scripts/views/components/app-shell/LoadingBlock';
import '../scripts/views/components/app-shell/SkipToContent';
import App from './views/App';
import ServiceWorkerTools from './utils/ServiceWorkerTools';
import LoadingHelper from './utils/LoadingHelper';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  header: document.getElementById('header'),
  footer: document.getElementById('footer'),
  menuModal: document.getElementById('menu-modal'),
  mainContent: document.getElementById('main-content'),
  loadingBlock: document.getElementById('loading'),
  skipToContent: document.getElementById('skip-to-content'),
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
