import { createSlice } from "@reduxjs/toolkit"
import { categoriesAPi } from "../services/categoriesApi";

const initialState = {
	categories: [],
	items: [],
	tagsList: [],
	message: {
		text: '',
		link: ''
	}
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		// resetCategories: () => initialState,
		// setCategoriesInList: (state, action) => {
		// 	state.categories = action.payload
		// },
		resetItemsLIst: (state, action) => {
			state.items = []
		}
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				categoriesAPi?.endpoints.createCategories.matchFulfilled,
				(state,
					action) => {
					state.categories = [action?.payload, ...state.categories]
				}
			)
			.addMatcher(
				categoriesAPi?.endpoints.getCategories.matchFulfilled,
				(state,
					action) => {
					// console.log(action.payload.categories)
					if (!action.payload.message) {
						state.categories = action.payload.categories
					} else {
						state.message = {
							text: action.payload.message.text,
							link: action.payload.message.link
						}
					}
				}
			)
			.addMatcher(
				categoriesAPi?.endpoints.updateCategoryName.matchFulfilled,
				(state,
					action) => {
					const index = state.categories.findIndex(
						(category) => {
							return category._id === action.payload.isCategoryName._id
						}
					)
					state.categories[index] = action.payload.isCategoryName
				}
			)
			.addMatcher(
				categoriesAPi?.endpoints.deleteCategory.matchFulfilled,
				(state,
					action) => {
					const categoryId = action.payload.data._id
					const categID = state.categories.filter(category => category._id !== categoryId)
					state.categories = categID
				}
			)
			.addMatcher(
				categoriesAPi?.endpoints.addItem.matchFulfilled,
				(state,
					action) => {
					state.items = [action.payload.newItems, ...state.items]
					// .sort((a, b) => a.available_product + b.available_product)
					// .reverse()
				}
			)
			.addMatcher(
				categoriesAPi?.endpoints.patchAvailableItemProduct.matchFulfilled,
				(state,
					action) => {
					const editAvailable = action.payload.isAvailableProduct
					const filter = state.items.filter(item => item._id !== editAvailable._id)
						.sort((a, b) => a.available_product < b.available_product)
					state.items = [...filter, action.payload.isAvailableProduct]
				}
			)
			.addMatcher(
				categoriesAPi?.endpoints.patchItemProduct.matchFulfilled,
				(state,
					action) => {
					const index = state.items.findIndex(
						(item) => item._id === action.payload.isCategoryProduct._id,
					)
					state.items[index] = action.payload.isCategoryProduct
				}
			)
			.addMatcher(
				categoriesAPi?.endpoints.getItemList.matchFulfilled,
				(state,
					action) => {
					state.items = action.payload
				}
			)
			.addMatcher(
				categoriesAPi?.endpoints.searchProduct.matchFulfilled,
				(state,
					action) => {
					state.items = action.payload
				}
			)
			.addMatcher(
				categoriesAPi?.endpoints.deleteItemProduct.matchFulfilled,
				(state,
					action) => {
					const idToDelete = action.payload.data._id
					const stateItemsArr = state.items.filter(item => item._id !== idToDelete)
					state.items = stateItemsArr
				}
			)
			.addMatcher(
				categoriesAPi?.endpoints.searchTag.matchFulfilled, (state,
					action) => {
					state.tagsList = action.payload
				}
			)
	}
});

const {
	actions,
	reducer
} = categoriesSlice;
export const {
	resetCategories,
	updateItemsList,
	setCategoriesInList,
	resetItemsLIst,
	setItemInList
} = actions;
export default reducer;
