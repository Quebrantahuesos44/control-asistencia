self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('evento-cache').then(cache => {
      return cache.addAll([
        'index.html'
      ]);
    })
  );
});
