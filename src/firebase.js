import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAf5DV4Jzsv_-QvE4szGfU34B8IzKI3aBc",
    authDomain: "instagram-clone-41042.firebaseapp.com",
    projectId: "instagram-clone-41042",
    storageBucket: "instagram-clone-41042.appspot.com",
    messagingSenderId: "790755573010",
    appId: "1:790755573010:web:f85f844d366ee5cc3b47cb",
    measurementId: "G-2M4F2N9PQS"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};