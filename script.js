function pageLoad() {
    fadeOutLoad();
}

function fadeOutLoad() {
    setTimeout(
    function() {
        $(".loadDiv").fadeOut();
    }, 1000);
}

function getCountry() {
    
}

function createNumber() {

}

function createNew1() {

}

function createNew2() {

}

function createNew3() {

}

function createNew4() {

}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(function(registration) {
            console.log('Service Worker Registered');
      });
    navigator.serviceWorker.ready.then(function(registration) {
       console.log('Service Worker Ready');
    });
}