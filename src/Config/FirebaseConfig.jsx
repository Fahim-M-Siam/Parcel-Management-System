// @ts-nocheck
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlO0HAFvWI5j9XwgvHaqn6ldt0SofL9q0",
  authDomain: "ship-ease-app.firebaseapp.com",
  projectId: "ship-ease-app",
  storageBucket: "ship-ease-app.appspot.com",
  messagingSenderId: "479096901421",
  appId: "1:479096901421:web:22b930357bf1ed2c06cda4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
