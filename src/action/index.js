import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDocument } from "../firebase/addDoc";
import { storage } from "../firebase/firebase";
import { loading } from "../redux/UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

//thunkCreator
export const PostAPI = createAsyncThunk(
	"/post",
	async (payload, { dispatch }) => {
		dispatch(loading(true));
		const data = {
			actor: {
				descriptions: payload.user.email || null,
				title: payload.user.displayName || null,
				image: payload.user.photoUrl || null,
				uidOwner: payload.user.uid,
			},
			contentPost: payload.contentPost,
			numberLike: payload.numberLike,
			numberComment: payload.numberComment,
			contentComment: payload.contentComment,
		};
		if (payload.imageLink !== "") {
			const Imgref = ref(storage, `images/${payload.imageLink.name}`);
			const uploadTask = uploadBytesResumable(Imgref, payload.imageLink);
			uploadTask.on(
				"state_changed",
				(snapshot) => {},
				(error) => {
					console.log("error: " + error);
				},
				async () => {
					const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
					addDocument("posts", {
						...data,
						video: null,
						imageLink: downloadUrl || null,
					});
					dispatch(loading(false));
				}
			);
		} else if (payload.videoLink !== "") {
			addDocument("posts", {
				...data,
				video: payload.videoLink || null,
				imageLink: null,
			});
			dispatch(loading(false));
		}
		return;
	}
);
