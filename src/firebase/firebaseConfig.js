import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKuE_ft-nmxW8UpI7SfTrEewZNvozVRyA",
  authDomain: "react-ecommerce-919d4.firebaseapp.com",
  projectId: "react-ecommerce-919d4",
  storageBucket: "react-ecommerce-919d4.firebasestorage.app",
  messagingSenderId: "758881899447",
  appId: "1:758881899447:web:2a23857c379c32eef00e32"
};

export const app = initializeApp(firebaseConfig);