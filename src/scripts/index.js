import 'regenerator-runtime'; /* for async await transpile */

import '../scss/styles.scss';
import App from './views/App';

window.addEventListener('DOMContentLoaded', () => {
  App.init();
});

window.addEventListener('hashchange', () => {
  App.init();
});
