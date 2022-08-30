import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD-K_7P6FkzIJWPPaPPZrRyqd6PSpZy2PU",
  authDomain: "chreact-85396.firebaseapp.com",
  projectId: "chreact-85396",
  storageBucket: "chreact-85396.appspot.com",
  messagingSenderId: "184781807492",
  appId: "1:184781807492:web:80b7a0bc9a30b07ab147d1"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

export default DB;