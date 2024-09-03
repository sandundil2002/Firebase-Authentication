import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
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

//signup function
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-signup").addEventListener("click", (e) => {
    const email = document.getElementById("sign-email").value;
    const password = document.getElementById("sign-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        swal({
          title: "Success!",
          text: "User registered successfully!",
          icon: "success",
          buttons: false,
          timer: 3000,
        }).then(() => {
          window.location.href = "/index.html";
        });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
});
