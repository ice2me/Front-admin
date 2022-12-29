import {
	createApi,
	fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import { apiBaseUrl } from "../../utils/makeUrl";
import { AUTH_API } from "../../utils/constants";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: apiBaseUrl,
		headers: {
			"content-type": "application/json"
		},
		prepareHeaders: (headers,
			{getState}) => {
			const {token} = getState().userStore;
			if (token) {
				headers.set("Authorization", `Bearer ${ token }`)
			}
			return headers;
		}
	}),
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => (
				{
					url: AUTH_API.LOGIN,
					method: "POST",
					body: credentials
				})
		}),
		registerUser: builder.mutation({
			query: (credentials) => ({
				url: AUTH_API.SIGNUP,
				method: "POST",
				body: credentials
			})
		}),
		updateUser: builder.mutation({
			query: (credentials) => ({
				url: AUTH_API.UPDATE,
				method: "PATCH",
				body: credentials
			})
		}),
		getMe: builder.mutation({
			query: () => ({
				url: AUTH_API.ME,
				method: "GET"
			})
		}),
		deleteUser: builder.mutation({
			query: (id) => ({
				url: AUTH_API.DELETE_USER,
				method: "DELETE",
				body: id
			})
		}),
	})
});

export const {
	useLoginMutation,
	useRegisterUserMutation,
	useUpdateUserMutation,
	useDeleteUserMutation,
	useGetMeMutation,


} = authApi;
