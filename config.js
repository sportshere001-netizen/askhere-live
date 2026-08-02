document.write('<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js"><\/script>');

window.onload = function() {
    // Restored real Firebase keys for askhere-ecba1
    const firebaseConfig = {
        apiKey: "AIzaSyABGu2rCyKKUomrDJ9iXh7Af6IaIRTNw3A",
        authDomain: "askhere-ecba1.firebaseapp.com",
        projectId: "askhere-ecba1",
        storageBucket: "askhere-ecba1.firebasestorage.app",
        messagingSenderId: "649194161451",
        appId: "1:649194161451:web:da34c43d5a0956b0df316e",
        measurementId: "G-F0SEJFNH25"
    };

    if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
    window.db = firebase.firestore();
    window.auth = firebase.auth();
    
    auth.onAuthStateChanged(user => {
        const loginBtn = document.getElementById('navLoginBtn');
        if (loginBtn) {
            if (user) {
                loginBtn.innerText = "Logout";
                loginBtn.href = "#";
                loginBtn.onclick = (e) => { e.preventDefault(); auth.signOut().then(() => window.location.reload()); };
            } else {
                loginBtn.innerText = "Login";
                loginBtn.href = "login.html";
                loginBtn.onclick = null;
            }
        }
    });
};

// Global Security: Neutralize malicious code injections (XSS Protection)
window.escapeHTML = function(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, function(tag) {
        const chars = { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' };
        return chars[tag] || tag;
    });
};

// Global Security: Catch Firebase Free Tier Exhaustion gracefully
window.handleFirebaseError = function(err) {
    if(err.code === 'resource-exhausted' || (err.message && err.message.toLowerCase().includes('quota'))) {
        alert("⚠️ Wow! We went viral. The free database daily limits have been reached to protect the server. Please come back tomorrow!");
    } else {
        alert("Error: " + err.message);
    }
};