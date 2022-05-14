import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const addDocument = (collectionTable, data) => {
	const query = collection(db, collectionTable);
	addDoc(query, { ...data, createdAt: serverTimestamp() });
};
