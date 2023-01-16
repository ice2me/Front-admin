import {
	useDispatch,
	useSelector
} from "react-redux"
import React, {
	useCallback,
	useEffect
} from "react"
import DropdownEdit from "../../components/DropdownEdit/DropdownEdit";
import { useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../../utils/constants";
import arrowDown from "../../assets/icons/arrowDown.svg"
import { FormattedMessage } from "react-intl";
import { useGetCategoriesMutation } from "../../redux/services/categoriesApi";
import Loader from "../../components/Loader/Loader";
import CategoryInpName from "./CategoryInpName";


const Category = () => {
	const {categories} = useSelector(state => state.categories)
	const [getCategories, {isLoading: isGetCategoriesLoading}] = useGetCategoriesMutation()
	const categoriesList = categories || []
	const navigate = useNavigate()
	const openProductList = (categoryId, categoryName) => navigate(APP_ROUTE.PRODUCTS_LIST, {
		state: {
			id: categoryId,
			name: categoryName
		}
	})

	const categoriesListArr = useCallback(async () => {
		await getCategories()
	}, [])

	useEffect(() => {
		categoriesListArr()
	}, [])

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
							<img
								src={arrowDown}
								alt="arrow down"
							/>
						</h1>
					}
					<div className='category-body_wrapper'>
						{
							categoriesList?.map((category, index) => <div
									className="category-body_accordingHeader"
									key={category?._id}
								>
							<span
								onClick={() => openProductList(category?._id, category?.category_name)}
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
