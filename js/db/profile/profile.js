// Initialize Firebase if needed
// import { auth, firestore } from './firebaseinit.js';

document.addEventListener('DOMContentLoaded', function () {
    const switchAccountBtn = document.getElementById('switch-account');
    const signOutBtn = document.getElementById('sign-out');
    const addProductForm = document.getElementById('product-form');
    const productNameInput = document.getElementById('product-name');
    const productCostInput = document.getElementById('product-cost');
    const productImagesInput = document.getElementById('product-images');
    const purchaseList = document.getElementById('purchase-list');
    const contactForm = document.getElementById('contact-form');
    const messageTextarea = document.getElementById('message');

    // Event listeners
    switchAccountBtn.addEventListener('click', switchAccount);
    signOutBtn.addEventListener('click', signOut);
    addProductForm.addEventListener('submit', addProduct);
    contactForm.addEventListener('submit', sendMessage);

    // Function to switch between Seller and Buyer mode
    function switchAccount() {
        // Implement logic to switch account type (seller/buyer)
        console.log('Switching account type...');
    }

    // Function to sign out
    function signOut() {
        // Implement sign out logic (Firebase auth)
        console.log('Signing out...');
    }

    // Function to add a product
    function addProduct(e) {
        e.preventDefault();
        const productName = productNameInput.value;
        const productCost = productCostInput.value;
        const productImages = productImagesInput.files;

        // Implement logic to add product to Firestore and upload images
        console.log('Adding product:', productName, productCost, productImages);
    }

    // Function to send a message
    function sendMessage(e) {
        e.preventDefault();
        const message = messageTextarea.value;

        // Implement logic to send message to seller (Firestore or other backend)
        console.log('Sending message:', message);
    }

    // Function to fetch and display purchase history (for buyer)
    function fetchPurchaseHistory() {
        // Implement logic to fetch purchase history from Firestore
        const purchases = ['Product 1', 'Product 2', 'Product 3']; // Example data
        purchases.forEach(product => {
            const li = document.createElement('li');
            li.textContent = product;
            purchaseList.appendChild(li);
        });
    }

    // Fetch initial data on page load
    fetchPurchaseHistory();
});
