import { initializeApp } from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
const firebaseConfig = {
	apiKey: "AIzaSyBnyQFuXgcd_Enahq3vthAqMi4bED7fabQ",
	authDomain: "mypfe22.firebaseapp.com",
	projectId: "mypfe22",
	storageBucket: "mypfe22.appspot.com",
	messagingSenderId: "301516593666",
	appId: "1:301516593666:web:bd24e7f90916b10023651b",
	measurementId: "G-WYNF6C8LQK",
};

const app = initializeApp(firebaseConfig);
const fs = getFirestore(app);
const auth = firebase.auth();
const storage = firebase.storage();
export { auth, fs, storage };
