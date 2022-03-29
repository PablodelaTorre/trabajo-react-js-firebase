import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBKI5skwA6ALaWp1w_98WZHu-X0ooX5-cU",
    authDomain: "ecommerce-react-4e005.firebaseapp.com",
    projectId: "ecommerce-react-4e005",
    storageBucket: "ecommerce-react-4e005.appspot.com",
    messagingSenderId: "703475669916",
    appId: "1:703475669916:web:7bbd4f505ebbc6e23b4659"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)