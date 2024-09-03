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

//create a auth instance
const auth = firebase.auth();
