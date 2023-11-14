// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCoE_r-ZbuxKDggIgOg2DQGZDykBKrqiPc',
  authDomain: 'social-network-6f780.firebaseapp.com',
  projectId: 'social-network-6f780',
  storageBucket: 'social-network-6f780.appspot.com',
  messagingSenderId: '770852059023',
  appId: '1:770852059023:web:4d0ecf6bf933d3e153bdfa',
  measurementId: 'G-GDYQNJ98LP',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const iniciarSesionGoogle = () => {
  const auth = getAuth(app);
  return signInWithPopup(auth, provider);
};
