import { auth } from '../firebaseinit.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Get elements
const loginButton = document.getElementById('login-button');
const profileIcon = document.getElementById('profile-icon');

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        loginButton.style.display = 'none';
        profileIcon.style.display = 'block';
        profileIcon.addEventListener('click', () => {
            window.location.href = 'profile.html';
        });
    } else {
        // User is signed out
        loginButton.style.display = 'block';
        profileIcon.style.display = 'none';
        loginButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
});
