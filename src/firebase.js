import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAx8fZniNnnUCGdSQfU3y8rIHzqWlo7YG0",
  authDomain: "todo-db8b8.firebaseapp.com",
  projectId: "todo-db8b8",
  storageBucket: "todo-db8b8.appspot.com",
  messagingSenderId: "871168053817",
  appId: "1:871168053817:web:842cf4efd848278be4f3e8"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
