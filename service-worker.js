self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('evento-cache').then(cache => {
      return cache.addAll([
        'control_evento_pro.html'
      ]);
    })
  );
});
