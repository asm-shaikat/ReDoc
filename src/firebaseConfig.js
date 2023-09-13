import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmdJJFVJhcBwRjZyvN9qwk43llJJzPjLs",
  authDomain: "blogapp-cf6db.firebaseapp.com",
  projectId: "blogapp-cf6db",
  storageBucket: "blogapp-cf6db.appspot.com",
  messagingSenderId: "668918706288",
  appId: "1:668918706288:web:67c3d896f53e441d9b44b5",
  measurementId: "G-T163EBNG15"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app)