import {
	Button,
	Form,
	Modal
} from "react-bootstrap"
import productImg from "../../assets/images/happySocks.png"
import {
	useEffect,
	useState
} from "react"
import {
	useAddItemMutation,
	usePatchItemProductMutation
} from "../../redux/services/categoriesApi"
import LoaderForButton from "../Loader/LoaderForButton"
import Resizer from "react-image-file-resizer"
import delImage from '../../assets/icons/delete.svg'
import { toast } from "react-toastify"


const initialState = {
	image_product: '',
	name_product: '',
	description_product: '',
	unit_product: '',
	price_product: '',
	currency_product: '',
	available_product: true
}

export default function ModalCard({
	show,
	onHide,
	id,
	editItemProductCard,
	idItemProductCard,
	availableChecked,
	setAvailableChecked,
}) {
	const [form, setForm] = useState(initialState)
	const [image, setImage] = useState(null)
	const [imageName, setImageName] = useState('')
	const [isEdit, setIsEdit] = useState(false)

	const [addItem, {isLoading: isAddItemLoader}] = useAddItemMutation()
	const [patchItemProduct, {isLoading: isPatchItemProduct}] = usePatchItemProductMutation()

	const isLoading = isAddItemLoader || isPatchItemProduct
	const formUpdateHandler = (opt) => {
		setForm({...form, ...opt})
		setIsEdit(true)
	}

	useEffect(() => {
	}, [availableChecked])


	useEffect(() => {
		if (editItemProductCard && idItemProductCard) {
			setForm(editItemProductCard)
			setImage(editItemProductCard?.image_product)
			setImageName('image/jpeg')
			setAvailableChecked(editItemProductCard?.available_product || true)
		} else {
			setForm(initialState)
			setImage(null)
			setImageName('')
		}
	}, [editItemProductCard])

	const onSubmitForm = async (e) => {
		e.preventDefault()
		const tehData = {
			image_product: image || null,
			name_product: form?.name_product,
			description_product: form?.description_product,
			unit_product: form?.unit_product || 'piece',
			price_product: form?.price_product,
			currency_product: form?.currency_product || '₴',
			available_product: form?.available_product,
			category_id: editItemProductCard?._id ? editItemProductCard?._id : id
		}

		try {
			if (editItemProductCard && idItemProductCard) {
				const {data} = await patchItemProduct({
					id: editItemProductCard?._id,
					body: tehData
				})
				// console.log(data)
				toast(data?.message)
			} else {
				const {data} = await addItem(tehData)
				toast(data?.message)
			}
			onHide()
			setForm(initialState)
			setImage(null)

		} catch (e) {
			console.log(e)
		}
	}

	const resizeFile = (file) => {
		Resizer.imageFileResizer(
			file,
			150,
			100,
			"JPEG",
			80,
			0,
			(uri) => {
				setImage(uri)
				setIsEdit(true)
			},
			"base64",
			50,
			50
		)
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			backdrop="static"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add Product Card
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='modalAddCard'>
					<Form
						className='modalAddCard-form'
						name='form'
					>
						<Form.Group
							controlId="formFile"
							className='modalAddCard-form_addPhoto'
						>
							<Form.Label>
								<span>{image ? imageName : 'Add Photo product'}</span>
							</Form.Label>
							<Form.Control
								type="file"
								placeholder="Enter shop logo"
								name='image_product'
								accept="image/png, image/jpeg"
								autoFocus
								onChange={e => {
									resizeFile(e.target.files[0])
									setImageName((e.target.files[0].name))
								}}
							/>
							{image
								&&
								<button
									className='modalAddCard-form_delPhoto'
									onClick={() => {
										setImage(null)
										setImageName('')
									}
									}
								>
									<img
										src={delImage}
										alt="delete Image"
										title='delete image'
									/>
								</button>
							}
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Name product</Form.Label>
							<Form.Control
								type="text"
								placeholder="Name product"
								name='name_product'
								value={editItemProductCard && form?.name_product}
								onChange={e => formUpdateHandler({[e.target.name]: e.target.value})}
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
						>
							<Form.Label>Enter Description</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								name='description_product'
								value={editItemProductCard && form?.description_product}
								onChange={(e) => formUpdateHandler({[e.target.name]: e.target.value})}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Units product</Form.Label>
							<Form.Select
								onChange={(e) => formUpdateHandler({[e.target.name]: e.target.value})}
								aria-label="Units product"
								name='unit_product'
								value={editItemProductCard ? form?.unit_product : form?.unit_product}
							>
								<option
									value="piece"
									defaultChecked
								>piece
								</option>
								<option value="kilogram">kilogram</option>
								<option value="gram">gram</option>
								<option value="liter">liter</option>
								<option value="milliliter">milliliter</option>
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Price product</Form.Label>
							<Form.Control
								type="number"
								placeholder="Price product"
								name='price_product'
								value={editItemProductCard && form?.price_product}
								onChange={(e) => formUpdateHandler({[e.target.name]: e.target.value})}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Currency product</Form.Label>
							<Form.Select
								aria-label="Currency product"
								name='currency_product'
								value={editItemProductCard && form?.currency_product}
								onChange={(e) => formUpdateHandler({[e.target.name]: e.target.value})}
							>
								<option
									value="₴"
									defaultChecked
								>₴
								</option>
								<option value="$">$</option>
								<option value="€">€</option>
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3">
							<div className='modalAddCard-switch'>
								<Form.Label>Available</Form.Label>
								<Form.Check
									type="switch"
									id="example-checked"
									name='available_product'
									onChange={(e) => {
										setAvailableChecked(e.target.checked)
										formUpdateHandler({[e.target.name]: e.target.checked})
									}}
									defaultChecked={form?.available_product}
								/>
							</div>
						</Form.Group>
					</Form>
					<div className='modalAddCard-wrapper'>
						<img
							src={image || productImg}
							alt="image"
						/>
						<h3>{form?.name_product || 'Name product'}</h3>
						<p>
							{form?.description_product || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ipsa.'}
						</p>
						{/*<div className='modalAddCard-counter'>*/}
						{/*	<button>*/}
						{/*		-*/}
						{/*	</button>*/}
						{/*	<input*/}
						{/*		type="number"*/}
						{/*		min="1"*/}
						{/*		max="9999"*/}
						{/*		defaultValue={form?.amount_product || '1'}*/}
						{/*	/>*/}
						{/*	<button>*/}
						{/*		+*/}
						{/*	</button>*/}
						{/*	<span>{form?.unit_product || 'kilogram'}</span>*/}
						{/*</div>*/}
						<span>
						Unit for 1: <span>{form?.unit_product || 'piece'}</span>
					</span>
						<span>
						Price: <span
							className='home-body_item-price'
						>{form?.price_product || '99'} {form?.currency_product ||
							'₴'}</span>
					</span>
						<div className="modalAddCard-available">
							<span>Available: </span>
							<Form.Check
								type="switch"
								id="example-checked1"
								disabled
								checked={availableChecked}
							/>
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="secondary"
					onClick={onHide}
				>
					Close
				</Button>
				<Button
					variant="primary"
					style={{
						maxHeight: '33px',
						display: 'flex',
						alignItems: 'center'
					}}
					onClick={onSubmitForm}
					disabled={!isEdit}
				>
					{isLoading ? <LoaderForButton /> : 'Save Product Card'}
				</Button>
			</Modal.Footer>
		</Modal>
	)
}
