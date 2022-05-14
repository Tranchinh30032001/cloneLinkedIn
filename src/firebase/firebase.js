import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAp1-LNDDs6s2-Oz_9fJKm26Kmq-YEWoYQ",
	authDomain: "linkedin-8ce99.firebaseapp.com",
	projectId: "linkedin-8ce99",
	storageBucket: "linkedin-8ce99.appspot.com",
	messagingSenderId: "951450777597",
	appId: "1:951450777597:web:85b64d8e5cc74840fecb94",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
export { db, auth, storage };
