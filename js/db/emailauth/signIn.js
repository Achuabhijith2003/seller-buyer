// Import the initialized Firebase app and authentication
import { auth } from '../firebaseinit.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Get elements
const loginForm = document.getElementById('login-form');
const googleSignInBtn = document.getElementById('google-signin');

// Login event for email/password
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Logged in
            const user = userCredential.user;
            console.log('Logged In:', user);
            window.location.href = 'admindashboad.html';
        })
        .catch((error) => {
            if (error.message == "Firebase: Error (auth/invalid-login-credentials).") {
                alert("Incorrect Username or Password");
            } else {
                alert(error.message);
            }

            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error:', errorCode, errorMessage);
        });
});

// Login event for Google sign-in
googleSignInBtn.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // Logged in
            const user = result.user;
            console.log('Logged In:', user);
            window.location.href = 'admindashboad.html';
        })
        .catch((error) => {
            alert(error.message);
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error:', errorCode, errorMessage);
        });
});
