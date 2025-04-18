import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4GXL_alL8rqO3oB8oLr1GRwL0RrYHY50",
    authDomain: "lifedev-barbieri.firebaseapp.com",
    projectId: "lifedev-barbieri",
    storageBucket: "lifedev-barbieri.firebasestorage.app",
    messagingSenderId: "406155786239",
    appId: "1:406155786239:web:85c21f309048604ce259ca",
    measurementId: "G-TFPMXH4J7L"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)


export { db, auth }