// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT_fi_6HvZIWBlWOxb2qvnpqCGomlL09s",
  authDomain: "fire-contact-5789a.firebaseapp.com",
  databaseURL: "https://fire-contact-5789a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fire-contact-5789a",
  storageBucket: "fire-contact-5789a.appspot.com",
  messagingSenderId: "622727816804",
  appId: "1:622727816804:web:34303d7c6b0083af116171"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase