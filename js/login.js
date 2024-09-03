import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAa3LZqiglLwOcM9Z4OuDbhZkNoSQWr-ZI",
  authDomain: "fir-authentication-69c5e.firebaseapp.com",
  projectId: "fir-authentication-69c5e",
  storageBucket: "fir-authentication-69c5e.appspot.com",
  messagingSenderId: "299004620336",
  appId: "1:299004620336:web:718713f1beabb1588047f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//login function
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-login").addEventListener("click", (e) => {
    const email = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        swal({
          title: "Success!",
          text: "User login successfully!",
          icon: "success",
          buttons: false,
          timer: 3000,
        }).then(() => {
          const user = userCredential.user;
          console.log("Logged in as:", user.email);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Error logging in: " + errorMessage);
      });
  });
});
