import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import CONFIG from './globals/Config';

precacheAndRoute(self.__WB_MANIFEST);

const restaurantApi = new Route(
  ({ url }) => url.href.startsWith(CONFIG.BASE_URL),
  new StaleWhileRevalidate({
    cacheName: 'resturant-api',
  }),
);

registerRoute(restaurantApi);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed!');
  self.skipWaiting();
});
