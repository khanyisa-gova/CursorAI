// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  onAuthStateChanged,
  connectAuthEmulator,
  getRedirectResult,
  signOut
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  connectFirestoreEmulator
} from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions"; // Import Functions modules
import { getStorage, connectStorageEmulator } from "firebase/storage"; // Import Storage modules

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA0rE1PFfnegaIg8sMRyz67NrKX9FyapF0",
  authDomain: "actualbackend.firebaseapp.com",
  projectId: "actualbackend",
  storageBucket: "actualbackend.firebasestorage.app",
  messagingSenderId: "569964101918",
  appId: "1:569964101918:web:826aaec86a422fc45c090f",
  measurementId: "G-LGC63XJHN9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
// Initialize Firebase services
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const functions = getFunctions(app); // Initialize Functions

// Connect to emulators if running locally
if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, 'localhost', 8080); // Firestore emulator
  connectFunctionsEmulator(functions, 'localhost', 5001); // Functions emulator
  connectStorageEmulator(storage, 'localhost', 9199);
}

// Export all Firebase services needed in the app
export {
  auth,
  db,
  functions, // Export Functions
  storage,
  doc,
  getDoc,
  signOut,
  googleProvider,
  signInWithRedirect,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  onAuthStateChanged,
  getRedirectResult
};