import React, {
	useMemo,
	useState
} from 'react'
import { useLocation } from "react-router-dom"
import { usePatchAvailableItemProductMutation } from "../../redux/services/categoriesApi"
import ModalCard from "../../components/Modal/ModalCard"
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd"
import close from '../../assets/icons/exit.svg'
import {
	useDispatch,
	useSelector
} from "react-redux"
import CardItem from "../Category/CardItem"
import { resetItemsLIst, resetSearchItem, toggleSearchWindow } from "../../redux/slices/categoriesSlice"
import {
	FormattedMessage,
	useIntl
} from "react-intl"

const initialState = {
	image_product: '',
	name_product: '',
	description_product: '',
	unit_product: '',
	price_product: '',
	currency_product: '',
	available_product: true
}

const ProductList = ({
	hideList,
	categoryIdState,
	categoryNameOpen,
	searchMarker
}) => {
	const [modalShow, setModalShow] = useState(false)
	const [editItemProductCard, setEditItemProductCard] = useState(initialState)
	const [idItemProductCard, setIdItemProductCard] = useState(null)
	const [availableChecked, setAvailableChecked] = useState(true)
	const {formatMessage} = useIntl()
	const {items, searchItem} = useSelector(state => state.categoriesStore)

	const [patchAvailableItemProduct, {isLoading: isPatchAvailableItemProductLoading}] = usePatchAvailableItemProductMutation()
	const {state} = useLocation()
	const dispatch = useDispatch()

	const showModalCard = () => setModalShow(true)
	const closeModalCard = () => {
		setModalShow(false)
		setIdItemProductCard(null)
		setEditItemProductCard(initialState)
	}

	const availableCheckedProduct = async (id, availableItem) => {
		try {
			await patchAvailableItemProduct({
				id: id,
				body: {
					available_product: availableItem
				}
			})
		} catch (e) {
			console.log(e)
		}
	}

	const backToHomePage = () => {
		if (searchMarker === false) {
			dispatch(toggleSearchWindow(false))
			dispatch(resetSearchItem())
		} else {
			hideList()
		}
	}

	return (
		<div className='category productList'>
			<ModalCard
				show={modalShow}
				onHide={closeModalCard}
				id={categoryIdState}
				editItemProductCard={editItemProductCard}
				idItemProductCard={idItemProductCard}
				setAvailableChecked={setAvailableChecked}
				availableChecked={availableChecked}
			/>
			{
				<>
					<h1 className="productList-title">
						{categoryNameOpen}
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
							<>
								<ButtonAdd
									handler={showModalCard}
									title={formatMessage({id: 'createProduct'})}
								/>
								<h1 className='productList-arrowDown'>
									{formatMessage({id: 'createProductCard'})}
								</h1 >
							</>
							:
							<div className='productList-wrapper'>
								{
									searchMarker === true
									&&
									<ButtonAdd
										handler={showModalCard}
										title={formatMessage({id: 'createProduct'})}
									/>
								}
								<ul>
									{
										items.map(item => <CardItem
											key={item._id}
											item={item}
											isPatchAvailableItemProductLoading={isPatchAvailableItemProductLoading}
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

		</div>
	)
}

export default ProductList
