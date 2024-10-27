// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwDpBSrj0rT0L3MiUZro_n8HSfZuvi3zM",
  authDomain: "course-related-website.firebaseapp.com",
  projectId: "course-related-website",
  storageBucket: "course-related-website.appspot.com",
  messagingSenderId: "600998019529",
  appId: "1:600998019529:web:c57820dd9ac19d4b6ba818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;