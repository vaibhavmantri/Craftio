import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdA_2s956EWxks2v-MQ5aFDckNfXujVj8",
    authDomain: "instagram-clone-fdd9f.firebaseapp.com",
    databaseURL: "https://instagram-clone-fdd9f.firebaseio.com",
    projectId: "instagram-clone-fdd9f",
    storageBucket: "instagram-clone-fdd9f.appspot.com",
    messagingSenderId: "968131712241",
    appId: "1:968131712241:web:14bbf4e80a68eb005f4550"
      
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage};