import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD0JNy6OOca8JSyERz45opKZqkmivMazG0",
  authDomain: "programadorescariocastrabalho3.firebaseapp.com",
  projectId: "programadorescariocastrabalho3",
  storageBucket: "programadorescariocastrabalho3.appspot.com",
  messagingSenderId: "307173445525",
  appId: "1:307173445525:web:6bd2c2a85e3964ad21709c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);