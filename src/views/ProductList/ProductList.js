import React, {
	useCallback,
	useEffect,
	useState
} from 'react'
import {
	useLocation,
	useNavigate
} from "react-router-dom"
import {
	useGetItemListMutation,
	usePatchAvailableItemProductMutation
} from "../../redux/services/categoriesApi"
import ModalCard from "../../components/Modal/ModalCard"
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd"
import close from '../../assets/icons/exit.svg'
import { APP_ROUTE } from "../../utils/constants";
import Loader from "../../components/Loader/Loader";
import {
	useDispatch,
	useSelector
} from "react-redux";
import CardItem from "../Category/CardItem";
import { toast } from "react-toastify";
import { resetItemsLIst } from "../../redux/slices/categoriesSlice";
import arrowDown from "../../assets/icons/arrowDown.svg";
import { useIntl } from "react-intl";

const initialState = {
	image_product: '',
	name_product: '',
	description_product: '',
	unit_product: '',
	price_product: '',
	currency_product: '',
	available_product: true
}

const ProductList = () => {
	const [modalShow, setModalShow] = useState(false)
	const [categoryIdChange, setCategoryIdChange] = useState(null)
	const [editItemProductCard, setEditItemProductCard] = useState(initialState)
	const [idItemProductCard, setIdItemProductCard] = useState(null)
	const [availableChecked, setAvailableChecked] = useState(true)
	const [availableProduct, setAvailableProduct] = useState(true)
	const { formatMessage } = useIntl()
	const {
		items,
		categories
	} = useSelector(state => state.categories)
	const [getItemList, {isLoading: isGetItemListLoading}] = useGetItemListMutation()
	const [patchAvailableItemProduct, {isLoading: isPatchAvailableItemProductLoading}] = usePatchAvailableItemProductMutation()
	const {state} = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const showModalCard = () => setModalShow(true)
	const closeModalCard = () => {
		setModalShow(false)
		setIdItemProductCard(null)
		setEditItemProductCard(initialState)
	}

	const listItems = useCallback(async () => {
		setCategoryIdChange(state?.id)
		try {
			await getItemList(state?.id)
		} catch (e) {
			console.log(e)
		}
	}, [categoryIdChange])

	useEffect(() => {
		if (state?.id) {
			listItems()
		}

	}, [state?.id])

	const availableCheckedProduct = async (id, availableItem) => {
		try {
			const {data} = await patchAvailableItemProduct({
				id: id,
				body: {
					available_product: availableItem
				}
			})
			toast(data?.message)
		} catch (e) {
			console.log(e)
		}
	}

	const backToHomePage = () => {
		dispatch(resetItemsLIst())
		navigate(APP_ROUTE.DEFAULT)
	}

	return (
		<div className='category productList'>
			<ModalCard
				show={modalShow}
				onHide={closeModalCard}
				id={categoryIdChange}
				editItemProductCard={editItemProductCard}
				idItemProductCard={idItemProductCard}
				setAvailableChecked={setAvailableChecked}
				availableChecked={availableChecked}
			/>
			{
				isGetItemListLoading
					?
					<Loader />
					:
					<>
						<h1 className="productList-title">
							{state?.name}
							<button
								className='productList-button'
								onClick={backToHomePage}
							>
								<img
									src={close}
									alt="close"
								/>
							</button>
						</h1>
						{
							items.length < 1
								?
								<h1 className="productList-arrowDown">
									{formatMessage({id: 'createProductCard'})}
									<img
										src={arrowDown}
										alt="arrow down"
									/>
								</h1>
								:
								<div className='productList-wrapper'>
									<ul>
										{
											items.map(item => <CardItem
												key={item._id}
												item={item}
												isPatchAvailableItemProductLoading={isPatchAvailableItemProductLoading}
												setAvailableProduct={setAvailableProduct}
												availableCheckedProduct={availableCheckedProduct}
												showModalCard={showModalCard}
												setIdItemProductCard={setIdItemProductCard}
												setEditItemProductCard={setEditItemProductCard}
											/>)
										}
									</ul>
								</div>
						}
					</>
			}


			<ButtonAdd
				handler={showModalCard}
				title={formatMessage({id: 'product'})}
			/>
		</div>
	)
}

export default ProductList
