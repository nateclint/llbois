import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKqxqp-NqSttlsddXVn6gKS0DC6nlgaRA",
  authDomain: "llbois-store.firebaseapp.com",
  databaseURL: "https://llbois-store-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "llbois-store",
  storageBucket: "llbois-store.appspot.com",
  messagingSenderId: "144830695031",
  appId: "1:144830695031:web:ead58d3926aa737ad6a872"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth();


export {
  db,
  auth
}