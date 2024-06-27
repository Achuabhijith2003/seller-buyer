// Import the initialized Firebase app, authentication, and Firestore
import { auth, db } from '../firebaseinit.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Get elements
const signupForm = document.getElementById('signup-form');

// Signup event
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = signupForm['first-name'].value;
    const lastName = signupForm['last-name'].value;
    const email = signupForm['email'].value;
    const dob = signupForm['dob'].value;
    const password = signupForm['password'].value;
    const confirmPassword = signupForm['confirm-password'].value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User created
            const user = userCredential.user;
            console.log('User Created:', user);
            
            // Store user info in Firestore
            return setDoc(doc(db, "users", user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: email,
                dateOfBirth: dob,
                userId: user.uid
            });
        })
        .then(() => {
            alert('Account created successfully!');
            window.location.href = 'login.html';
        })
        .catch((error) => {
            alert(error.message);
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error:', errorCode, errorMessage);
        });
});
