import firebase from "firebase";
//import firestore from "firebase/firebase-firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBnMeqGB_FN91vFg7b8AFds5pxWSvLlN_4",
  authDomain: "geo-ninjas-ba5e7.firebaseapp.com",
  databaseURL: "https://geo-ninjas-ba5e7.firebaseio.com",
  projectId: "geo-ninjas-ba5e7",
  storageBucket: "",
  messagingSenderId: "131545694174",
  appId: "1:131545694174:web:71a70631a3d03032"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
