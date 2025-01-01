// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcUKpfrPGkLeDNY93eKB_travX17QT8_4",
  authDomain: "car-doctor-auth-4e7c4.firebaseapp.com",
  projectId: "car-doctor-auth-4e7c4",
  storageBucket: "car-doctor-auth-4e7c4.firebasestorage.app",
  messagingSenderId: "666861427664",
  appId: "1:666861427664:web:b66c1932bb41f39ed237d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;