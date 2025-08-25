importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
// // Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
  apiKey: "AIzaSyC65v-Tomb_C9S0HY0X8aSkUKVzE5olYyI",
  authDomain: "bdmarket-726ff.firebaseapp.com",
  projectId: "bdmarket-726ff",
  storageBucket: "bdmarket-726ff.firebasestorage.app",
  messagingSenderId: "432405771305",
  appId: "1:432405771305:web:f935930aad4a70debe5838",
  measurementId: "G-YXCLB4VZ40"
};

// Initialize Firebase

firebase?.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
    console.log('Hello world from the Service Worker :call_me_hand:');
});
