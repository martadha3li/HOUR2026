import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyATSMFKx4jUo_Duw0FtD5HO_M69O7A55o0",
    authDomain: "fnews-7525e.firebaseapp.com",
    projectId: "fnews-7525e",
    storageBucket: "fnews-7525e.firebasestorage.app",
    messagingSenderId: "1023530532546",
    appId: "1:1023530532546:web:cbc1be1753237179bd455b"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseConfig);
