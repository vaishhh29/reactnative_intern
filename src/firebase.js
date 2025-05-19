"use client";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwZamj7i2ILtXYCxA1lIhb8d5cZkHWQow",
  authDomain: "nextjs-app-9fa32.firebaseapp.com",
  projectId: "nextjs-app-9fa32",
  storageBucket: "nextjs-app-9fa32.appspot.com",
  messagingSenderId: "967056491714",
  appId: "1:967056491714:web:1e4266d6ba609cec0b675b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
