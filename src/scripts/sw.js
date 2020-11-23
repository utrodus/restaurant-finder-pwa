/* eslint-disable no-restricted-globals */
import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing/registerRoute';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core';

skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: 'cariresto-app',
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute(
  [
    ...self.__WB_MANIFEST,
    {
      url:
        'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Work+Sans:wght@400;500;600;700&display=swap',
      revision: 1,
    },
    {
      url: 'https://cdn.lineicons.com/2.0/LineIcons.css',
      revision: 1,
    },
  ],
  {
    ignoreURLParametersMatching: [/.*/],
  },
);

registerRoute(
  new RegExp('https://restaurant-api.dicoding.dev/'),
  new StaleWhileRevalidate({
    cacheName: 'cache-api',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
      }),
    ],
  }),
);
registerRoute(
  new RegExp('https://cdn.lineicons.com/'),
  new StaleWhileRevalidate({
    cacheName: 'cache-lineicons',
  }),
);

registerRoute(new RegExp('https://fonts.gstatic.com/'), new StaleWhileRevalidate({
  cacheName: 'cache-googlefont',
}));
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

cleanupOutdatedCaches();
