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

const ModalSaveCategory = ({
	show,
	handleClose,
	categoryNameEdit,
	isEdit
}) => {
	const [categoryName, setCategoryName] = useState('')
	const { formatMessage } = useIntl()
	const [createCategories, {isLoading: isCreateCategoriesLoading}] = useCreateCategoriesMutation()
	const [updateCategoryName, {isLoading: isUpdateCategoryNameLoader}] = useUpdateCategoryNameMutation()

	const isLoading = isUpdateCategoryNameLoader || isCreateCategoriesLoading

	const handlerSaveCategory = async (e) => {
		e.stopPropagation()
		if (isEdit) {
			try {
				const {data} = await updateCategoryName({
					id: categoryNameEdit.id,
					body: {category_name: categoryName}
				})
				toast(data?.message)
				handleClose()
			} catch (e) {
				console.log(e)
			}
		} else {
			if (categoryName) {
				try {
					await createCategories({category_name: categoryName})
					handleClose()
				} catch (e) {
					console.log(e)
				}
			}
		}

	}

	if (isLoading) {
		return <Loader />
	}

	return (
		<Modal
			show={show}
			onHide={handleClose}
			centered={true}
		>
			<Modal.Header closeButton>
				<Modal.Title>
					{
						isEdit ? <FormattedMessage id='editCategoryName' /> : <FormattedMessage id='createCategory' />
					}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Control
					type="text"
					placeholder={formatMessage({id: 'enterCategoryName'})}
					name='name_product'
					defaultValue={isEdit && categoryNameEdit?.name}
					onChange={e => setCategoryName(e.target.value)}
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