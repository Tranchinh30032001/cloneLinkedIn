import {
	onSnapshot,
	collection,
	orderBy,
	where,
	query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";

export const useFireStore = (table, codition) => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const target = collection(db, table);
		const targetSort = query(target, orderBy("createdAt", "desc"));
		if (codition) {
			if (!codition.value || !codition.value.length) {
				return;
			}
			const targetSort = query(
				targetSort,
				where(codition.fieldName, codition.operator, codition.value)
			);
		}
		const unSubscribe = onSnapshot(targetSort, (snap) => {
			const data = snap.docs.map((doc) => ({
				id: doc.id,
				data: doc.data(),
			}));
			setPosts(data);
		});
		return () => {
			setPosts([]);
			unSubscribe();
		};
	}, [collection, codition]);
	return posts;
};
