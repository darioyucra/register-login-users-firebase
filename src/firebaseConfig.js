import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBB2X4H_XBN_m9dvMu5MhHx5Dr31WjGdCg",
  authDomain: "vue-3-2024-61e74.firebaseapp.com",
  projectId: "vue-3-2024-61e74",
  storageBucket: "vue-3-2024-61e74.appspot.com",
  messagingSenderId: "466267521880",
  appId: "1:466267521880:web:2bc875422cf06e935d5b2d"
};
initializeApp(firebaseConfig);

const auth = getAuth();
export {auth};