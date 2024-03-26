// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWFvnw2EyYDM6-17g9Y_nGSRBlQ7qjUT4",
  authDomain: "bits-0f-c0de-2f8ce.firebaseapp.com",
  projectId: "bits-0f-c0de-2f8ce",
  storageBucket: "bits-0f-c0de-2f8ce.appspot.com",
  messagingSenderId: "990535547791",
  appId: "1:990535547791:web:d9c1fef395e6150ca829fa",
  measurementId: "G-52LH7890ZQ"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
