import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// import firebaseConfig from "./config";
const firebaseConfig = {
  apiKey: "AIzaSyC9cseLq8Izw5UmHGVBXgj2EqAj_CA7lxE",
  authDomain: "linkedin-clone-final-972b6.firebaseapp.com",
  projectId: "linkedin-clone-final-972b6",
  storageBucket: "linkedin-clone-final-972b6.appspot.com",
  messagingSenderId: "837172066092",
  appId: "1:837172066092:web:7232de6adda05bfaf81e89",
  measurementId: "G-E8GZY7YZ81",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
