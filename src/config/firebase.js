import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyA3_GW1iJ5gkQ90gLkhhHH47AbDLQX3wbA",
    authDomain: "unsplash-clone-653ce.firebaseapp.com",
    databaseURL: "https://unsplash-clone-653ce.firebaseio.com",
    projectId: "unsplash-clone-653ce",
    storageBucket: "unsplash-clone-653ce.appspot.com",
    messagingSenderId: "540274900299",
    appId: "1:540274900299:web:5b6b1966a7290e9fb33cce",
    measurementId: "G-TVSM5HBBM1"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;