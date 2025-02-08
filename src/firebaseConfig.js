import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfQZ8DLZwPMyl244XTYqQN30zgeVJtCnA",
  authDomain: "newsletter-subscription-79e16.firebaseapp.com",
  projectId: "newsletter-subscription-79e16",
  storageBucket: "newsletter-subscription-79e16.firebasestorage.app",
  messagingSenderId: "398345100644",
  appId: "1:398345100644:web:65e5e8fe66c3221de3ee71",
  measurementId: "G-MX6K5NJ4RV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
