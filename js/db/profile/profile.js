import { auth } from '../firebaseinit.js';
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const db = getFirestore();
const loginButton = document.getElementById('login-button');
const profileIcon = document.getElementById('profile-icon');
const logoutButton = document.getElementById('logout-button');
const switchAccountButton = document.getElementById('switch-account');
const userNameDisplay = document.getElementById('user-name');
const profileOptions = document.querySelectorAll('.profile-option');
const profileSections = document.querySelectorAll('.profile-section');
const accountForm = document.getElementById('account-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const genderSelect = document.getElementById('gender');
const editButton = document.getElementById('edit-button');
const saveButton = document.getElementById('save-button');

onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginButton.style.display = 'none';
        profileIcon.style.display = 'block';
        userNameDisplay.textContent = user.displayName || user.email;
        await loadUserData(user.uid);
    } else {
        loginButton.style.display = 'block';
        profileIcon.style.display = 'none';
    }
});

logoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('Logout Error:', error);
    });
});

switchAccountButton.addEventListener('click', () => {
    if (switchAccountButton.textContent.includes('Seller')) {
        sellerSection.style.display = 'block';
        buyerSection.style.display = 'none';
        switchAccountButton.textContent = 'Switch to Buyer';
    } else {
        sellerSection.style.display = 'none';
        buyerSection.style.display = 'block';
        switchAccountButton.textContent = 'Switch to Seller';
    }
});

profileOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        const target = option.getAttribute('data-option');
        profileSections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(target).style.display = 'block';
    });
});

editButton.addEventListener('click', () => {
    firstNameInput.disabled = false;
    lastNameInput.disabled = false;
    emailInput.disabled = false;
    genderSelect.disabled = false;
    editButton.style.display = 'none';
    saveButton.style.display = 'inline-block';
});

accountForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
        try {
            await updateDoc(doc(db, "users", user.uid), {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                email: emailInput.value,
                gender: genderSelect.value
            });
            alert('Profile updated successfully.');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile.');
        }
        firstNameInput.disabled = true;
        lastNameInput.disabled = true;
        emailInput.disabled = true;
        genderSelect.disabled = true;
        editButton.style.display = 'inline-block';
        saveButton.style.display = 'none';
    }
});

async function loadUserData(uid) {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
        const userData = userDoc.data();
        firstNameInput.value = userData.firstName || '';
        lastNameInput.value = userData.lastName || '';
        emailInput.value = userData.email || '';
        genderSelect.value = userData.gender || '';
    } else {
        console.log('No such document!');
    }
}
