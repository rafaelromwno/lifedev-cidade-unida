import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDcbipwYEbwT1vx-4T4JXkrLwVwGH9KhDk",
    authDomain: "lifedev-romano.firebaseapp.com",
    projectId: "lifedev-romano",
    storageBucket: "lifedev-romano.firebasestorage.app",
    messagingSenderId: "1091586505139",
    appId: "1:1091586505139:web:cc3055782e77fe1a0133c6",
    measurementId: "G-R9FNWR61EW"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }