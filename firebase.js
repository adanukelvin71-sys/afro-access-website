import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwPao1LFlOWHFWd5E8mzuhk1hEhFG1S-s",
  authDomain: "afro-access-gh.firebaseapp.com",
  projectId: "afro-access-gh",
  storageBucket: "afro-access-gh.firebasestorage.app",
  messagingSenderId: "720105228674",
  appId: "1:720105228674:web:472e8db4a8259f25f3679b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);