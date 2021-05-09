import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZVETd-8u0MqLBEDK5oDLAfO8TKd5CKzs",
  authDomain: "zangg-group08.firebaseapp.com",
  projectId: "zangg-group08",
  storageBucket: "zangg-group08.appspot.com",
  messagingSenderId: "809557629865",
  appId: "1:809557629865:web:d0e90b030000beb21482b8",
  measurementId: "G-18YNTXMNWW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth();


export {
  db,
  auth
}