

import { initializeApp } from 'firebase/app';
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {

  apiKey: "AIzaSyAyMF-CnMCY_YLWFLHX_qisArDJidzVMw8",

  authDomain: "where-am-i-70c5c.firebaseapp.com",

  projectId: "where-am-i-70c5c",

  storageBucket: "where-am-i-70c5c.appspot.com",

  messagingSenderId: "718525021117",

  appId: "1:718525021117:web:0dea2d7d6c0c3ca89a70d4",

  measurementId: "G-W7KGBWHJ7K"

};


const app = initializeApp(firebaseConfig);
export const firestore= getFirestore(app)