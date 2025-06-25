import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpFNzn5b9pjJWuSEOA0SzXMHZKj6nH9H0",
  authDomain: "project-5-591d0.firebaseapp.com",
  databaseURL: "https://project-5-591d0-default-rtdb.firebaseio.com",
  projectId: "project-5-591d0",
  storageBucket: "project-5-591d0.firebasestorage.app",
  messagingSenderId: "413932850138",
  appId: "1:413932850138:web:792d774affddb65a5dcee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app);
export const authFirebase = getAuth(app);