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
	const [document, setDocument] = useState([]);
	useEffect(() => {
		const target = collection(db, table);
		let targetSort = query(target, orderBy("createdAt", "desc"));
		if (codition) {
			// vì firestore sẽ không chấp nhận một compare value có  giá trị null hay empty array nên cần kiểm tra
			if (!codition.compareValue || !codition.compareValue.length) {
				return;
			}
			targetSort = query(
				targetSort,
				where(codition.fieldName, codition.operator, codition.compareValue)
			);
		}
		const unSubscribe = onSnapshot(targetSort, (snap) => {
			const data = snap.docs.map((doc) => {
				return {
					id: doc.id,
					data: doc.data(),
				};
			});
			setDocument(data);
		});
		return () => {
			setDocument([]);
			unSubscribe();
		};
	}, [collection, codition]);
	return document;
};
