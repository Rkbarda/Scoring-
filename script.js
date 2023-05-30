
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyATFZVsJBCbpcK5AXNOIRY9k8hkSbkYJvc",
    authDomain: "scoring-b641d.firebaseapp.com",
    databaseURL: "https://scoring-b641d-default-rtdb.firebaseio.com",
    projectId: "scoring-b641d",
    storageBucket: "scoring-b641d.appspot.com",
    messagingSenderId: "77184617083",
    appId: "1:77184617083:web:8ee8e83ca70e081a97f0de",
    measurementId: "G-Y3TK4G5Y26"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
