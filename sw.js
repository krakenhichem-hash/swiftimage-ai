self.addEventListener('install', e => {
e.waitUntil(
caches.open('swiftimage-v1').then(cache =>
cache.addAll(['/','/index.html'])
)
);
});
