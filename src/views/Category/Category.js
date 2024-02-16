import {
	useDispatch,
	useSelector
} from "react-redux"
import React, {
	useCallback,
	useEffect,
	useState
} from "react"
import ShopLogo from "../../assets/images/default-logo-shop.png"
import DropdownEdit from "../../components/DropdownEdit/DropdownEdit"
import {
	FormattedMessage,
	useIntl
} from "react-intl"
import {
	useGetCategoriesMutation,
	useGetItemListMutation,
	useSearchProductMutation
} from "../../redux/services/categoriesApi"
import Loader from "../../components/Loader/Loader"
import { LINK_FOR_CLIENT } from "../../utils/constants"
import { addSpace } from "../../utils/toggleSpaceString"
import CategoryInpName from "./CategoryInpName"
import ProductList from "../ProductList/ProductList"
import { RegistrationShop } from "../Login/RegistrationShop"
import noImage from '../../assets/images/default-no-photo.png'

import ListView from "../../assets/icons/list.svg"
import SquareView from '../../assets/icons/checkbox-unchecked.svg'
import ListViewOrange from "../../assets/icons/list-orange.svg"
import SquareViewOrange from '../../assets/icons/checkbox-unchecked-orange.svg'

const Category = ({
	toggleViewHandler,
	toggleView,
	optionsSearch,
	isSearchTagLoading
}) => {
	const {
		categories,
		message
	} = useSelector(state => state.categoriesStore)
	const {user} = useSelector((state) => state.userStore)
	const {searchItem, statusSearchWindow} = useSelector(state => state.categoriesStore)
	const [getCategories, {isLoading: isGetCategoriesLoading}] = useGetCategoriesMutation()
	const [getItemList, {isLoading: isGetItemListLoading}] = useGetItemListMutation()
	const [shopProductsList, setShopProductsList] = useState(false)
	const [categoryIdState, setCategoryIdState] = useState(null)
	const [categoryNameOpen, setCategoryNameOpen] = useState(null)
	const [openRegistrationShopWindow, setOpenRegistrationShopWindow] = useState(false)
	const dispatch = useDispatch()

	const userHeight = window.innerHeight / 2

	const categoriesList = categories || []
	// const dispatch = useDispatch()
	const {formatMessage} = useIntl()

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

	if (shopProductsList && !statusSearchWindow) {
		return isGetItemListLoading ? <Loader /> : <ProductList
			hideList={hideList}
			categoryIdState={categoryIdState}
			categoryNameOpen={categoryNameOpen}
			searchMarker={true}
		/>
	} else if (statusSearchWindow) {
		return <ProductList
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
		<div className='category '>
			{
				user?.created_shop
				&&
				<div className='category-header'>
					<a
						className='header-desktop_infoShop'
						href={`${LINK_FOR_CLIENT}${user?.shop_name}`}
						target='_blank'
						rel='noreferrer noopener'
					>
						<div
							className='header-desktop_infoShop-logo'
							style={
								user?.image_logo
									?
									{backgroundImage: `url(${user?.image_logo})`}
									:
									{backgroundImage: `url(${ShopLogo})`}
							}
						/>
						<div className='header-desktop_infoShop-content'>
							<span className='header-desktop_infoShop-content_name'>
								{user?.shop_name ? addSpace(user?.shop_name) : 'Shop Name'}
							</span >
						</div >
					</a >
					<div className='category-header_view'>
						<div className='category-header_view-buttons'>
								<button
									className='category-header_view-button'
									onClick={() => toggleViewHandler('view')}
								>
								{
									!toggleView
										?
										<img
											src={ListView}
											alt='ListView'
										/>
										:
										<img
											src={ListViewOrange}
											alt='ListViewOrange'
										/>
								}
							</button >
							<button
								className='category-header_view-button'
								onClick={() => toggleViewHandler('view')}
							>
								{
									toggleView
										?
										<img
											src={SquareView}
											alt='SquareView'
										/>
										:
										<img
											src={SquareViewOrange}
											alt='SquareViewOrange'
										/>
								}
							</button >
						</div >
						{
							user?.created_shop && <CategoryInpName />
						}
					</div >
				</div >
			}
			{
				(user?.created_shop)
					?
					isGetCategoriesLoading
						?
						<Loader />
						:
						<>
							{
								categoriesList?.length < 1
								&&
								<h1 className='productList-arrowDown'>
									{
										message?.text
											?
											(
												message?.text
												&&
												<div >
													<p >{message?.text}</p >
													<a href={message?.link}>
														<FormattedMessage id='payForSubscription' />
													</a >
												</div >
											)
											:
											<FormattedMessage id='noCategory' />
									}
								</h1 >
							}
							<div
								className={`category-body_wrapper ${toggleView ? 'category-body_wrapper-listView' : ''} `}
								style={{height: `${ userHeight < 300 ? userHeight + 40 : ''}px`}}
							>
								{
									categoriesList?.map((category, index) => (
											<div
												key={category?._id}
												className={`category-body_accordingHeader ${toggleView ? 'category-body_accordingHeader-listView' : ''} `}
											>
												<div className='category-body_accordingHeader-top'>
													<p
														className='category-body_accordingHeader-title'
														onClick={() => {
															showList()
															setCategoryIdState(category?._id)
															setCategoryNameOpen(category?.category_name)
														}}
													>
														{category?.category_name}
													</p >
													<div className='category-body_accordingHeader-block'>
													<DropdownEdit
														categoryName={category?.category_name}
														categoryImage={category?.category_image}
														id={category?._id}
													/>
														<p className='category-body_accordingHeader-block_counter'>
															{category?.category_list?.length}
														</p >
													</div >
												</div >
												<div
													key={category?._id}
													onClick={() => {
														showList()
														setCategoryIdState(category?._id)
														setCategoryNameOpen(category?.category_name)
													}}
													className={`${toggleView ? 'category-body_accordingHeader-listView_img' : 'category-body_accordingHeader-img'} `}
													style={{
														backgroundImage: `url(${
															category?.category_image
																?
																category?.category_image
																:
																noImage
														}`
													}}
												>
											</div >
										</div >
										)
									)
								}
							</div >
						</>
					:
					<div className='h-100 w-100 d-flex align-items-center justify-content-center'>
						<button
							className='editProfile-body_content_button'
							onClick={showRegistrationShopWindow}
						>
						<span >
							<FormattedMessage id='createShopOrMenu' />
						</span >
						</button >
					</div >
			}
		</div >
	)
}

export default Category
