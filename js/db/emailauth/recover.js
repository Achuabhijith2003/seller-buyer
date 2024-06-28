// Import the initialized Firebase app and authentication
import { auth } from '../firebaseinit.js';
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Get elements
const recoverForm = document.getElementById('recover-form');

recoverForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = recoverForm['recover-email'].value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Password recovery email sent!');
            window.location.href='Login.html';
        })
        .catch((error) => {
            alert(error.message);
            console.error('Error:', error.code, error.message);
        });
});
