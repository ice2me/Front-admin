import React, { useState } from 'react'
import {
	Button,
	Form,
	Modal
} from "react-bootstrap"
import {
	useCreateCategoriesMutation,
	useUpdateCategoryNameMutation
} from "../../redux/services/categoriesApi"
import { toast } from "react-toastify"
import {
	FormattedMessage,
	useIntl
} from "react-intl"
import Loader from "../Loader/Loader"
import Resizer from "react-image-file-resizer";
import delImage from "../../assets/icons/delete.svg";

const ModalSaveCategory = ({
	show,
	handleClose,
	categoryNameEdit,
}) => {
	const [categoryName, setCategoryName] = useState(categoryNameEdit?.name || '')
	const [image, setImage] = useState(categoryNameEdit?.image || null)
	const [imageName, setImageName] = useState(categoryNameEdit?.image || '')
	const {formatMessage} = useIntl()
	const [createCategories, {isLoading: isCreateCategoriesLoading}] = useCreateCategoriesMutation()
	const [updateCategoryName, {isLoading: isUpdateCategoryNameLoader}] = useUpdateCategoryNameMutation()

	const isLoading = isUpdateCategoryNameLoader || isCreateCategoriesLoading

	const handlerSaveCategory = async (e) => {
		e.stopPropagation()
		const tehData = {
			category_image: image || null,
			category_name: categoryName
		}

		if (categoryNameEdit?.id) {
			try {
				if (categoryName !== '') {
					const {data} = await updateCategoryName({
						id: categoryNameEdit?.id,
						body: tehData
					})
					handleClose()
				}
			} catch (e) {
				console.log(e)
			}
		} else {
			if (categoryName) {
				try {
					await createCategories(tehData)
					handleClose()
					setImage(null)

				} catch (e) {
					console.log(e)
				}
			}
		}

	}

	if (isLoading) {
		return <Loader />
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
			},
			"base64",
			50,
			50
		)
	}

	return (
		<Modal
			show={show}
			onHide={handleClose}
			centered={true}
			backdrop="static"
		>
			<Modal.Header closeButton>
				<Modal.Title>
					{
						categoryNameEdit?.id
							?
							<FormattedMessage id='editCategoryName' />
							:
							<FormattedMessage id='createCategory' />
					}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Group
					controlId="formFile"
					className='modalAddCard-form_addPhoto'
				>
					<Form.Label>
						<span>{image ? imageName : <FormattedMessage id='addPhotoCategory' />}</span>
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
					{
						image
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
				<Form.Control
					type="text"
					placeholder={formatMessage({id: 'enterCategoryName'})}
					name='name_product'
					defaultValue={categoryNameEdit?.id && categoryNameEdit?.name}
					onChange={e => {
						e.stopPropagation()
						setCategoryName(e.target.value)
					}}
					autoFocus='on'
					autoComplete='off'
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="secondary"
					onClick={handleClose}
				>
					<FormattedMessage id='close' />
				</Button>
				<Button
					variant="primary"
					onClick={handlerSaveCategory}
					style={{
						maxHeight: '33px',
						display: 'flex',
						alignItems: 'center'
					}}
				>
					<FormattedMessage id='addCategory' />
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default ModalSaveCategory