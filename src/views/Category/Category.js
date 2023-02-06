import {
	useSelector
} from "react-redux"
import React, {
	useCallback,
	useEffect,
	useState
} from "react"
import DropdownEdit from "../../components/DropdownEdit/DropdownEdit"
import { FormattedMessage } from "react-intl"
import {
	useGetCategoriesMutation,
	useGetItemListMutation
} from "../../redux/services/categoriesApi"
import Loader from "../../components/Loader/Loader"
import CategoryInpName from "./CategoryInpName"
import ProductList from "../ProductList/ProductList"


const Category = () => {
	const {categories} = useSelector(state => state.categories)
	const [getCategories, {isLoading: isGetCategoriesLoading}] = useGetCategoriesMutation()
	const [getItemList, {isLoading: isGetItemListLoading}] = useGetItemListMutation()
	const [shopProductsList, setShopProductsList] = useState(false)
	const [categoryIdState, setCategoryIdState] = useState(null)
	const categoriesList = categories || []
	const showList = () => setShopProductsList(true)
	const hideList = () => setShopProductsList(false)

	const openProductList = useCallback(() => {
		if (shopProductsList) {
			async function getProductsList() {
				try {
					await getItemList(categoryIdState)
				} catch (e) {
					console.log(e)
				}
			}
			getProductsList()
		}
	}, [categoryIdState, shopProductsList, getItemList])

	const categoriesListArr = useCallback(async () => {
		await getCategories()
	}, [getCategories])

	useEffect(() => {
		categoriesListArr()
	}, [getCategories])

	useEffect(() => {
		openProductList()
	}, [shopProductsList, categoryIdState, getItemList])

	if (shopProductsList) {
		return isGetItemListLoading ? <Loader /> : <ProductList
			hideList={hideList}
			categoryIdState={categoryIdState}
		/>
	}

	return (
		<div className="category">
			<h1 className="category-title">
				<FormattedMessage id='categoryList' />
			</h1>
			{
				isGetCategoriesLoading ? <Loader /> : <>
					{
						categoriesList.length < 1
						&&
						<h1 className="productList-arrowDown">
							<FormattedMessage id='createCategory' />
						</h1>
					}
					<div className='category-body_wrapper'>
						{
							categoriesList?.map((category, index) => <div
									className="category-body_accordingHeader"
									key={category?._id}
								>
							<span
								onClick={() => {
									showList()
									setCategoryIdState(category?._id)
								}}
							>
								{category?.category_name}
							</span>
									<DropdownEdit
										categoryName={category?.category_name}
										id={category?._id}
									/>
								</div>
							)
						}
					</div>
				</>
			}
			<CategoryInpName />
		</div>
	)
}

export default Category
