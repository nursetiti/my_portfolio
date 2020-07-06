const staticCacheName = 'site-dynamic-v3';
const assets =  [
    '/',
    '/index.html',
    '/asset/js/app.js',
    '/asset/js/bootstrap.min.js',
    '/asset/css/style.css',
    '/asset//css/w3css.css',
    '/asset/css/bootstrap.min.css',
    'asset/vendor/jquery/jquery.min.js',
    '/asset/js/portfolio.min.js',
    'asset/img/cake.png',
    'asset/img/calc.jpg',
    'asset/img/movify.png',
    'asset/img/hair.png',
    'asset/img/work.png',
    'asset/img/google.png',
    'asset/img/nosis.jpg',
    'asset/img/bg-signup.jpg',
    './asset/vendor/fontawesome-free/css/all.min.css',
    './asset/vendor/fontawesome-free/css/all.css',
    'https://fonts.googleapis.com/css?family=Gabriela',
    'https://fonts.googleapis.com/css?family=Cinzel+Decorative',
];
//install service worker
self.addEventListener('install', evt =>{
    // console.log('service worker has been installed');
    evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
        console.log('caching shell assets');
        cache.addAll(assets);
    })
    );
});
//activate service worker
self.addEventListener('activate', evt => {
    // console.log('service worker has been activated');
});
// fetch events
self.addEventListener('fetch', evt =>{
    // console.log('fetch event', evt)
    evt.respondWith(
        cache.match(evt.request).then(cacheRes => {
            return cachRes || fetch(evt.request);
        })
    );
})
