import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";



const firebaseConfig = {
	apiKey: "AIzaSyBnyQFuXgcd_Enahq3vthAqMi4bED7fabQ",
	authDomain: "mypfe22.firebaseapp.com",
	projectId: "mypfe22",
	storageBucket: "mypfe22.appspot.com",
	messagingSenderId: "301516593666",
	appId: "1:301516593666:web:bd24e7f90916b10023651b",
	measurementId: "G-WYNF6C8LQK",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();


export { auth, fs, storage };
