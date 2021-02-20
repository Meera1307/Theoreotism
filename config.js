import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBod9WL9BreggQ2wRP4CbtHiJ0RyhGV3jA",
    authDomain: "theoreotism.firebaseapp.com",
    projectId: "theoreotism",
    storageBucket: "theoreotism.appspot.com",
    messagingSenderId: "823702010027",
    appId: "1:823702010027:web:bc96091d3aa86875a1dfee",
    measurementId: "G-8FHC7TN9H8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default (firebase.firestore)