import {
	useDispatch,
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
import { RegistrationShop } from "../Login/RegistrationShop"
import squareView from '../../assets/icons/checkbox-unchecked.svg'
import listView from '../../assets/icons/list.svg'
import noImage from '../../assets/icons/happySocks.svg'
// import noImage from '../../assets/images/shot1.jpg'
// import noImage from '../../assets/images/meet.jpg'


const Category = ({
	toggleViewHandler,
	toggleView
}) => {
	const {
		categories
	} = useSelector(state => state.categories)
	const {user} = useSelector((state) => state.userStore)
	const [getCategories, {isLoading: isGetCategoriesLoading}] = useGetCategoriesMutation()
	const [getItemList, {isLoading: isGetItemListLoading}] = useGetItemListMutation()
	const [shopProductsList, setShopProductsList] = useState(false)
	const [categoryIdState, setCategoryIdState] = useState(null)
	const [categoryNameOpen, setCategoryNameOpen] = useState(null)
	const [openRegistrationShopWindow, setOpenRegistrationShopWindow] = useState(false)

	const categoriesList = categories || []
	const dispatch = useDispatch()

	const showList = () => setShopProductsList(true)
	const hideList = () => setShopProductsList(false)

	const showRegistrationShopWindow = () => setOpenRegistrationShopWindow(true)
	const hideRegistrationShopWindow = () => setOpenRegistrationShopWindow(false)

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

	if (openRegistrationShopWindow) {
		return openRegistrationShopWindow
			&&
			<RegistrationShop hideRegistrationShopWindow={hideRegistrationShopWindow} />
	}

	if (shopProductsList) {
		return isGetItemListLoading ? <Loader /> : <ProductList
			hideList={hideList}
			categoryIdState={categoryIdState}
			categoryNameOpen={categoryNameOpen}
		/>
	}


	return (
		<div className="category ">
			<h1 className="category-title">
				<FormattedMessage id='categoryList' />
			</h1>
			{
				user?.shop_name !== undefined
					?
					isGetCategoriesLoading
						?
						<Loader />
						:
						<>
							{
								categoriesList.length < 1
								&&
								<h1 className="productList-arrowDown">
									{
										<FormattedMessage id='noCategory' />

									}
								</h1>
							}
							<div
								className={`category-body_wrapper
							${toggleView ? 'category-body_wrapper-listView' : ''}
							`}
							>
								{
									categoriesList?.map((category, index) => (
											<div
												key={category?._id}
												className={`category-body_accordingHeader
											${toggleView ? 'category-body_accordingHeader-listView' : ''}
											`}
												style={{
													backgroundImage: `${toggleView
														?
														''
														:
														`url(${
															category?.category_image
																?
																category?.category_image
																:
																noImage
														})`}`
												}}
											>
												<div
													className={`category-body_accordingHeader-block 
												${toggleView ? 'category-body_accordingHeader-listView_block' : ''}`}
													onClick={() => {
														showList()
														setCategoryIdState(category?._id)
														setCategoryNameOpen(category?.category_name)
													}}
												>
													{
														toggleView
														&&
														<img
															src={category?.category_image ? category?.category_image : noImage}
															alt='no Image'
														/>
													}
													<p>
														<b>
															{category?.category_name}
														</b>
													</p>

												</div>
												<DropdownEdit
													categoryName={category?.category_name}
													categoryImage={category?.category_image}
													id={category?._id}
												/>
											</div>
										)
									)
								}
								<div className='category-body_wrapper-view'>
									<button
										className="category-body_wrapper-view_button"
										onClick={toggleViewHandler}
									>
										{
											toggleView
												?
												<img
													src={squareView}
													alt="List View"
												/>
												:
												<img
													src={listView}
													alt="Square View"
												/>
										}


									</button>
								</div>
							</div>
						</>
					:
					<div className='h-100 w100 d-flex align-items-center justify-content-center'>
						<button
							className="editProfile-body_content_button"
							onClick={showRegistrationShopWindow}
						>
						<span>
							<FormattedMessage id='createShopOrMenu' />
						</span>
						</button>
					</div>
			}

			{
				user?.shop_name && <CategoryInpName />
			}
		</div>
	)
}

export default Category
