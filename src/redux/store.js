import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from "./slices/categoriesSlice";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import userSlice from "./slices/userSlice"
import {authApi} from "../redux/services/authApi"
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE
} from "redux-persist/es/constants";
import { requestErrorLogger } from "../utils/requestErrorLogger";
import { categoriesAPi } from "./services/categoriesApi";

export const store = configureStore({
	reducer: {
		userStore: persistReducer({ key: "auth", storage }, userSlice),
		categories: categoriesSlice,
		[authApi.reducerPath]: authApi.reducer,
		[categoriesAPi.reducerPath]: categoriesAPi.reducer,
	},
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat([authApi.middleware, categoriesAPi.middleware]),
		requestErrorLogger
		]
})
