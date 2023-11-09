import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBU_myaTHx3gNRZwMTN78q08oOXEzsk3II",
  authDomain: "clone-1e263.firebaseapp.com",
  projectId: "clone-1e263",
  storageBucket: "clone-1e263.appspot.com",
  messagingSenderId: "242988982365",
  appId: "1:242988982365:web:23229cf72b6b60ad03edb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)