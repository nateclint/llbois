import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Q-b1cXgDoMM9_eL858VgPRykb9B6DYc",
  authDomain: "llbois.firebaseapp.com",
  projectId: "llbois",
  storageBucket: "llbois.appspot.com",
  messagingSenderId: "196299811209",
  appId: "1:196299811209:web:bc065804bcab2628fdd958"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth();


export {
  db,
  auth
}