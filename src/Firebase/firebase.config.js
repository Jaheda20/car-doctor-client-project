// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcmv9_tEfon0MuU4IB5Q7CvaEgHR7cokg",
  authDomain: "car-doctor-client-projec-9c5a6.firebaseapp.com",
  projectId: "car-doctor-client-projec-9c5a6",
  storageBucket: "car-doctor-client-projec-9c5a6.appspot.com",
  messagingSenderId: "421379038346",
  appId: "1:421379038346:web:c51ca976c01cc95517a173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;