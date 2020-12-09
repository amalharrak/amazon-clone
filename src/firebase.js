// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBitVPrwdJyJIcdB68SmFlTsOSOfoLiahc",
  authDomain: "clon-97460.firebaseapp.com",
  databaseURL: "https://clon-97460.firebaseio.com",
  projectId: "clon-97460",
  storageBucket: "clon-97460.appspot.com",
  messagingSenderId: "319383989331",
  appId: "1:319383989331:web:c8016c016c780200e66aa6",
  measurementId: "G-BS52RYG1YF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
