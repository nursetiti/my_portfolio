if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
  .then((reg) => console.log('service worker registered', reg))
  .catch((err) => console.log('Service worker not registered', err))
}