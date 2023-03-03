import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./reAuth";
import { CATEGORIES_API } from "../../utils/constants";

export const categoriesAPi = createApi({
	reducerPath: "categoriesAPi",
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		getCategories: builder.mutation({
			query: () => ({
				url: `${CATEGORIES_API.GET_CATEGORIES}`,
				method: "GET"
			})
		}),
		createCategories: builder.mutation({
			query: (body) => ({
				url: `${CATEGORIES_API.CREATE_CATEGORIES}`,
				method: "POST",
				body
			})
		}),
		updateCategoryName: builder.mutation({
			query: ({
				id,
				body
			}) => ({
				url: `${CATEGORIES_API.UPDATE_CATEGORIES_NAME}${id}`,
				method: "PATCH",
				body
			})
		}),
		deleteCategory: builder.mutation({
			query: (id) => ({
				url: `${CATEGORIES_API.DELETE_CATEGORIES}${id}`,
				method: "DELETE"
			})
		}),
		getItemList: builder.mutation({
			query: (id) => ({
				url: `${CATEGORIES_API.GET_CATEGORIES_ITEM}${id}`,
				method: "GET"
			})
		}),
		addItem: builder.mutation({
			query: (body) => ({
				url: `${CATEGORIES_API.CREATE_CATEGORIES_ITEM}`,
				method: "POST",
				body
			})
		}),
		patchItemProduct: builder.mutation({
			query: ({
				id,
				body
			}) => ({
				url: `${CATEGORIES_API.PATCH_CATEGORIES_ITEM_UPDATE}${id}`,
				method: "PATCH",
				body
			})
		}),
		patchAvailableItemProduct: builder.mutation({
			query: ({
				id,
				body
			}) => ({
				url: `${CATEGORIES_API.PATCH_CATEGORIES_AVAILABLE_ITEM_UPDATE}${id}`,
				method: "PATCH",
				body
			})
		}),
		deleteItemProduct: builder.mutation({
			query: (id) => ({
				url: `${CATEGORIES_API.DELETE_PRODUCT_ITEM}${id}`,
				method: "DELETE"
			})
		}),
		searchProduct: builder.mutation({
			query: ({
				id,
				product_name
			}) => ({
				url: `${CATEGORIES_API.SEARCH_PRODUCT}?user_id=${id}&product_name=${product_name}`,
				method: "POST"
			})
		}),
		searchTag: builder.mutation({
			query: ({
				id
			}) => ({
				url: `${CATEGORIES_API.SEARCH_PRODUCT_TAG}?user_id=${id}`,
				method: "POST"
			})
		}),
	})
});

export const {
	useGetCategoriesMutation,
	useCreateCategoriesMutation,
	useUpdateCategoryNameMutation,
	useDeleteCategoryMutation,
	useGetItemListMutation,
	useAddItemMutation,
	usePatchItemProductMutation,
	usePatchAvailableItemProductMutation,
	useDeleteItemProductMutation,
	useSearchProductMutation,
	useSearchTagMutation
} = categoriesAPi;
