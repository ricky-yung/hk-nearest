if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/hk-nearest/sw.js', { scope: '/hk-nearest/' })})}