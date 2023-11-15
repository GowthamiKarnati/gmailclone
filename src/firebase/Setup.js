// import { initializeApp } from "firebase/app";
// import {getAuth,GoogleAuthProvider} from "firebase/auth"
// import {getFirestore} from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export const googleProvider = new GoogleAuthProvider(app)
// export const database = getFirestore(app)

// src/firebase/Setup.js

import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app);





// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDFiC08dPKLzjHsYQU7QfKsBlK4ijIQvTk",
//   authDomain: "fir-42584.firebaseapp.com",
//   projectId: "fir-42584",
//   storageBucket: "fir-42584.appspot.com",
//   messagingSenderId: "501943631279",
//   appId: "1:501943631279:web:de6f029adefcaebda8435a",
//   measurementId: "G-EQ735D4SBF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);REACT_APP_FIREBASE_API_KEY="AIzaSyBU_myaTHx3gNRZwMTN78q08oOXEzsk3II"
// REACT_APP_FIREBASE_AUTH_DOMAIN=clone-1e263.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=clone-1e263
// REACT_APP_FIREBASE_STORAGE_BUCKET=clone-1e263.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=242988982365
// REACT_APP_FIREBASE_APP_ID=1:242988982365:web:23229cf72b6b60ad03edb4