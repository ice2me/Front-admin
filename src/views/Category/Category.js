/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
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
import {
	FormattedMessage,
	useIntl
} from "react-intl"
import {
	useGetCategoriesMutation,
	useGetItemListMutation,
	useSearchProductMutation,
	useSearchTagMutation
} from "../../redux/services/categoriesApi"
import Loader from "../../components/Loader/Loader"
import CategoryInpName from "./CategoryInpName"
import ProductList from "../ProductList/ProductList"
import { RegistrationShop } from "../Login/RegistrationShop"
import squareView from '../../assets/icons/checkbox-unchecked.svg'
import listView from '../../assets/icons/list.svg'
import noImage from '../../assets/icons/happySocks.svg'
import {
	Button,
	Form
} from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead"
import searchIcon from '../../assets/icons/search.svg'

const Category = ({
	toggleViewHandler,
	toggleView,
	optionsSearch,
	isSearchTagLoading
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
	const [searchValueArr, setSearchValueArr] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [showSearchWindow, setShowSearchWindow] = useState(false)
	const [searchProduct, {isLoading: isSearchProductLoading}] = useSearchProductMutation()

	const categoriesList = categories || []
	const dispatch = useDispatch()
	const {formatMessage} = useIntl()

	const showList = () => setShopProductsList(true)
	const hideList = () => setShopProductsList(false)

	const showRegistrationShopWindow = () => setOpenRegistrationShopWindow(true)
	const hideRegistrationShopWindow = () => setOpenRegistrationShopWindow(false)
	const toggleSearchWindow = () => setShowSearchWindow(!showSearchWindow)

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

	useEffect(() => {
		setSearchValue(searchValueArr.length >= 1 ? searchValueArr?.slice(0, 1).shift() : '')
	}, [searchValueArr])

	const searchHandler = async () => {
		await searchProduct({
			id: user._id,
			product_name: searchValue
		})
		setSearchValueArr([])
		toggleSearchWindow()
	}

	if (shopProductsList) {
		return isGetItemListLoading ? <Loader /> : <ProductList
			hideList={hideList}
			categoryIdState={categoryIdState}
			categoryNameOpen={categoryNameOpen}
			searchMarker={true}
		/>
	} else if (showSearchWindow) {
		return isSearchProductLoading ? <Loader /> : <ProductList
			hideList={toggleSearchWindow}
			categoryIdState={categoryIdState}
			categoryNameOpen={formatMessage({id: 'search'})}
			searchMarker={false}
		/>
	} else if (openRegistrationShopWindow) {
		return openRegistrationShopWindow
			&&
			<RegistrationShop hideRegistrationShopWindow={hideRegistrationShopWindow} />
	}

	return (
		<div className="category ">
			<div className="category-header">
				<h1 className="category-title">
					<FormattedMessage id='categoryList' />
				</h1>
				<Form className='category-header_wrapper'>
					<img
						src={searchIcon}
						alt=""
					/>
					<Form.Group>
						<Typeahead
							id="basic-typeahead-single"
							labelKey="searchProduct"
							onChange={setSearchValueArr}
							options={optionsSearch}
							placeholder={formatMessage({id: 'nameProduct'})}
							selected={searchValueArr}
						/>
					</Form.Group>
						<Button
							onClick={searchHandler}
							disabled={searchValueArr.length < 1}
							style={{opacity: `${searchValueArr.length >= 1 ? '1' : '0'}`}}
						>
							{isSearchTagLoading
								?
								'Loading'
								:
								<FormattedMessage id='search' />
							}
						</Button>
				</Form>
			</div>
			{
				(user?.created_shop)
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
										onClick={() => toggleViewHandler('view')}
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
					<div className='h-100 w-100 d-flex align-items-center justify-content-center'>
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
