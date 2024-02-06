import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxqvA50xSgvqxffzCYByGPWoJl_7TUrD8",
  authDomain: "colab-b9577.firebaseapp.com",
  projectId: "colab-b9577",
  storageBucket: "colab-b9577.appspot.com",
  messagingSenderId: "1050615717909",
  appId: "1:1050615717909:web:27471ea345ea836baeee1c",
  measurementId: "G-5JCED7TBZT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { db };
