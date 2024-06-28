import { auth } from '../firebaseinit.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Get elements
const loginButton = document.getElementById('login-button');
const profileIcon = document.getElementById('profile-icon');
const cartButton = document.getElementById('cart-button');
const signOutButton = document.getElementById('sign-out-button');

onAuthStateChanged(auth, (user) => {
    if (user) {
        loginButton.style.display = 'none';
        profileIcon.style.display = 'block';
        profileIcon.addEventListener('click', () => {
            window.location.href = 'profile.html';
        });
        signOutButton.style.display = 'block';
    } else {
        loginButton.style.display = 'block';
        profileIcon.style.display = 'none';
        loginButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
        signOutButton.style.display = 'none';
    }
});

signOutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('Logged out');
        location.reload();
    }).catch((error) => {
        console.error('Logout Error:', error);
    });
});
