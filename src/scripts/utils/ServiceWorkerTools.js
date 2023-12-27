import { Workbox } from 'workbox-window';

const ServiceWorkerTools = {
  async register() {
    if (!('serviceWorker' in navigator)) {
      console.log('Service Worker not supported in the browser!');
      return;
    }

    const workbox = new Workbox('./ServiceWorker.bundle.js');

    try {
      await workbox.register();
      console.log('Service worker registered!');
    } catch (error) {
      console.log('Failed to register service worker:', error);
    }
  },
};

export default ServiceWorkerTools;
