import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSzZjTrg6IdpFScxoStcOELAhueVwor68",
  authDomain: "service-form-9e063.firebaseapp.com",
  projectId: "service-form-9e063",
  storageBucket: "service-form-9e063.firebasestorage.app",
  messagingSenderId: "1053601446033",
  appId: "1:1053601446033:web:ec8c7c23df5f7b39b9e730",
  measurementId: "G-NWRPW2RT76"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
