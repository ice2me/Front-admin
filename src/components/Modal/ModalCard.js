import {
	Button,
	Form,
	Modal
} from "react-bootstrap"
import productImg from "../../assets/icons/happySocks.svg"
import {
	useEffect,
	useState
} from "react"
import {
	useAddItemMutation,
	usePatchItemProductMutation
} from "../../redux/services/categoriesApi"
import Resizer from "react-image-file-resizer"
import delImage from '../../assets/icons/delete.svg'
import { toast } from "react-toastify"
import {
	FormattedMessage,
	useIntl
} from "react-intl";
import Loader from "../Loader/Loader";


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
	const {formatMessage} = useIntl()

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
			name_product: form?.name_product || 'no name',
			description_product: form?.description_product,
			unit_product: form?.unit_product || 'шт.',
			price_product: form?.price_product || '0',
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
				// toast(data?.message)
			} else {
				const {data} = await addItem(tehData)
				// toast(data?.message)
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
			200,
			150,
			"JPEG",
			100,
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
	if (isLoading) {
		return <Loader />
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
					<FormattedMessage id='addProductCard' />
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
								<span>{image ? imageName : <FormattedMessage id='addPhotoProduct' />}</span>
							</Form.Label>
							<Form.Control
								type="file"
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
							<Form.Label>
								<FormattedMessage id='nameProduct' />
							</Form.Label>
							<Form.Control
								type="text"
								placeholder={formatMessage({id: 'nameEnterProduct'})}
								name='name_product'
								required
								value={editItemProductCard && form?.name_product}
								onChange={e => formUpdateHandler({[e.target.name]: e.target.value})}
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
						>
							<Form.Label>
								<FormattedMessage id='enterDescription' />
							</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								name='description_product'
								placeholder={formatMessage({id: 'enterProductDescription'})}
								value={editItemProductCard && form?.description_product}
								onChange={(e) => formUpdateHandler({[e.target.name]: e.target.value})}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>
								<FormattedMessage id='unitsProduct' />
							</Form.Label>
							<Form.Select
								onChange={(e) => formUpdateHandler({[e.target.name]: e.target.value})}
								aria-label="Units product"
								name='unit_product'
								value={editItemProductCard ? form?.unit_product : form?.unit_product}
							>
								<option
									value={formatMessage({id: 'piece'})}
									defaultChecked
								>
									<FormattedMessage id='piece' />
								</option>
								<option value={formatMessage({id: 'kilogram'})}>
									<FormattedMessage id='kilogram' />
								</option>
								<option value={formatMessage({id: 'gram'})}>
									<FormattedMessage id='gram' />
								</option>
								<option value={formatMessage({id: 'liter'})}>
									<FormattedMessage id='liter' />
								</option>
								<option value={formatMessage({id: 'milliliter'})}>
									<FormattedMessage id='milliliter' />
								</option>
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>
								<FormattedMessage id='priceProduct' />
							</Form.Label>
							<Form.Control
								type="number"
								required
								placeholder={formatMessage({id: 'priceEnterProduct'})}
								name='price_product'
								value={editItemProductCard && form?.price_product}
								onChange={(e) => formUpdateHandler({[e.target.name]: e.target.value})}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>
								<FormattedMessage id='currencyProduct' />
							</Form.Label>
							<Form.Select
								aria-label="Currency product"
								name='currency_product'
								value={editItemProductCard && form?.currency_product}
								onChange={(e) => formUpdateHandler({[e.target.name]: e.target.value})}
								disabled
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
								<Form.Label>
									<FormattedMessage id='availableProduct' />
								</Form.Label>
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
						<h3>{form?.name_product || <FormattedMessage id='nameProduct' />}</h3>
						<span className='text-center'>
						<FormattedMessage id='price' />
							<span
								className='category-body_item-price'
							>
								{form?.price_product || '99'} {form?.currency_product || '₴'}
							</span>
						</span>
						<p>
							{form?.description_product || <FormattedMessage id='loremText' /> }
						</p>
						<span>
							<FormattedMessage
								id='unitFor'
								values={{
									unit: form?.unit_product === 'gram' ||
									form?.unit_product === 'грам' ||
									form?.unit_product === 'milliliter' ||
									form?.unit_product === 'мілілітр'
										? '100'
										: '1'
								}}
							/>
							<span>
							{form?.unit_product || <FormattedMessage id='piece' />}
						</span>
					</span>
						<div className="modalAddCard-available">
							<span>
								<FormattedMessage id='available' />
							</span>
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
					<FormattedMessage id='close' />
				</Button>
				<Button
					variant="primary"
					style={{
						maxHeight: '33px',
						display: 'flex',
						alignItems: 'center'
					}}
					onClick={onSubmitForm}
					disabled={!isEdit || ((form.price_product && form.name_product) === "")}
				>
					<FormattedMessage id='save' />
				</Button>
			</Modal.Footer>
		</Modal>
	)
}
