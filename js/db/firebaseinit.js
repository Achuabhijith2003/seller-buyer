import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3KgoqJBBAjszEE2PWrEHI0HVFdS8O_Yg",
  authDomain: "seller-buyer-54de2.firebaseapp.com",
  projectId: "seller-buyer-54de2",
  storageBucket: "seller-buyer-54de2.appspot.com",
  messagingSenderId: "817527182504",
  appId: "1:817527182504:web:a623a63993b48067015e9d",
  measurementId: "G-LB5HYNYC34"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

