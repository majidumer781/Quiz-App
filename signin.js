// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLaubO4H7hNTicO68NYwrlxs3ts0W6OVw",
  authDomain: "xyz-project-82ea7.firebaseapp.com",
  projectId: "xyz-project-82ea7",
  storageBucket: "xyz-project-82ea7.appspot.com",
  messagingSenderId: "661021249492",
  appId: "1:661021249492:web:45ae4a4f8ef32f16319041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btns = document.getElementById("btn")
btns.addEventListener("click",() => {

  const email = document.getElementById("em").value
  const password = document.getElementById("pass").value

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

    });
})



