import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";

const initialState = {
	user: {
		username: '',
		email: '',
		phone: '',
		password: '',
		shop_name: '',
		description: '',
		image_logo: '',
		shop_link: '',
		socials_links: {
			shop_facebook: '',
			shop_viber: '',
			shop_telegram: '',
			shop_instagram: '',
		}
	},
	token: null,
	isLogin: false,
	status: null
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logout: () => initialState,
		setUser: (state, action) => {
			state.user = action.payload
		},
		setToken: (state, action) => {
			state.token = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(authApi.endpoints.registerUser.matchFulfilled, (state,
					action) => {
					state.token = action.payload.token
					state.user = action.payload.user
					state.isLogin = true
				}
			)
			.addMatcher(authApi.endpoints.login.matchFulfilled, (state,
				action) => {
				state.token = action.payload.token
				state.user = action.payload.user
				state.isLogin = true
			})
			.addMatcher(authApi.endpoints.getMe.matchFulfilled, (state,
				action) => {
				state.token = action.payload.token
				state.user = action.payload.user
				state.isLogin = true
			})
	}
});

const {
	actions,
	reducer
} = userSlice;
export const {
	logout,
	setUser,
	setToken
} = actions;
export default reducer;
