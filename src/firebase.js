import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDAXpJuOiwZwPjHLLI9iCP2vsdCQiDx9kg",
  authDomain: "testing-929ad.firebaseapp.com",
  projectId: "testing-929ad",
  storageBucket: "testing-929ad.appspot.com",
  messagingSenderId: "722296668770",
  appId: "1:722296668770:web:ad65c73538157e2c4b073b"
};

// Initialize Firebase app with the configuration
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);

const getAppURL = () => {
  // Retrieve the URL from the configuration
  return `https://${firebaseConfig.authDomain || `${firebaseConfig.projectId}.web.app`}`;
};

// Export the initialized Firebase app
export { app, db, functions, getAppURL };