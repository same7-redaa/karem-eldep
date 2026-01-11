
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMLkx-sdi7MuAD7lY_YQH1ghsCbJPqTT4",
    authDomain: "eldep-b1da3.firebaseapp.com",
    projectId: "eldep-b1da3",
    storageBucket: "eldep-b1da3.firebasestorage.app",
    messagingSenderId: "671046886376",
    appId: "1:671046886376:web:1577270692d91b6bfdba5d",
    measurementId: "G-V6CGHTT5Y1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
