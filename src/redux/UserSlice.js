import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	getAdditionalUserInfo,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { addDocument } from "../firebase/addDoc";
import { auth } from "../firebase/firebase";
import { generateKeywords } from "./selectors";

export const UserSlice = createSlice({
	name: "user",
	initialState: {
		loading: false,
		user: null,
		listUsers: [],
		roomId: "", // id room duoc chon
		rooms: [], // danh sach cac room co trong db
		chooseRoom: {}, // thong tin cu the ve room duoc chon
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
		loading: (state, action) => {
			state.loading = action.payload;
		},
		setListUser: (state, action) => {
			state.listUsers = action.payload;
		},
		selectedRoomId: (state, action) => {
			state.roomId = action.payload;
		},
		listRoom: (state, action) => {
			state.rooms = action.payload;
		},
		selectedRoom: (state, action) => {
			state.chooseRoom = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(signInAPI.fulfilled, (state, action) => {
			state.user = action.payload;
		});
	},
});
export const statusModalPost = (state) => state.listStatus.modalPost;
export const {
	login,
	logout,
	loading,
	selectedRoomId,
	listRoom,
	selectedRoom,
} = UserSlice.actions;
export default UserSlice.reducer;

export const signInAPI = createAsyncThunk(
	"/signGoogle",
	async (data, { dispatch, getState }) => {
		const provider = new GoogleAuthProvider();
		const result = await signInWithPopup(auth, provider);
		const uid = result.user.uid;
		const newUser = getAdditionalUserInfo(result);
		const { isNewUser, profile, providerId } = newUser;
		if (isNewUser) {
			addDocument("users", {
				email: profile.email,
				name: profile.name,
				photoUrl: profile.picture,
				uid: uid,
				providerId: providerId,
				keyWord: generateKeywords(profile.name),
			});
		}
		return result.user.displayName;
	}
);
