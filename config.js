// 1. Load the Firebase libraries directly into the browser
document.write('<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js"><\/script>');

// 2. Wait for the page to load, then start Firebase
window.onload = function() {
    
    // Your exact Firebase configuration keys
    const firebaseConfig = {
        apiKey: "AIzaSyABGu2rCyKKUomrDJ9iXh7Af6IaIRTNw3A",
        authDomain: "askhere-ecba1.firebaseapp.com",
        projectId: "askhere-ecba1",
        storageBucket: "askhere-ecba1.firebasestorage.app",
        messagingSenderId: "649194161451",
        appId: "1:649194161451:web:da34c43d5a0956b0df316e",
        measurementId: "G-F0SEJFNH25"
    };

    // Initialize Firebase safely
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    
    // Make the database and auth available to all your HTML files globally
    window.db = firebase.firestore();
    window.auth = firebase.auth();
    
    // Automatically check if a user is logged in and update the Navbar button
    auth.onAuthStateChanged(user => {
        const loginBtn = document.getElementById('navLoginBtn');
        if (loginBtn) {
            if (user) {
                // If logged in, change the button to "Logout"
                loginBtn.innerText = "Logout";
                loginBtn.href = "#";
                loginBtn.onclick = (e) => { 
                    e.preventDefault();
                    auth.signOut().then(() => window.location.reload()); 
                };
            } else {
                // If logged out, point the button to the login page
                loginBtn.innerText = "Login";
                loginBtn.href = "login.html";
                loginBtn.onclick = null;
            }
        }
    });
};