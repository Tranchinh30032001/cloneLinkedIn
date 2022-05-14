import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const UserSlice = createSlice({
	name: "user",
	initialState: {
		loading: false,
		user: null,
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
	},
	extraReducers(builder) {
		builder.addCase(signInAPI.fulfilled, (state, action) => {
			state.user = action.payload;
		});
	},
});
export const selectUser = (state) => state.listStatus.user;
export const statusModalPost = (state) => state.listStatus.modalPost;
export const { login, logout, loading } = UserSlice.actions;
export default UserSlice.reducer;

export const signInAPI = createAsyncThunk(
	"/signGoogle",
	async (data, { dispatch, getState }) => {
		const provider = new GoogleAuthProvider();
		const result = await signInWithPopup(auth, provider);
		// dispatch(loading(true));
		const keetqua = getState();
		console.log("ketqua: ", keetqua);
		return result.user.displayName;
	}
);
