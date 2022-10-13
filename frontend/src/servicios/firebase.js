// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHaXOYyQiak-c_nl__H0HCVg-fsQMhcV0",
  authDomain: "raphaelrichardsonb.firebaseapp.com",
  databaseURL: "https://raphaelrichardsonb-default-rtdb.firebaseio.com",
  projectId: "raphaelrichardsonb",
  storageBucket: "raphaelrichardsonb.appspot.com",
  messagingSenderId: "967593457088",
  appId: "1:967593457088:web:bc51222d7eed78e9300425",
  measurementId: "G-0PRBMGGEHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);