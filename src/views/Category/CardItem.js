import productImg from "../../assets/images/happySocks.png"
import LoaderForButton from "../../components/Loader/LoaderForButton"
import { Form } from "react-bootstrap"
import pencilEdit from "../../assets/icons/pencilEdit.svg"
import deleteCard from "../../assets/icons/delete.svg"
import ModalDelete from "../../components/Modal/ModalDelete"
import { useState } from "react"
import { useIntl } from "react-intl"

const CardItem = ({
	item,
	isPatchAvailableItemProductLoading,
	setAvailableProduct,
	availableCheckedProduct,
	showModalCard,
	setIdItemProductCard,
	setEditItemProductCard
}) => {
	const [modalShow, setModalShow] = useState(false)
	const {formatMessage} = useIntl()
	const showModal = () => setModalShow(true)
	const hideModal = () => setModalShow(false)

	return (
		<>
			<ModalDelete
				show={modalShow}
				onHide={hideModal}
				content={{
					name: item?.name_product,
					id: item?._id,
					where: 'product'
				}}
			/>
			<li
				key={item?._id}
				className="category-body_item"
			>
				<img
					src={item?.image_product ? item?.image_product : productImg}
					alt="photo product"
				/>
				<h3>{item?.name_product}</h3>
				{
					item?.description_product && <p>{item?.description_product}</p>
				}

				<span>
					{formatMessage ({id: 'unitFor'})} <span><b>{item?.unit_product}</b>
				</span>
					</span>
				<span>
						{formatMessage ({id: 'price'})} <span className='category-body_item-price'>
					<b>{item?.price_product}.00 {item?.currency_product}</b>
					</span>
					</span>
				<div className="category-body_available">
					<span>
						{formatMessage ({id: 'available'})}
					</span>
					{
						isPatchAvailableItemProductLoading &&
						<div className='small-loader'>
							<LoaderForButton />
						</div>
					}
					<Form.Check
						type="switch"
						id="example-checked12"
						defaultChecked={item?.available_product}
						onChange={() => {
							setAvailableProduct(!item?.available_product)
							availableCheckedProduct(item?._id, !item?.available_product)
						}
						}
					/>
				</div>

				<button
					className="category-body_addProduct"
					onClick={() => {
						showModalCard()
						setIdItemProductCard(item?._id)
						setEditItemProductCard(item)
					}}
				>
					<img
						src={pencilEdit}
						alt="edit"
						title={formatMessage ({id: 'editProductCard'})}
					/>
				</button>
				<button
					className="category-body_addProduct category-body_addProduct-delete"
					onClick={showModal}
				>
					<img
						src={deleteCard}
						alt="delete"
						title={formatMessage ({id: 'deleteProductCard'})}
					/>
				</button>
			</li>
		</>
	)
}

export default CardItem