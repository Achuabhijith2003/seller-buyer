import { auth } from '../firebaseinit.js';
import { onAuthStateChanged ,signOut} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Get elements
const signoutButton = document.getElementById('sign-out-button');
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

signoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            console.log('Logged out');
            loginButton.style.display = 'block';
        profileIcon.style.display = 'none';
        signoutButton.style.display='none';
        loginButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
        })
        .catch((error) => {
            console.error('Logout Error:', error);
        });
});
